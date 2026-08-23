import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

const PUBLIC_DIR = path.resolve(__dirname, "..", "public");

const PORTFOLIO_FILES = [
  "home-residentiel", "home-deneigement", "home-location",
  "home-pieux", "home-commercial", "home-transport",
  "real-residentiel", "real-deneigement", "real-location",
  "real-pieux", "real-commercial", "real-transport",
].map((n) => `/portfolio/${n}.jpg`);

describe("portfolio images", () => {
  it("all 12 portfolio images exist", () => {
    const missing = PORTFOLIO_FILES.filter(
      (rel) => !fs.existsSync(path.join(PUBLIC_DIR, rel))
    );
    expect(missing).toEqual([]);
  });

  // Regression guard for the defect that made public/ 166MB: the Gemini API
  // returns PNG, and writing those bytes to a .jpg gave ~1.8MB files served raw.
  it("are real JPEGs, not PNGs wearing a .jpg extension", () => {
    const wrongFormat = PORTFOLIO_FILES.filter((rel) => {
      const full = path.join(PUBLIC_DIR, rel);
      if (!fs.existsSync(full)) return false;
      const head = fs.readFileSync(full).subarray(0, 3).toString("hex");
      return head !== "ffd8ff";
    });
    expect(wrongFormat).toEqual([]);
  });

  it("are under 400KB each so pages stay light on mobile", () => {
    const tooBig = PORTFOLIO_FILES.filter((rel) => {
      const full = path.join(PUBLIC_DIR, rel);
      return fs.existsSync(full) && fs.statSync(full).size > 400 * 1024;
    });
    expect(tooBig).toEqual([]);
  });
});
