"use client";

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-fade-in">
        <Image
          src="/construction-sb.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover grayscale scale-[1.04] transition-transform duration-[8000ms] ease-out hover:scale-100"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black-1/88 hero-fade-in" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#090909_100%)] hero-fade-in" />

      <div className="relative z-10 w-full flex items-center px-[5%] pt-36 pb-32">
        <div className="max-w-[960px]">
          <h1 className="font-display text-[clamp(3.6rem,8.8vw,8rem)] leading-[0.88] tracking-[0.02em] title-gradient mb-7 hero-slide-up" style={{ animationDelay: "0.2s" }}>
            CHAQUE PROJET
            <br />
            <span className="text-orange">COMPTE</span>
          </h1>

          <p className="text-[clamp(1rem,1.4vw,1.1rem)] leading-relaxed text-silver/88 max-w-[500px] mb-10 hero-slide-up" style={{ animationDelay: "0.5s" }}>
            Service rapide et efficace, à l&apos;écoute de vos besoins.
            Résidentiel, commercial et industriel, partout au Nord-du-Québec.
          </p>

          <div className="flex gap-4 flex-wrap hero-slide-up" style={{ animationDelay: "0.8s" }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange text-white text-sm font-bold tracking-[0.12em] uppercase px-8 py-4 rounded-sm border-2 border-orange hover:bg-orange-dark hover:border-orange-dark hover:-translate-y-0.5 transition-all duration-200 touch-manipulation"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              Soumission gratuite
            </Link>
            <Link
              href="#divisions"
              className="inline-flex items-center gap-2 bg-transparent text-white text-sm font-bold tracking-[0.12em] uppercase px-8 py-4 rounded-sm border-2 border-silver/35 hover:border-silver transition-all duration-200 touch-manipulation"
            >
              Nos divisions
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex flex-1 justify-center items-center hero-slide-up" style={{ animationDelay: "0.4s" }}>
          <Image
            src="/logo.png"
            alt="Groupe SB"
            width={380}
            height={290}
            className="w-[380px] h-auto drop-shadow-[0_0_60px_rgba(239,96,6,0.15)]"
          />
        </div>
      </div>
    </section>
  );
}
