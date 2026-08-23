import { notFound } from "next/navigation";
import { getCategoryData, getAllSlugs } from "@/data/serviceDetails";
import ServiceCategoryPage from "@/components/ServiceCategoryPage";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return getAllSlugs("deneigement").map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const data = getCategoryData("deneigement", category);
  if (!data) return {};
  return { title: `${data.categoryTitle} — Déneigement SB` };
}

export default async function Page({ params }: Props) {
  const { category } = await params;
  const data = getCategoryData("deneigement", category);
  if (!data) notFound();
  return <ServiceCategoryPage data={data} />;
}
