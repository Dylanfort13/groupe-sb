import { describe, it, expect } from "vitest";
import { inboxFor, INQUIRY_KEYS } from "@/lib/inquiryRouting";

describe("inboxFor", () => {
  it("routes each division to its own inbox", () => {
    expect(inboxFor("construction")).toBe("constructions-sb@hotmail.com");
    expect(inboxFor("deneigement")).toBe("deneigementsb@hotmail.com");
    expect(inboxFor("location")).toBe("locationexpert@hotmail.com");
    expect(inboxFor("pieux")).toBe("chibougamau@pieuxvistech.com");
    expect(inboxFor("transport")).toBe("transport_sb@hotmail.com");
  });

  // The form posts "pieux", but the page slug is "pieux-vistech".
  // Keying this map by page slug would silently misroute every Pieux inquiry.
  it("uses the form's key, not the page slug", () => {
    expect(INQUIRY_KEYS).toContain("pieux");
    expect(INQUIRY_KEYS).not.toContain("pieux-vistech");
  });

  it("routes general and cafe to the main inbox", () => {
    expect(inboxFor("general")).toBe("constructions-sb@hotmail.com");
    expect(inboxFor("cafe")).toBe("constructions-sb@hotmail.com");
  });

  it("falls back to the main inbox for an unknown key", () => {
    expect(inboxFor("")).toBe("constructions-sb@hotmail.com");
    expect(inboxFor("bogus")).toBe("constructions-sb@hotmail.com");
  });

  it("covers every option in the contact form", () => {
    expect([...INQUIRY_KEYS].sort()).toEqual(
      ["cafe", "construction", "deneigement", "general", "location", "pieux", "transport"].sort()
    );
  });
});
