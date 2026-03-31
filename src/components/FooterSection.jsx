const FOOTER_PHONE_URL =
  'https://www.figma.com/api/mcp/asset/ea104f87-f3e0-4852-96be-6e9ffceed7c6'
const FOOTER_APPLE_ICON_URL =
  'https://www.figma.com/api/mcp/asset/a4b95bd3-565b-4f14-a0df-ec456b07e196'
const FOOTER_PLAY_ICON_URL =
  'https://www.figma.com/api/mcp/asset/bd7fceb4-bc6c-485a-b204-b8dbef8a457e'
const FOOTER_ARROW_ICON_URL =
  'https://www.figma.com/api/mcp/asset/510c24c9-070b-4534-b83f-1ca31bfb2c9c'
const FOOTER_COPYRIGHT_ICON_URL =
  'https://www.figma.com/api/mcp/asset/833a2a49-6450-47d0-862a-beb27b8d0a65'

const footerColumns = [
  {
    heading: 'Memora',
    items: [
      { label: 'Download app' },
      { label: 'Features' },
      { label: 'Updates', badge: 'New' },
      { label: 'Blogs' },
    ],
  },
  {
    heading: 'Products',
    items: [
      { label: 'For iPhone', external: true },
      { label: 'For Android', external: true },
      { label: 'For Chrome', external: true },
      { label: 'For Firefox', external: true },
      { label: 'For Brave', external: true },
      { label: 'For Edge', external: true },
    ],
  },
  {
    heading: 'Company',
    items: [
      { label: 'Privacy policy' },
      { label: 'Terms & Conditions' },
      { label: 'Licenses' },
    ],
  },
  {
    heading: 'Social',
    items: [
      { label: 'X' },
      { label: 'Linkedin' },
      { label: 'Facebook' },
      { label: 'Instagram' },
      { label: 'Threads' },
      { label: 'Youtube' },
      { label: 'Tiktok' },
    ],
  },
]

function FooterStoreButton({ label, iconUrl, iconClassName = 'h-5 w-5' }) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center gap-[4px] rounded-[10px] bg-[#343434] p-[10px] text-[16px] font-medium text-white"
    >
      <span>{label}</span>
      <img src={iconUrl} alt="" aria-hidden="true" className={iconClassName} />
    </button>
  )
}

function FooterLinkItem({ label, badge, external }) {
  return (
    <div className="flex items-center gap-[4px]">
      <span className="text-[16px] font-medium leading-normal text-[#303030]">
        {label}
      </span>
      {badge ? (
        <span className="rounded-[2px] border border-[#e8e8e8] bg-white px-[2px] py-[1px] text-[12px] font-normal leading-none text-[#303030]">
          {badge}
        </span>
      ) : null}
      {external ? (
        <span className="flex h-[20px] w-[20px] rotate-45 items-center justify-center">
          <img src={FOOTER_ARROW_ICON_URL} alt="" aria-hidden="true" className="h-5 w-5" />
        </span>
      ) : null}
    </div>
  )
}

function FooterColumn({ heading, items }) {
  return (
    <div className="flex flex-col items-start gap-[19px]">
      <h3 className="font-['Hepta_Slab',serif] text-[16px] font-normal leading-normal text-[#303030]">
        {heading}
      </h3>
      <div className="flex flex-col items-start gap-[12px]">
        {items.map((item) => (
          <FooterLinkItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  )
}

export default function FooterSection() {
  return (
    <footer className="footer-section bg-[#fef5ed] px-4 py-[10px] sm:px-6 lg:px-[10px]">
      <div className="mx-auto flex w-full max-w-[1128px] flex-col items-center gap-[100px] px-[16px] py-[31px]">
        <div className="flex w-full max-w-[672px] flex-col items-center gap-[32px]">
          <div className="flex w-full max-w-[461px] flex-col items-center gap-[24px]">
            <div className="flex w-full flex-col items-start gap-[24px] text-center">
              <h2 className="w-full font-['Hepta_Slab',serif] text-[32px] font-semibold leading-none tracking-[0.96px] text-[#847262]">
                The perfect way to keep to track of healthcare.
              </h2>
              <p className="mx-auto w-full max-w-[413px] text-[16px] font-normal leading-normal tracking-[0.48px] text-[#303030]">
                Save time, increase payment certainly, and improve patient outcomes.
                All with Memora.
              </p>
            </div>

            <div className="flex items-center gap-[12px]">
              <FooterStoreButton
                label="Get from apple"
                iconUrl={FOOTER_APPLE_ICON_URL}
              />
              <span className="text-[16px] font-normal text-[#303030]">or</span>
              <FooterStoreButton
                label="Play store"
                iconUrl={FOOTER_PLAY_ICON_URL}
                iconClassName="h-4 w-4"
              />
            </div>
          </div>

          <div className="footer-phone-stage relative h-[580px] w-full max-w-[672px] overflow-hidden bg-[#fef5ed]">
            <img
              src={FOOTER_PHONE_URL}
              alt="Memora app preview on a phone"
              className="footer-phone-image absolute left-1/2 top-[52px] h-auto w-[352px] -translate-x-1/2"
            />
            <div className="footer-phone-fade absolute inset-x-0 bottom-0 h-[230px]">
              <img
                src={FOOTER_PHONE_URL}
                alt=""
                aria-hidden="true"
                className="footer-phone-image absolute left-1/2 top-[-298px] h-auto w-[352px] -translate-x-1/2 blur-[5.429px]"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-12 px-[32px] lg:gap-[100px]">
          <div className="grid w-full gap-10 md:grid-cols-2 lg:grid-cols-[108px_repeat(3,minmax(0,1fr))] lg:gap-[138px]">
            {footerColumns.map((column) => (
              <FooterColumn key={column.heading} {...column} />
            ))}
          </div>

          <div className="footer-brand-block flex w-full flex-col items-start gap-[40px]">
            <div className="ml-auto flex items-center gap-[5px]">
              <img
                src={FOOTER_COPYRIGHT_ICON_URL}
                alt=""
                aria-hidden="true"
                className="h-3 w-3"
              />
              <p className="text-[16px] font-normal leading-normal text-[#303030]">
                2025 Memora. All rights reserved
              </p>
            </div>

            <div className="footer-wordmark-wrap flex w-[calc(100%+64px)] max-w-none flex-col items-start gap-[12px] -ml-[32px]">
              <div className="flex w-[47px] items-center justify-center p-[10px]">
                <span className="w-full font-['Hepta_Slab',serif] text-[20px] font-medium leading-normal text-[#303030]">
                  M.
                </span>
              </div>
              <p className="footer-wordmark w-auto max-w-none bg-gradient-to-b from-[#fed7aa] from-[30.22%] to-[#fdf4ea] to-[79.095%] bg-clip-text font-['Hepta_Slab',serif] text-[248px] font-medium leading-none text-transparent">
                Memora
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
