const https = require('https');
const fs = require('fs');
const path = require('path');

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error('GEMINI_API_KEY is not set. Run: export GEMINI_API_KEY=<key>');
  process.exit(1);
}
const OUT_DIR = path.join(__dirname, '..', 'public', 'services');

const SUFFIX = ', photorealistic, natural color, no HDR, no oversaturation, no text, no watermarks, no logos, no people';

const images = [
  // ── Construction > construction ──────────────────────────────────────────
  { division: 'construction', category: 'construction', i: 0,
    prompt: 'Exterior of a newly built wood-frame single-family house in Quebec, concrete foundation visible, clear sky, wide angle shot' + SUFFIX },
  { division: 'construction', category: 'construction', i: 1,
    prompt: 'Modern commercial building exterior under construction, steel frame structure with metal cladding panels, Quebec industrial zone' + SUFFIX },
  { division: 'construction', category: 'construction', i: 2,
    prompt: 'Freshly poured concrete in wooden formwork at construction site, close-up of wet concrete texture and rebar' + SUFFIX },

  // ── Construction > excavation-fondations ────────────────────────────────
  { division: 'construction', category: 'excavation-fondations', i: 0,
    prompt: 'Yellow excavator digging a deep rectangular foundation trench at a Quebec construction site, large soil pile beside' + SUFFIX },
  { division: 'construction', category: 'excavation-fondations', i: 1,
    prompt: 'Perforated drainage pipe installed along poured concrete foundation wall, gravel drainage layer, basement waterproofing detail' + SUFFIX },
  { division: 'construction', category: 'excavation-fondations', i: 2,
    prompt: 'Concrete foundation wall with visible crack being repaired with injection ports and epoxy, close-up detail' + SUFFIX },
  { division: 'construction', category: 'excavation-fondations', i: 3,
    prompt: 'Black spray-applied waterproofing membrane coating on concrete foundation exterior wall, thick rubberized layer, wet application' + SUFFIX },

  // ── Construction > isolation ─────────────────────────────────────────────
  { division: 'construction', category: 'isolation', i: 0,
    prompt: 'Spray polyurethane foam insulation applied to interior wall framing, white expanding foam filling stud cavities completely' + SUFFIX },
  { division: 'construction', category: 'isolation', i: 1,
    prompt: 'Blown cellulose insulation covering attic floor joists, thick uniform layer of gray fibrous material in attic space, wide angle' + SUFFIX },

  // ── Déneigement > deneigement ────────────────────────────────────────────
  { division: 'deneigement', category: 'deneigement', i: 0,
    prompt: 'Small pickup truck with plow blade clearing residential driveway in Quebec winter, heavy snowfall, suburban house, trees covered in snow' + SUFFIX },
  { division: 'deneigement', category: 'deneigement', i: 1,
    prompt: 'Large plow truck clearing commercial parking lot at night, parking lot lights reflecting on fresh snow, Quebec winter' + SUFFIX },
  { division: 'deneigement', category: 'deneigement', i: 2,
    prompt: 'Wheel loader clearing snow at large industrial yard, warehouses in background, heavy winter storm, Quebec' + SUFFIX },
  { division: 'deneigement', category: 'deneigement', i: 3,
    prompt: 'Snow plow truck parked on street at night headlights on, blizzard snowstorm, street lights reflecting on snow, Quebec winter road' + SUFFIX },
  { division: 'deneigement', category: 'deneigement', i: 4,
    prompt: 'Snow shovel resting against cleared front door entrance steps, freshly shoveled path, snow pile beside walkway, Quebec winter residential' + SUFFIX },

  // ── Déneigement > transport ───────────────────────────────────────────────
  { division: 'deneigement', category: 'transport', i: 0,
    prompt: 'Front loader filling large dump truck with compacted snow in parking lot at night, snow removal operation, truck lights on' + SUFFIX },
  { division: 'deneigement', category: 'transport', i: 1,
    prompt: '10-wheel dump truck driving on snowy Quebec highway in winter, boreal forest on both sides, overcast sky' + SUFFIX },
  { division: 'deneigement', category: 'transport', i: 2,
    prompt: 'Large 12-wheel articulated dump truck fully loaded with gravel material parked at quarry in Quebec, overcast sky' + SUFFIX },
  { division: 'deneigement', category: 'transport', i: 3,
    prompt: 'Heavy duty flatbed trailer attached to semi-truck on Quebec highway, open road, boreal conifer forest, overcast' + SUFFIX },

  // ── Déneigement > materiaux-granulaires ──────────────────────────────────
  { division: 'deneigement', category: 'materiaux-granulaires', i: 0,
    prompt: 'Large stockpile of crushed stone gravel aggregate at outdoor construction yard, multiple piles of different grades, Quebec' + SUFFIX },
  { division: 'deneigement', category: 'materiaux-granulaires', i: 1,
    prompt: 'Close-up texture of road salt mixed with coarse sand on dark pavement, winter de-icing materials stockpile' + SUFFIX },

  // ── Déneigement > amenagement ─────────────────────────────────────────────
  { division: 'deneigement', category: 'amenagement', i: 0,
    prompt: 'Freshly landscaped residential property, lush green lawn, newly planted small trees and shrubs, mulched garden beds, Quebec summer' + SUFFIX },
  { division: 'deneigement', category: 'amenagement', i: 1,
    prompt: 'Chain-link fence posts and wire mesh being installed in backyard, Quebec residential property, summer' + SUFFIX },
  { division: 'deneigement', category: 'amenagement', i: 2,
    prompt: 'Commercial street sweeper machine cleaning large paved parking lot, brushes spinning, spring cleaning operation' + SUFFIX },

  // ── Pieux Vistech > installation-pieux ───────────────────────────────────
  { division: 'pieux-vistech', category: 'installation-pieux', i: 0,
    prompt: 'Helical screw pile foundation for residential house, multiple steel screw piles installed with cap plates, construction site Quebec' + SUFFIX },
  { division: 'pieux-vistech', category: 'installation-pieux', i: 1,
    prompt: 'Multiple helical screw piles installed at commercial construction site, steel pile grid with connection brackets, wide angle' + SUFFIX },
  { division: 'pieux-vistech', category: 'installation-pieux', i: 2,
    prompt: 'Wooden deck frame construction on visible screw pile foundation posts, backyard, deck joists resting on helical pile caps' + SUFFIX },
  { division: 'pieux-vistech', category: 'installation-pieux', i: 3,
    prompt: 'Glass-enclosed three-season solarium addition on helical screw pile foundations, aluminum frame sunroom attached to house, Quebec' + SUFFIX },
  { division: 'pieux-vistech', category: 'installation-pieux', i: 4,
    prompt: 'House addition under construction showing wood framing on screw pile foundations, home extension visible from backyard, Quebec' + SUFFIX },

  // ── Pieux Vistech > types-projets ─────────────────────────────────────────
  { division: 'pieux-vistech', category: 'types-projets', i: 0,
    prompt: 'Multiple helical screw piles installed in open field ready for new construction, steel pile tops with mounting brackets, Quebec boreal landscape' + SUFFIX },
  { division: 'pieux-vistech', category: 'types-projets', i: 1,
    prompt: 'Helical screw piles being installed under existing house for foundation underpinning repair, lifting equipment beside building' + SUFFIX },
  { division: 'pieux-vistech', category: 'types-projets', i: 2,
    prompt: 'Small detached wooden garage sitting on visible helical screw pile foundation, Quebec residential property, summer' + SUFFIX },
  { division: 'pieux-vistech', category: 'types-projets', i: 3,
    prompt: 'Wooden dock extending over calm Quebec lake supported by metal helical screw piles in water, boreal forest background' + SUFFIX },

  // ── Transport > camion-lourd ──────────────────────────────────────────────
  { division: 'transport', category: 'camion-lourd', i: 0,
    prompt: 'Semi-truck driving on straight highway through boreal conifer forest in northern Quebec, long haul transport, overcast sky' + SUFFIX },
  { division: 'transport', category: 'camion-lourd', i: 1,
    prompt: 'Flatbed delivery truck unloading construction materials at job site, lumber and building supplies, Quebec construction site' + SUFFIX },
  { division: 'transport', category: 'camion-lourd', i: 2,
    prompt: 'Dump truck fully loaded with gravel and aggregate material driving on dirt road at quarry, dust rising, Quebec' + SUFFIX },

  // ── Transport > deplacement-machinerie ───────────────────────────────────
  { division: 'transport', category: 'deplacement-machinerie', i: 0,
    prompt: 'Yellow excavator loaded on lowboy trailer flatbed transport truck on Quebec highway, heavy machinery transport, wide shot' + SUFFIX },
  { division: 'transport', category: 'deplacement-machinerie', i: 1,
    prompt: 'Large industrial machinery secured on flatbed transport truck, oversized load sign, Quebec highway, escort vehicle' + SUFFIX },
  { division: 'transport', category: 'deplacement-machinerie', i: 2,
    prompt: 'Close-up of bright orange ratchet tie-down straps and load binders securing heavy cargo on flatbed trailer, professional rigging' + SUFFIX },

  // ── Transport > transport-materiel ───────────────────────────────────────
  { division: 'transport', category: 'transport-materiel', i: 0,
    prompt: 'Telescopic boom lift aerial work platform on flatbed trailer, orange lift machine secured for transport, construction yard' + SUFFIX },
  { division: 'transport', category: 'transport-materiel', i: 1,
    prompt: 'Assorted construction equipment on flatbed trailer, air compressor and small machinery secured with straps, ready for transport' + SUFFIX },
  { division: 'transport', category: 'transport-materiel', i: 2,
    prompt: 'Dump truck tilting bed unloading sand and gravel aggregate at construction site, material cascading down, dust cloud' + SUFFIX },
];

