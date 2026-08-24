import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Divisions } from "@/components/Divisions";
import { Gallery } from "@/components/Gallery";
import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import Link from "next/link";
import { imgSrc, type SiteContent } from "@/lib/cms";

/**
 * The entire home page, driven by CMS content.
 *
 * Both `/` (published) and `/preview` (draft) render this, so the client's
 * preview can never drift from the real page.
 */
export function HomeSections({ content }: { content: SiteContent }) {
  return (
    <>
      <Hero content={content.hero} />
      <RevealOnScroll>
        <Divisions content={content.divisions} />
      </RevealOnScroll>

      <section id="about" className="bg-light-bg py-32 px-[5%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <div>
              <div className="inline-flex items-center gap-2.5 text-orange text-xs font-bold tracking-[0.22em] uppercase mb-4">
                {content.about.eyebrow}
              </div>
              <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.93] tracking-[0.02em] title-gradient-light mb-6">
                {content.about.titleLine1}
                <br />
                <span className="text-orange">{content.about.titleLine2}</span>
              </h2>
              <p className="text-light-muted leading-relaxed mb-6 max-w-[460px]">
                {content.about.body}
              </p>
              <blockquote className="text-lg italic text-light-muted/70 border-l-3 border-orange pl-5 my-8 leading-relaxed">
                &laquo; {content.about.quote} &raquo;
              </blockquote>
              <div className="flex flex-wrap gap-2">
                {content.about.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold tracking-[0.1em] uppercase text-orange border border-orange/30 bg-orange/5 px-3 py-1.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll type="right">
            <div className="relative rounded-sm overflow-hidden">
              <Image
                src={imgSrc(content.about.image, "/about.png")}
                alt="Groupe SB"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-light-bg to-transparent" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <RevealOnScroll>
        <Stats content={content.stats} />
      </RevealOnScroll>
      <RevealOnScroll>
        <Gallery content={content.portfolio} />
      </RevealOnScroll>

      <RevealOnScroll>
        <section id="cta" className="bg-light-bg py-24 px-[5%] relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] rounded-full bg-orange/[0.04] blur-3xl" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="w-12 h-[3px] bg-orange mx-auto mb-8" />
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.93] tracking-[0.02em] text-light-text mb-5">
              {content.cta.title}
            </h2>
            <p className="text-light-muted text-base leading-relaxed max-w-[480px] mx-auto mb-10">
              {content.cta.body}
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-orange text-white text-sm font-bold tracking-[0.12em] uppercase px-10 py-4 rounded-sm border-2 border-orange hover:bg-orange-dark hover:border-orange-dark transition-all duration-200 touch-manipulation"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                {content.cta.ctaText}
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-center gap-6 text-xs font-semibold tracking-[0.1em] uppercase text-light-muted/50 flex-wrap">
              {content.cta.zones.map((zone, i) => (
                <span key={zone} className="inline-flex items-center gap-6">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-orange" />}
                  {zone}
                </span>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </>
  );
}
