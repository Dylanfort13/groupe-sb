/**
 * Re-encode oversized raster images in public/ to real, web-weight JPEG.
 *
 * Why this exists: the Gemini image API returns PNG, but generate-service-images.js
 * writes every result with a .jpg extension. That left 81 files that are PNG bytes
 * named .jpg, ~1.8MB each, served raw because next.config sets images.unoptimized.
 * A single category page was ~9MB.
 *
 * Rules:
 *   - Only touches files with a .jpg / .jpeg extension.
 *   - Never touches .png, .svg or fonts. Logos rely on PNG transparency and
 *     converting them to JPEG would flatten it to a solid box.
 *   - Never upscales. Sources are natively 1024x1024; enlarging them would add
 *     bytes for detail that does not exist.
 *   - Flattens any alpha onto the site background (#090909) rather than white,
 *     so a transparent source can never render as a white block on a dark page.
 *
 * Usage:
 *   node scripts/optimize-images.js --dry    report only, change nothing
 *   node scripts/optimize-images.js          re-encode in place
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const MAX_DIMENSION = 2048;
const QUALITY = 82;
const RECOMPRESS_JPEG_OVER = 400 * 1024; // leave already-small JPEGs alone
const BACKGROUND = { r: 0x09, g: 0x09, b: 0x09 };

const DRY = process.argv.includes('--dry');

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

function detectFormat(file) {
  const head = fs.readFileSync(file).subarray(0, 8).toString('hex');
  if (head.startsWith('ffd8ff')) return 'JPEG';
  if (head.startsWith('89504e47')) return 'PNG';
  return 'other';
}

async function main() {
  const targets = walk(PUBLIC_DIR).filter((f) =>
    ['.jpg', '.jpeg'].includes(path.extname(f).toLowerCase())
  );

  let before = 0;
  let after = 0;
  let converted = 0;
  let recompressed = 0;
  let skipped = 0;
  let alphaFound = 0;

  for (const file of targets) {
    const original = fs.statSync(file).size;
    const format = detectFormat(file);

    // A real JPEG that is already small enough is left exactly as it is.
    if (format === 'JPEG' && original <= RECOMPRESS_JPEG_OVER) {
      before += original;
      after += original;
      skipped++;
      continue;
    }

    const input = fs.readFileSync(file);
    const meta = await sharp(input).metadata();
    if (meta.hasAlpha) alphaFound++;

    const resize =
      meta.width > MAX_DIMENSION || meta.height > MAX_DIMENSION
        ? { width: MAX_DIMENSION, height: MAX_DIMENSION, fit: 'inside' }
        : null;

    let pipeline = sharp(input).flatten({ background: BACKGROUND });
    if (resize) pipeline = pipeline.resize(resize); // withoutEnlargement is implicit: fit inside + no upscale below
    const output = await pipeline
      .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
      .toBuffer();

    before += original;

    if (output.length >= original) {
      // Re-encoding made it bigger — keep the original.
      after += original;
      skipped++;
      continue;
    }

    after += output.length;
    if (format === 'PNG') converted++;
    else recompressed++;

    if (!DRY) fs.writeFileSync(file, output);
  }

  const mb = (n) => (n / 1024 / 1024).toFixed(1) + 'MB';
  console.log(DRY ? '\n--- DRY RUN, nothing written ---' : '\n--- re-encoded in place ---');
  console.log(`PNG-named-.jpg converted to real JPEG : ${converted}`);
  console.log(`oversized real JPEGs recompressed     : ${recompressed}`);
  console.log(`left untouched                        : ${skipped}`);
  console.log(`files with an alpha channel           : ${alphaFound} (flattened onto #090909)`);
  console.log(`total ${mb(before)} -> ${mb(after)}  (${(100 - (after / before) * 100).toFixed(1)}% smaller)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
