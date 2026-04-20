import Link from "next/link";

export function CTASection({
  title,
  subtitle,
  href = "/contact",
  label = "Contactez-nous",
  light = false,
}: {
  title: string;
  subtitle: string;
  href?: string;
  label?: string;
  light?: boolean;
}) {
  return (
    <section className={`relative py-20 px-[5%] overflow-hidden border-t border-b ${light ? "bg-light-bg border-charcoal/20" : "bg-gradient-to-r from-black-2 via-charcoal to-black-2 border-orange/25"}`}>
      {!light && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange/5 rounded-full blur-3xl" />
        </>
      )}
      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between gap-8 flex-wrap">
        <div>
          <div className={`inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] uppercase mb-3 ${light ? "text-orange" : "text-orange"}`}>
            <span className="block w-6 h-0.5 bg-orange" />
            Contactez-nous
          </div>
          <h2 className={`font-display text-[clamp(2rem,3.5vw,3.2rem)] leading-[0.94] tracking-[0.02em] mb-2 ${light ? "text-light-text" : "text-white"}`}>
            {title}
          </h2>
          <p className={`text-sm leading-relaxed max-w-[440px] ${light ? "text-light-muted" : "text-silver"}`}>
            {subtitle}
          </p>
        </div>
        <Link
          href={href}
          className={`inline-flex items-center gap-2 text-sm font-bold tracking-[0.12em] uppercase px-8 py-4 rounded-sm border-2 transition-all duration-200 touch-manipulation flex-shrink-0 ${
            light
              ? "bg-orange text-white border-orange hover:bg-orange-dark hover:border-orange-dark"
              : "bg-orange text-white border-orange hover:bg-orange-dark hover:border-orange-dark"
          }`}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          {label}
        </Link>
      </div>
    </section>
  );
}
