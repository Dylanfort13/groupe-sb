// Keys are the <option value> values in src/app/contact/ContactForm.tsx.
// They are NOT page slugs: the form posts "pieux", the page is "pieux-vistech",
// and "general" has no page at all. Keying this map by page slug would
// silently misroute every Pieux Vistech inquiry to the fallback inbox.
export const INQUIRY_KEYS = [
  "construction",
  "deneigement",
  "location",
  "pieux",
  "transport",
  "cafe",
  "general",
] as const;

export type InquiryKey = (typeof INQUIRY_KEYS)[number];

const MAIN_INBOX = "constructions-sb@hotmail.com";

const INBOXES: Record<InquiryKey, string> = {
  construction: MAIN_INBOX,
  deneigement: "deneigementsb@hotmail.com",
  location: "locationexpert@hotmail.com",
  pieux: "chibougamau@pieuxvistech.com",
  transport: "transport_sb@hotmail.com",
  cafe: MAIN_INBOX,
  general: MAIN_INBOX,
};

export function inboxFor(key: string): string {
  return INBOXES[key as InquiryKey] ?? MAIN_INBOX;
}
