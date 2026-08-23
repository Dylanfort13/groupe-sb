import { NextResponse } from "next/server";
import { inboxFor } from "@/lib/inquiryRouting";

// The sender domain must be verified in Resend or the send is rejected.
// fortx.site is verified; groupe-sb.ca is not owned yet. When the client's
// domain is bought and verified, set RESEND_FROM_EMAIL and nothing else changes.
const DEFAULT_FROM = "Groupe SB <message@fortx.site>";

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, email, phone, division, message } = body;

  const toEmail = inboxFor(division);
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Previously returned ok:true here, which made a broken configuration look
    // like a delivered message to both the visitor and the client.
    console.error("RESEND_API_KEY not configured — cannot send inquiry");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL || DEFAULT_FROM,
      to: [toEmail],
      reply_to: email,
      subject: `Nouveau message — ${division} — ${firstName} ${lastName}`,
      text: [
        `Prénom: ${firstName}`,
        `Nom: ${lastName}`,
        `Courriel: ${email}`,
        `Téléphone: ${phone || "—"}`,
        `Division: ${division}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Resend error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
