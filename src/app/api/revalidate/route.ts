import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

// On-demand ISR revalidation, called by the FortX platform after the client
// clicks "Publier" in the portal. Secured by a shared secret + tenant id.
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const tenant = searchParams.get("tenant");

  const expectedSecret = process.env.REVALIDATE_SECRET;
  if (!expectedSecret || secret !== expectedSecret) {
    return NextResponse.json({ revalidated: false, error: "Invalid secret" }, { status: 401 });
  }
  if (!tenant || tenant !== process.env.NEXT_PUBLIC_TENANT_ID) {
    return NextResponse.json({ revalidated: false, error: "Tenant mismatch" }, { status: 400 });
  }

  // Every page that renders CMS content.
  for (const p of [
    "/",
    "/a-propos",
    "/contact",
    "/realisations",
    "/construction",
    "/deneigement",
    "/location",
    "/pieux-vistech",
    "/transport",
    "/cafe",
  ]) {
    revalidatePath(p);
  }

  return NextResponse.json({ revalidated: true, at: new Date().toISOString() });
}
