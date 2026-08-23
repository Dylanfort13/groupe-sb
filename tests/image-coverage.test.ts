import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import { getAllSlugs, getCategoryData } from "@/data/serviceDetails";

export const DIVISIONS = [
  "construction",
  "deneigement",
  "location",
  "pieux-vistech",
  "transport",
  "cafe",
];

const PUBLIC_DIR = path.resolve(__dirname, "..", "public");

// ServiceCategoryPage.tsx renders /services/{division}/{category}/{index}.jpg
// for every item, unconditionally. Every one of those files must exist.
function expectedCategoryImages(): string[] {
  const out: string[] = [];
  for (const division of DIVISIONS) {
    for (const category of getAllSlugs(division)) {
      const data = getCategoryData(division, category);
      if (!data) throw new Error(`no data for ${division}/${category}`);
      data.items.forEach((_item, i) => {
        out.push(`/services/${division}/${category}/${i}.jpg`);
      });
    }
  }
  return out;
}

describe("category page images", () => {
  it("every image referenced by ServiceCategoryPage exists on disk", () => {
    const missing = expectedCategoryImages().filter(
      (rel) => !fs.existsSync(path.join(PUBLIC_DIR, rel))
    );
    expect(missing).toEqual([]);
  });
});
