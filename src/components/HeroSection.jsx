const navigationItems = ['Overview', 'Features', 'Contact']

const APPLE_ICON_URL =
  'https://www.figma.com/api/mcp/asset/e70d9e7a-b22c-4dcd-abd2-07f60abe2ac3'
const PLAY_STORE_ICON_URL =
  'https://www.figma.com/api/mcp/asset/0aa844a7-8fec-4bb9-9362-3b68469a7bd0'
const PHONE_MOCKUP_URL =
  'https://www.figma.com/api/mcp/asset/a04fdae1-8611-4db7-b657-42010059e9a1'

function DownloadButton({
  label,
  iconUrl,
  iconAlt,
  iconClassName = 'h-5 w-5',
}) {
  return (
    <button
      type="button"
      className="download-button inline-flex items-center justify-center gap-1 rounded-[10px] bg-[var(--button-fill)] p-[10px] text-[16px] font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
    >
      <span>{label}</span>
      <img src={iconUrl} alt={iconAlt} className={iconClassName} />
    </button>
  )
}

export default function HeroSection() {
  return (
    <section className="hero-section min-h-screen bg-[var(--page-background)] px-4 py-[26px] text-black sm:px-6 lg:px-[10px]">
      <div className="landing-shell mx-auto flex w-full max-w-[1128px] flex-col items-center gap-20 lg:gap-[120px]">
        <header className="navigation-frame flex w-full flex-col items-center gap-6 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-4">
          <nav
            aria-label="Primary"
            className="navigation-links flex flex-wrap items-center justify-center gap-[12px] md:justify-self-start"
          >
            {navigationItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="navigation-link rounded-full p-[10px] text-[16px] font-medium tracking-[-0.01em] transition-colors duration-200 hover:bg-black/5"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#overview"
            className="brand-mark font-['Hepta_Slab',serif] text-[20px] font-medium leading-none tracking-[-0.03em] md:justify-self-center"
            aria-label="Memora home"
          >
            M.
          </a>

          <a
            href="#download"
            className="download-app-link rounded-[20px] bg-[var(--accent-fill)] px-[10px] py-[8px] text-[16px] font-medium tracking-[-0.01em] transition-colors duration-200 hover:bg-[var(--accent-fill-hover)] md:justify-self-end"
          >
            Download app
          </a>
        </header>

        <section
          id="overview"
          className="hero-frame flex w-full items-center justify-center py-[10px]"
        >
          <div className="hero-stack flex w-full max-w-[807px] flex-col items-center gap-10 text-center sm:gap-[47px]">
            <div className="headline-frame flex w-full flex-col items-center gap-6">
              <h1 className="hero-heading max-w-[807px] font-['Hepta_Slab',serif] text-[44px] font-medium leading-[0.98] tracking-[-0.05em] sm:text-[56px] lg:text-[64px]">
                All your health records in one place
              </h1>
              <p className="hero-description max-w-[807px] text-[20px] font-medium leading-[1.2] tracking-[-0.02em] sm:text-[24px]">
                Memora brings you lab results, doctor notes, and health insights
                together, so you can see the full picture of your well-being without
                the chaos.
              </p>
            </div>

            <div
              id="download"
              className="action-frame flex flex-wrap items-center justify-center gap-[12px]"
            >
              <DownloadButton
                label="Get from apple"
                iconUrl={APPLE_ICON_URL}
                iconAlt="Apple logo"
              />
              <span className="download-separator text-[16px] font-normal">or</span>
              <DownloadButton
                label="Play store"
                iconUrl={PLAY_STORE_ICON_URL}
                iconAlt="Google Play logo"
                iconClassName="h-4 w-4"
              />
            </div>

            <div className="device-frame flex w-full justify-center">
              <img
                src={PHONE_MOCKUP_URL}
                alt="Hand holding the Memora app on a phone"
                className="device-mockup h-auto w-full max-w-[541px]"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
