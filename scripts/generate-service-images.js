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

// For service/repair shots where hands are the honest subject. Same rules as
// SUFFIX minus "no people", because a hands-on maintenance photo needs hands.
const HANDS_SUFFIX = ', photorealistic, natural color, no HDR, no oversaturation, no text, no watermarks, no logos';

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

  // ── Location Expert > outils-chantier ────────────────────────────────────
  { division: 'location', category: 'outils-chantier', i: 0,
    prompt: 'Concrete tools lined up in an equipment rental warehouse: portable cement mixer, concrete vibrator, angle grinder, clean organized shelving' + SUFFIX },
  { division: 'location', category: 'outils-chantier', i: 1,
    prompt: 'Roofing and framing tools on a workbench: pneumatic nail guns, compound mitre saw, coils of nails, rental shop interior' + SUFFIX },
  { division: 'location', category: 'outils-chantier', i: 2,
    prompt: 'Modular steel scaffolding sections and aluminum extension ladders stacked in an outdoor equipment rental yard, Quebec' + SUFFIX },
  { division: 'location', category: 'outils-chantier', i: 3,
    prompt: 'Assorted power tools on rental shop shelving: rotary hammers, angle grinders, circular saws, portable air compressor, organized rows' + SUFFIX },

  // ── Location Expert > machinerie-transport ───────────────────────────────
  { division: 'location', category: 'machinerie-transport', i: 0,
    prompt: 'Compact excavator and wheel loader parked side by side in an equipment rental yard, gravel ground, overcast Quebec sky' + SUFFIX },
  { division: 'location', category: 'machinerie-transport', i: 1,
    prompt: 'Telescopic handler lifting a pallet of building materials at a construction site, forks raised, Quebec' + SUFFIX },
  { division: 'location', category: 'machinerie-transport', i: 2,
    prompt: 'Scissor lift and articulated boom lift platforms parked in an equipment rental yard, elevated work platforms, overcast sky' + SUFFIX },
  { division: 'location', category: 'machinerie-transport', i: 3,
    prompt: 'Row of utility trailers of different sizes lined up in a rental yard, flatbed and enclosed trailers, Quebec' + SUFFIX },

  // ── Location Expert > equipement-specialise ──────────────────────────────
  { division: 'location', category: 'equipement-specialise', i: 0,
    prompt: 'Portable industrial generator beside a towable light tower with mast raised, construction site at dusk, Quebec' + SUFFIX },
  { division: 'location', category: 'equipement-specialise', i: 1,
    prompt: 'Submersible water pump with discharge hoses draining a flooded excavation trench, muddy water, construction site' + SUFFIX },
  { division: 'location', category: 'equipement-specialise', i: 2,
    prompt: 'Propane construction heater and large ventilation fan inside an unfinished building under winter construction, Quebec' + SUFFIX },
  { division: 'location', category: 'equipement-specialise', i: 3,
    prompt: 'Rental shop shelf of specialized equipment: air compressors, gas detectors, safety harnesses and hard hats, organized display' + SUFFIX },

  // ── Location Expert > amenagement ────────────────────────────────────────
  { division: 'location', category: 'amenagement', i: 0,
    prompt: 'Commercial lawn mower and string trimmers on a freshly cut green lawn, landscaping equipment, Quebec summer' + SUFFIX },
  { division: 'location', category: 'amenagement', i: 1,
    prompt: 'Vibrating plate compactor on a gravel base being prepared for paving, compacted surface texture, construction site' + SUFFIX },
  { division: 'location', category: 'amenagement', i: 2,
    prompt: 'Row of two-stage snow blowers lined up in an equipment rental yard before winter season, Quebec' + SUFFIX },
  { division: 'location', category: 'amenagement', i: 3,
    prompt: 'Wide interior aisle of a tool and equipment rental warehouse, well-lit organized racks of machinery, Quebec' + SUFFIX },

  // ── Location Expert > location-chapiteau ─────────────────────────────────
  { division: 'location', category: 'location-chapiteau', i: 0,
    prompt: 'Small white event marquee tent set up on green grass, compact 10 by 15 foot canopy, summer day, Quebec' + SUFFIX },
  { division: 'location', category: 'location-chapiteau', i: 1,
    prompt: 'White event tent with round tables and chairs set up underneath for a family reception, open sides, summer afternoon' + SUFFIX },
  { division: 'location', category: 'location-chapiteau', i: 2,
    prompt: 'Large white reception marquee tent on a grass field, long span peaked roof, community event setup, Quebec summer' + SUFFIX },
  { division: 'location', category: 'location-chapiteau', i: 3,
    prompt: 'Very large white event marquee covering a wide open field, festival scale tent with multiple peaks, overcast sky' + SUFFIX },
  { division: 'location', category: 'location-chapiteau', i: 4,
    prompt: 'Steel tent frame partially erected on grass with white canopy fabric being pulled over, installation in progress, no faces visible' + SUFFIX },

  // ── Cafe Marc Robitaille > cafe-distribution ─────────────────────────────
  { division: 'cafe', category: 'cafe-distribution', i: 0,
    prompt: 'Dark roast espresso beans spilling from a scoop beside a freshly pulled espresso in a white cup, rich crema, warm light' + SUFFIX },
  { division: 'cafe', category: 'cafe-distribution', i: 1,
    prompt: 'Medium roast coffee beans in a burlap sack beside a light ceramic mug of black coffee on a wooden counter' + SUFFIX },
  { division: 'cafe', category: 'cafe-distribution', i: 2,
    prompt: 'Coffee beans arranged beside an unlabeled kraft paper coffee bag on a dark wooden surface, soft natural light' + SUFFIX },
  { division: 'cafe', category: 'cafe-distribution', i: 3,
    prompt: 'Stacked unlabeled commercial coffee bags on a delivery pallet in a distribution warehouse, ready for shipping' + SUFFIX },

  // ── Cafe Marc Robitaille > slush-puppie ──────────────────────────────────
  { division: 'cafe', category: 'slush-puppie', i: 0,
    prompt: 'Row of brightly coloured frozen drink syrup concentrate bottles on a stainless steel shelf, blue red and green, no labels' + SUFFIX },
  { division: 'cafe', category: 'slush-puppie', i: 1,
    prompt: 'Commercial frozen slush drink machine with two transparent barrels of blue and red slush churning, convenience store counter' + SUFFIX },
  { division: 'cafe', category: 'slush-puppie', i: 2,
    prompt: 'Technician hands with the front panel of a slush machine removed, servicing internal parts with tools, hands only, no faces' + HANDS_SUFFIX },
  { division: 'cafe', category: 'slush-puppie', i: 3,
    prompt: 'Frozen slush drink machine set up at an outdoor summer event booth under a canopy, cups stacked beside it, no faces visible' + HANDS_SUFFIX },

  // ── Cafe Marc Robitaille > service-entretien ─────────────────────────────
  { division: 'cafe', category: 'service-entretien', i: 0,
    prompt: 'Commercial espresso machine being installed on a stainless steel counter, water lines connected, hands only, no faces' + HANDS_SUFFIX },
  { division: 'cafe', category: 'service-entretien', i: 1,
    prompt: 'Disassembled coffee machine parts, group head and portafilter, laid out on a cloth for cleaning, maintenance detail' + SUFFIX },
  { division: 'cafe', category: 'service-entretien', i: 2,
    prompt: 'Open service panel of a commercial beverage machine with hand tools and replacement parts laid out beside it, repair in progress' + SUFFIX },
  { division: 'cafe', category: 'service-entretien', i: 3,
    prompt: 'Stack of empty clear plastic cups beside a frozen drink machine at a school fundraising stand, bright cheerful setup, no faces' + HANDS_SUFFIX },
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
    // writeFileSync does not create parent directories — this is why the
    // location/ and cafe/ folders never got generated.
    fs.mkdirSync(path.dirname(outPath), { recursive: true });

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
