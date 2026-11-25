import { PortalCard } from './components/PortalCard';
import { PORTALS } from './config/portals';

function App() {
  return (
    <div className="flex h-dvh w-full items-center justify-center overflow-hidden bg-white sm:p-5">
      {/* Mobile-first sanctuary card: exact 100dvh non-scrolling on mobile, compact rounded phone frame on desktop */}
      <main className="relative flex h-dvh w-full flex-col justify-between overflow-hidden bg-[#061830] sm:h-[calc(100dvh-44px)] sm:max-h-[730px] sm:max-w-[385px] sm:rounded-[24px] sm:shadow-[0_18px_50px_rgba(6,24,48,0.24)]">
        {/* Background sanctuary arch & golden light wave fitted to full frame */}
        <img
          src="/bg.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-fill"
        />

        {/* Subtle radial dark scrim behind text for crisp readability */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(4,19,42,0.5)_0%,rgba(4,19,42,0.18)_62%,rgba(4,19,42,0.38)_100%)]"
          aria-hidden="true"
        />

        {/* Main vertical content positioned inside the sanctuary arch */}
        <div className="relative z-10 flex flex-1 flex-col justify-start px-5 pt-[11dvh] pb-8 sm:pt-12 sm:pb-10">
          {/* Brand Title Block (No Navbar, No Box Logo) */}
          <header className="flex flex-col items-center text-center">
            <h1 className="font-malayalam text-[26px] font-bold leading-tight tracking-wide text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.6)]">
              നേർച്ചപ്പെട്ടി
            </h1>

            <div className="mt-1 flex w-full max-w-[215px] items-center justify-center gap-2.5">
              <span className="gold-line-left h-[1px] flex-1" aria-hidden="true" />
              <span className="text-[9.5px] font-semibold tracking-[0.26em] text-[#F1D288]">
                NERCHAPETTI
              </span>
              <span className="gold-line-right h-[1px] flex-1" aria-hidden="true" />
            </div>

            <p className="mt-1 text-[10.5px] font-medium tracking-wide text-white/85">
              Digital eHundi for Places of Worship
            </p>
          </header>

          {/* Hero Malayalam & English Headline */}
          <section className="mt-7 flex flex-col items-center text-center sm:mt-5" aria-label="Introduction">
            <p className="font-malayalam text-[13px] font-bold leading-[1.45] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">
              വിശ്വാസത്തിന്റെ സമർപ്പണങ്ങൾക്ക്
              <span className="mt-0.5 block text-gold-gradient">
                പുതിയൊരു ഡിജിറ്റൽ വഴി.
              </span>
            </p>

            <p className="mt-2.5 max-w-[275px] text-[10.5px] leading-[1.5] text-white/80">
              A simple, trusted way to make sacred offerings and donations straight from your phone.
            </p>
          </section>

          {/* Two Side-by-Side Portal Cards centered inside the arch */}
          <section
            className="mx-auto mt-7 grid w-full max-w-[310px] grid-cols-2 gap-2.5 sm:mt-5"
            aria-label="Select Worship Portal"
          >
            {PORTALS.map((portal) => (
              <PortalCard key={portal.id} portal={portal} />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
