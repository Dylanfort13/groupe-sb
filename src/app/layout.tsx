import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteContent } from "@/lib/cms";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Groupe SB — Construction, Déneigement, Location & Pieux Vistech",
  description:
    "Groupe SB : À l'écoute des besoins de nos clients — service rapide et efficace. Construction, déneigement, location d'équipement et pieux vissés à Chibougamau.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // The header logo is a CMS field so the client can swap it themselves.
  const content = await getSiteContent();

  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar logo={content.brand.headerLogo} />
        <main className="flex-1">{children}</main>
        <Footer contacts={content.contacts.items} />
      </body>
    </html>
  );
}
