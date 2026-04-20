"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const subLinks = [
  { href: "/construction", label: "Construction SB", accent: "text-construction" },
  { href: "/deneigement", label: "Déneigement SB", accent: "text-deneigement" },
  { href: "/location", label: "Location Expert", accent: "text-location" },
  { href: "/pieux-vistech", label: "Pieux Vistech", accent: "text-pieux" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[72px] transition-all duration-300 ${
        scrolled
          ? "bg-black-1/95 backdrop-blur-xl"
          : "bg-black-1/80 backdrop-blur-md"
      }`}
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Groupe SB"
          width={58}
          height={44}
          className="h-11 w-auto"
        />
      </Link>

      <ul
        className={`${
          open
            ? "flex flex-col fixed top-[72px] left-0 right-0 bg-black-1 p-8 gap-6 z-50"
            : "hidden"
        } lg:flex lg:flex-row lg:gap-8 lg:static lg:bg-transparent lg:p-0`}
      >
        <li>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-xs font-semibold tracking-[0.12em] uppercase text-silver/75 hover:text-orange transition-colors duration-200"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href="/a-propos"
            onClick={() => setOpen(false)}
            className="text-xs font-semibold tracking-[0.12em] uppercase text-silver/75 hover:text-orange transition-colors duration-200"
          >
            À propos
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setSubOpen(true)}
          onMouseLeave={() => setSubOpen(false)}
        >
          <button
            onClick={() => setSubOpen(!subOpen)}
            className="text-xs font-semibold tracking-[0.12em] uppercase text-silver/75 hover:text-orange transition-colors duration-200 inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0 leading-none"
          >
            Nos entreprises
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={`transition-transform duration-200 ${subOpen ? "rotate-180" : ""}`} aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
          </button>
          <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${subOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
            <div className="bg-black-1/95 backdrop-blur-xl border border-charcoal/50 rounded-sm py-2 min-w-[220px]">
              {subLinks.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  onClick={() => { setOpen(false); setSubOpen(false); }}
                  className={`block px-5 py-2.5 text-xs font-semibold tracking-[0.1em] uppercase text-silver/70 hover:text-white hover:bg-charcoal/30 transition-colors duration-150 ${sub.accent}`}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </div>
        </li>
        <li>
          <Link
            href="/realisations"
            onClick={() => setOpen(false)}
            className="text-xs font-semibold tracking-[0.12em] uppercase text-silver/75 hover:text-orange transition-colors duration-200"
          >
            Réalisations
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-xs font-semibold tracking-[0.12em] uppercase"
          >
            <span className="bg-orange text-white px-4 py-2 rounded-sm hover:bg-orange-dark transition-colors">
              Contact
            </span>
          </Link>
        </li>
      </ul>

      <button
        className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            open ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>
    </nav>
  );
}
