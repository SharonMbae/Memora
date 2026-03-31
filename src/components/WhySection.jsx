const whyContent = {
  heading: 'Why we built Memora?',
  intro:
    'You’ve kept the reports. The prescriptions. The notes from every visit.',
  bridge:
    'Yet somehow, the pieces never seem to fit together. One portal has your lab results,another holds your scans and the rest are scattered in emails and PDFs.',
  closingLines: [
    'We built Memora to change that.',
    'To give your health a single home.',
    'To help you see the full picture not just data, but meaning.',
    'So every step in your health journey finally makes sense.',
  ],
}

export default function WhySection() {
  return (
    <section className="why-section bg-white px-4 py-[10px] sm:px-6 lg:px-[10px]">
      <div className="why-shell mx-auto flex w-full max-w-[1128px] flex-col items-center px-[10px] py-[10px]">
        <div className="why-frame flex w-full max-w-[808px] flex-col items-center gap-[36px]">
          <h2 className="why-heading w-full text-center font-['Hepta_Slab',serif] text-[32px] font-semibold leading-none text-[#303030]">
            {whyContent.heading}
          </h2>

          <div className="why-copy-stack flex w-full flex-col items-center gap-[16px] font-['Inter',sans-serif] text-[20px] font-normal">
            <p className="why-intro max-w-[511px] text-center text-[18px] font-semibold leading-normal text-[#303030]">
              {whyContent.intro}
            </p>

            <p className="why-bridge w-full text-center text-[16px] font-normal leading-normal tracking-[0.6px] text-[#b3b3b3]">
              <span className="font-medium text-[#303030]">Yet somehow, </span>
              <span>
                the pieces never seem to fit together. One portal has your lab
                results,another holds your scans and the rest are scattered in emails
                and PDFs.
              </span>
            </p>

            <div className="why-closing max-w-[526px] text-center text-[16px] leading-normal tracking-[0.6px] text-[#b3b3b3]">
              {whyContent.closingLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