function callGemini(prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ['image', 'text'] },
    });

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      path: `/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error('JSON parse error: ' + data.slice(0, 300)));
        }
      });
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  console.log(`Generating ${images.length} images...\n`);
  let done = 0;
  let failed = 0;

  for (const img of images) {
    const outPath = path.join(OUT_DIR, img.division, img.category, `${img.i}.jpg`);

    if (fs.existsSync(outPath)) {
      console.log(`[SKIP] ${img.division}/${img.category}/${img.i}.jpg — already exists`);
      done++;
      continue;
    }

    process.stdout.write(`[${done + 1}/${images.length}] ${img.division}/${img.category}/${img.i} ... `);

    try {
      const res = await callGemini(img.prompt);

      if (res.error) {
        console.log(`ERROR: ${res.error.message}`);
        failed++;
        await sleep(2000);
        continue;
      }

      // find inlineData part
      const parts = res?.candidates?.[0]?.content?.parts ?? [];
      const imgPart = parts.find((p) => p.inlineData?.data);

      if (!imgPart) {
        console.log('NO IMAGE in response');
        console.log('Parts:', JSON.stringify(parts.map(p => Object.keys(p))));
        failed++;
        await sleep(2000);
        continue;
      }

      const buf = Buffer.from(imgPart.inlineData.data, 'base64');
      fs.writeFileSync(outPath, buf);
      console.log(`OK (${(buf.length / 1024).toFixed(0)}KB)`);
      done++;
    } catch (err) {
      console.log(`EXCEPTION: ${err.message}`);
      failed++;
    }

    // small delay to avoid rate limiting
    await sleep(1500);
  }

  console.log(`\nDone. ${done} generated, ${failed} failed.`);
}

main().catch(console.error);
