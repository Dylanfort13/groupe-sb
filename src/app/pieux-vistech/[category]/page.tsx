import { notFound } from "next/navigation";
import { getCategoryData, getAllSlugs } from "@/data/serviceDetails";
import ServiceCategoryPage from "@/components/ServiceCategoryPage";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return getAllSlugs("pieux-vistech").map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const data = getCategoryData("pieux-vistech", category);
  if (!data) return {};
  return { title: `${data.categoryTitle} — Pieux Vistech` };
}

export default async function Page({ params }: Props) {
  const { category } = await params;
  const data = getCategoryData("pieux-vistech", category);
  if (!data) notFound();
  return <ServiceCategoryPage data={data} />;
}
