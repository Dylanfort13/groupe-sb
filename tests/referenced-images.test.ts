import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const SRC_DIR = path.join(ROOT, "src");

function walk(dir: string, acc: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (/\.(tsx?|ts)$/.test(entry.name)) acc.push(full);
  }
  return acc;
}

// Catches any hardcoded image path in src/ that has no file behind it —
// the exact class of bug that shipped 33 broken images to production.
describe("every image path hardcoded in src/", () => {
  it("has a real file in public/", () => {
    const missing: string[] = [];
    for (const file of walk(SRC_DIR)) {
      const source = fs.readFileSync(file, "utf8");
      const refs = source.match(/["'`](\/[A-Za-z0-9_\-./]+\.(?:jpg|jpeg|png|svg|webp))["'`]/g) || [];
      for (const raw of refs) {
        const rel = raw.slice(1, -1);
        if (!fs.existsSync(path.join(PUBLIC_DIR, rel))) {
          missing.push(`${path.relative(ROOT, file)} -> ${rel}`);
        }
      }
    }
    expect(missing).toEqual([]);
  });
});
