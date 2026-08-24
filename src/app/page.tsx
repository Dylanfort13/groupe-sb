import { HomeSections } from "@/components/HomeSections";
import { getSiteContent } from "@/lib/cms";

export default async function HomePage() {
  const content = await getSiteContent();
  return <HomeSections content={content} />;
}
