import { notFound } from "next/navigation";
import { getCategoryData, getAllSlugs } from "@/data/serviceDetails";
import ServiceCategoryPage from "@/components/ServiceCategoryPage";
import { getSiteContent } from "@/lib/cms";

type Props = {
  params: Promise<{ category: string }>;
  searchParams?: Promise<{ draft?: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs("location").map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const data = getCategoryData("location", category);
  if (!data) return {};
  return { title: `${data.categoryTitle} — Location Expert` };
}

export default async function Page({ params, searchParams }: Props) {
  const { category } = await params;
  const data = getCategoryData("location", category);
  if (!data) notFound();
  // ?draft=1 renders unpublished content for the portal's preview pane.
  const cms = await getSiteContent((await searchParams)?.draft === "1");
  return <ServiceCategoryPage data={data} content={cms.categoryPages[`location/${category}`]} />;
}
