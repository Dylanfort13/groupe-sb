import type { Metadata } from "next";
import { HomeSections } from "@/components/HomeSections";
import { getSiteContent } from "@/lib/cms";

// Always fresh: this is what the client sees in the portal's preview pane
// while editing, so it must reflect unsaved draft content immediately.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Aperçu — Groupe SB",
  robots: { index: false, follow: false },
};

export default async function PreviewPage() {
  const content = await getSiteContent(true);
  return <HomeSections content={content} />;
}
