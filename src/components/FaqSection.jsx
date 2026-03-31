const FAQ_ICON_URL =
  'https://www.figma.com/api/mcp/asset/a8594dd1-29e3-4841-86a2-f8568e3a3a7e'

const faqItems = [
  {
    question: 'What exactly is Memora?',
    answer: [
      'Memora is your personal health companion that brings all your medical records, and prescriptions into one simple, secure space.',
      'It helps you understand your health better through clear summaries and insights - no more digging through portals or trying to decode medical terms.',
    ],
  },
  {
    question: 'How does Memora work?',
    answer: [
      'Once you connect your existing healthcare accounts or upload your files. Memora automatically organizes everything by date, category, and relevance, it then translates reports into easy-to-understand insights, helping you stay informed and proactive about your well-being.',
    ],
  },
  {
    question: 'Can I use Memora with my hospital or clinic?',
    answer: [
      "Yes, Memora connects with a growing list of hospitals, labs, and health systems.",
      "If your provider isn't supported yet, you can still upload reports or scan documents manually - and Memora will keep everything organized just the same.",
    ],
  },
  {
    question: 'Do I need any special devices to use Memora?',
    answer: [
      'No special hardware required. Memora works seamlessly on both iOS and Android with your data securely stored in the cloud so you can access it anytime',
    ],
  },
  {
    question: 'How much does Memora cost?',
    answer: [
      'Memora is currently in early access and free for initial users.',
      'Premium features, like personalized insights and long-term record storage, will be available soon with clear, flexible pricing.',
    ],
  },
  {
    question: 'What happens if I stop using Memora?',
    answer: [
      'You can download all your date anytime.',
      'Once your account is deleted, all stored information is permanently removed from our servers- no backups, no hidden copies',
    ],
  },
  {
    question: 'Can Memora replace my doctor?',
    answer: [
      'Not at all. Memora is designed to help you understand your data and stay informed- not to diagnose or treat.',
      'It works best as a companion alongside your healthcare providers, giving you clarity between visits',
    ],
  },
]

function FaqItem({ question, answer }) {
  return (
    <article className="faq-item flex flex-col gap-[14px]">
      <div className="faq-item-header flex items-start justify-between gap-4">
        <h3 className="faq-question text-[16px] font-medium leading-normal tracking-[0.48px] text-[#303030]">
          {question}
        </h3>
        <img src={FAQ_ICON_URL} alt="" aria-hidden="true" className="h-6 w-6 shrink-0" />
      </div>

      <div className="faq-answer flex flex-col gap-[14px] text-[16px] font-normal leading-normal tracking-[0.48px] text-[#303030]">
        {answer.map((paragraph) => (
          <p key={paragraph} className="max-w-[530px]">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  )
}

export default function FaqSection() {
  return (
    <section className="faq-section bg-white px-4 py-[24px] sm:px-6 lg:px-[10px]">
      <div className="faq-shell mx-auto grid w-full max-w-[1128px] gap-10 lg:grid-cols-[564px_564px] lg:items-start">
        <div className="faq-intro flex max-w-[564px] flex-col gap-[12px] text-[#303030]">
          <p className="faq-label text-[16px] font-normal tracking-[0.48px]">FAQ</p>
          <h2 className="faq-heading font-['Hepta_Slab',serif] text-[32px] font-semibold tracking-[0.96px]">
            Ask us anything
          </h2>
          <p className="faq-support text-[16px] font-normal tracking-[0.48px]">
            Have more questions or need support? Shoot us a message and someone from
            our team will be happy to help.
          </p>
        </div>

        <div className="faq-list flex flex-col gap-[24px]">
          {faqItems.map((item) => (
            <FaqItem key={item.question} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
