import { ArrowRightIcon } from './Icons';

export function PortalCard({ portal }) {
  return (
    <a
      href={portal.href}
      style={{ backgroundColor: portal.baseColor }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[14px] transition-transform duration-200 active:scale-[0.98] ${portal.glowClass}`}
    >
      {/* Top artwork preserving full cross/candles or crescent/lanterns width */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={portal.image}
          alt={portal.imageAlt}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-10"
          style={{
            background: `linear-gradient(180deg, transparent 0%, ${portal.baseColor} 95%)`,
          }}
        />
      </div>

      {/* Card title & gold CTA pill */}
      <div className="relative z-10 -mt-3 flex flex-1 flex-col items-center justify-between px-2 pb-2.5 text-center">
        <h2 className="text-[12.5px] font-bold tracking-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]">
          {portal.title}
        </h2>

        <span className="cta-gold-pill mt-2 inline-flex w-full items-center justify-center gap-1 whitespace-nowrap rounded-full px-2 py-1 text-[9.5px] font-bold text-[#141923] transition-all duration-200">
          <span>{portal.ctaLabel}</span>
          <ArrowRightIcon className="h-2.5 w-2.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </div>

      {/* Subtle bottom ambient light matching card accent */}
      <div
        className="pointer-events-none absolute -bottom-3 left-1/2 h-5 w-3/4 -translate-x-1/2 rounded-full opacity-70 blur-md"
        style={{ backgroundColor: portal.bottomGlowColor }}
        aria-hidden="true"
      />
    </a>
  );
}
