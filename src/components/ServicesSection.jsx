const CONNECT_ICON_URL =
  'https://www.figma.com/api/mcp/asset/47b87062-7f47-429e-9b85-10a155824d90'
const CONNECT_DASHBOARD_URL =
  'https://www.figma.com/api/mcp/asset/9e2e5db3-7c84-4146-8d29-91e0abbb3363'
const EXPLAIN_CARDS_URL =
  'https://www.figma.com/api/mcp/asset/754cf8fb-0e43-496b-888c-9739f1edcd41'
const VISUALIZE_PHONE_URL =
  'https://www.figma.com/api/mcp/asset/cfd9178e-e9ed-406d-96ca-847a6f75a39c'
const CAPTURE_PHONE_URL =
  'https://www.figma.com/api/mcp/asset/d58e106f-f583-4776-ba1d-9bc711431649'

const serviceFrames = [
  {
    eyebrow: 'Connect',
    title: 'All your health details in one connected space.',
    description:
      'Memora brings together your reports, doctor visits, and wearable insights into one secure, organized view - so nothing slips through the cracks',
    mediaUrl: CONNECT_DASHBOARD_URL,
    mediaAlt: 'Memora dashboard cards showing connected health insights',
    textWidth: 'max-w-[541px]',
    titleWidth: 'max-w-[289px]',
    rowClassName: 'lg:grid-cols-[1fr_557px]',
    mediaClassName: 'h-[406px] w-full max-w-[557px] rounded-[10px]',
    mediaPanelClassName:
      'feature-media-card h-[406px] w-full max-w-[557px] rounded-[10px] bg-transparent',
    imageClassName: 'h-full w-full rounded-[10px] object-cover',
    icon: 'connect',
  },
  {
    eyebrow: 'Explain',
    title: 'Meaning insights that help you move forward.',
    description:
      'By analyzing your reports over time, it highlights what’s improving, what needs attention, and how small changes can make a real difference.',
    mediaUrl: EXPLAIN_CARDS_URL,
    mediaAlt: 'Memora insight cards summarizing health updates',
    textWidth: 'max-w-[541px]',
    titleWidth: 'max-w-[289px]',
    rowClassName: 'lg:grid-cols-[566px_1fr]',
    mediaOrder: 'lg:order-1',
    textOrder: 'lg:order-2',
    mediaClassName: 'h-[285px] w-full max-w-[566px] rounded-[10px]',
    mediaPanelClassName:
      'feature-media-card h-[285px] w-full max-w-[566px] rounded-[10px] bg-transparent',
    imageClassName: 'h-full w-full rounded-[10px] object-cover',
    icon: 'explain',
  },
  {
    eyebrow: 'Visualize',
    title: 'Complex medical data to so clear insight',
    description:
      "Your numbers tell a story, Memora helps you understand it. By analyzing your reports over time, it highlights what's improving, what needs attention, and how small changes can make a real difference.",
    mediaUrl: VISUALIZE_PHONE_URL,
    mediaAlt: 'Memora blood pressure screen shown in a phone mockup',
    textWidth: 'max-w-[472px]',
    titleWidth: 'max-w-[378px]',
    rowClassName: 'lg:grid-cols-[1fr_557px]',
    mediaClassName:
      'feature-media-card feature-phone-panel flex h-[532px] w-full max-w-[557px] items-start justify-center overflow-hidden bg-[var(--services-accent)]',
    imageClassName: 'feature-phone-visual h-auto w-[292px] max-w-full',
    icon: 'visualize',
  },
  {
    eyebrow: 'Capture & Store',
    title: 'Smart search filters for every kind of record',
    description:
      "Your numbers tell a story, Memora helps you understand it. By analyzing your reports over time, it highlights what's improving, what needs attention, and how small changes can make a real difference.",
    mediaUrl: CAPTURE_PHONE_URL,
    mediaAlt: 'Memora filter search results shown in a phone mockup',
    textWidth: 'max-w-[472px]',
    titleWidth: 'max-w-[424px]',
    rowClassName: 'lg:grid-cols-[557px_1fr]',
    mediaOrder: 'lg:order-1',
    textOrder: 'lg:order-2',
    mediaClassName:
      'feature-media-card feature-phone-panel flex h-[532px] w-full max-w-[557px] items-start justify-center overflow-hidden bg-[var(--services-accent)]',
    imageClassName: 'feature-phone-visual h-auto w-[297px] max-w-full',
    icon: 'capture',
  },
]

function EyebrowIcon({ type }) {
  if (type === 'connect') {
    return <img src={CONNECT_ICON_URL} alt="" aria-hidden="true" className="h-4 w-4" />
  }

  if (type === 'explain') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M4.167 5.833A2.5 2.5 0 0 1 6.667 3.333h6.666a2.5 2.5 0 0 1 2.5 2.5v4.584a2.5 2.5 0 0 1-2.5 2.5H9.61l-3.36 2.37a.417.417 0 0 1-.657-.34v-2.03a2.5 2.5 0 0 1-1.426-2.25V5.833Z" />
        <path d="M7.5 7.917h5M7.5 10.417h3.333" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'visualize') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M3.75 14.583h12.5M5.417 12.917l2.5-3.334 2.5 1.667 4.166-5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M13.333 6.25H15v1.667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (type === 'capture') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="4.167" y="5" width="11.666" height="10" rx="2" />
        <path
          d="M7.083 5V3.75h5.834V5M7.5 8.75h5M7.5 11.25h3.333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M3.75 10a6.25 6.25 0 0 1 12.5 0M6.25 10a3.75 3.75 0 0 1 7.5 0M9.167 10a.833.833 0 0 1 1.666 0"
        strokeLinecap="round"
      />
    </svg>
  )
}

function FeatureEyebrow({ label, icon }) {
  return (
    <div className="feature-eyebrow flex items-center gap-[4px] text-[16px] text-[var(--services-muted)]">
      <EyebrowIcon type={icon} />
      <span>{label}</span>
    </div>
  )
}

function ServiceFrame({
  eyebrow,
  title,
  description,
  mediaUrl,
  mediaAlt,
  textWidth,
  titleWidth,
  rowClassName,
  mediaOrder,
  textOrder,
  mediaClassName,
  mediaPanelClassName,
  imageClassName,
  icon,
}) {
  return (
    <article
      className={`service-frame grid items-center gap-[30px] py-[10px] ${rowClassName}`}
    >
      <div className={`service-copy-frame flex flex-col gap-[22px] ${textOrder ?? ''}`}>
        <FeatureEyebrow label={eyebrow} icon={icon} />
        <div className="service-text-stack flex flex-col gap-[16px] text-[var(--services-copy)]">
          <h2
            className={`service-title font-['Hepta_Slab',serif] text-[24px] font-semibold leading-[1.05] ${titleWidth}`}
          >
            {title}
          </h2>
          <p className={`service-description text-[16px] leading-[1.2] ${textWidth}`}>
            {description}
          </p>
        </div>
      </div>

      <div className={`${mediaOrder ?? ''}`}>
        <div className={mediaPanelClassName ?? mediaClassName}>
          <img src={mediaUrl} alt={mediaAlt} className={imageClassName} />
        </div>
      </div>
    </article>
  )
}

export default function ServicesSection() {
  return (
    <section className="services-section bg-[var(--services-background)] px-4 py-[10px] sm:px-6 lg:px-[10px]">
      <div className="services-shell mx-auto flex w-full max-w-[1128px] flex-col gap-16 lg:gap-[100px]">
        {serviceFrames.map((frame) => (
          <ServiceFrame key={frame.eyebrow} {...frame} />
        ))}
      </div>
    </section>
  )
}
