const TESTIMONIAL_IMAGE_URL =
  'https://www.figma.com/api/mcp/asset/1c1c0d69-8919-4b0e-a79e-168588aa353a'
const TESTIMONIAL_ICON_URL =
  'https://www.figma.com/api/mcp/asset/9a7db137-c2c8-4782-a89e-3c1851d66768'

const testimonial = {
  quote:
    'Memora has changed how we handle patient records. What used to take hours of searching is now just a few clicks.',
  author: 'Dr. Hanna Virtanen, Head of Clinic Operations, Carelink Health',
  metric: '6 hours/ week saved',
  caption: 'AVERAGE TIME SAVED ON\nPATIENT FILE MANAGEMENT',
}

export default function TestimonialSection() {
  return (
    <section className="testimonial-section bg-[#fffefe] px-4 py-[32px] sm:px-6 lg:px-[10px]">
      <div className="testimonial-shell mx-auto flex w-full max-w-[1128px] flex-col items-center px-0 py-[10px]">
        <div className="testimonial-stack flex w-full flex-col items-center gap-[24px] px-[16px] py-[32px]">
          <h2 className="testimonial-heading w-full text-center font-['Hepta_Slab',serif] text-[32px] font-semibold leading-none text-[#847262]">
            Testimonials from our clients
          </h2>

          <article className="testimonial-card grid w-full items-center gap-10 bg-[#faf0ec] px-6 py-8 lg:grid-cols-[1fr_360px] lg:justify-between lg:px-[36px] lg:py-0">
            <div className="testimonial-copy-frame flex w-full max-w-[476px] flex-col gap-[24px] px-[3px]">
              <img
                src={TESTIMONIAL_ICON_URL}
                alt=""
                aria-hidden="true"
                className="h-6 w-6"
              />

              <div className="testimonial-text-stack flex w-full flex-col gap-[16px] text-[#4e3b45]">
                <blockquote className="testimonial-quote max-w-[445px] text-[32px] font-medium leading-[1.15] tracking-[-0.03em]">
                  {testimonial.quote}
                </blockquote>
                <p className="testimonial-author text-[16px] font-normal leading-none text-[#4e3b45]">
                  {testimonial.author}
                </p>
              </div>
            </div>

            <div className="testimonial-media-column flex w-full flex-col items-center gap-[18px] py-[24px] lg:w-[360px]">
              <div className="testimonial-image-frame h-[367px] w-full overflow-hidden bg-[#EEEEEE]">
                <img
                  src={TESTIMONIAL_IMAGE_URL}
                  alt="Portrait of Dr. Hanna Virtanen"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="testimonial-metric-stack flex w-full max-w-[300px] flex-col items-center gap-[16px] text-center font-['Hedvig_Letters_Serif',serif] text-[#4e3b45]">
                <p className="testimonial-metric text-[32px] leading-none">
                  {testimonial.metric}
                </p>
                <p className="testimonial-caption whitespace-pre-line text-[16px] leading-[1.15]">
                  {testimonial.caption}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
