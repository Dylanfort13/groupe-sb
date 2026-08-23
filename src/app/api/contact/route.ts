import { NextResponse } from "next/server";

const divisionEmails: Record<string, string> = {
  construction: "constructions-sb@hotmail.com",
  deneigement: "deneigementsb@hotmail.com",
  location: "locationexpert@hotmail.com",
  pieux: "chibougamau@pieuxvistech.com",
  transport: "transport_sb@hotmail.com",
  cafe: "constructions-sb@hotmail.com",
  general: "constructions-sb@hotmail.com",
};

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, email, phone, division, message } = body;

  const toEmail = divisionEmails[division] ?? divisionEmails.general;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("RESEND_API_KEY not configured — skipping email send");
    return NextResponse.json({ ok: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Groupe SB <noreply@groupe-sb.ca>",
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
