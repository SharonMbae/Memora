import HeroSection from './components/HeroSection.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import TestimonialSection from './components/TestimonialSection.jsx'
import WhySection from './components/WhySection.jsx'
import FaqSection from './components/FaqSection.jsx'

export default function App() {
  return (
    <main className="landing-page flex flex-col gap-[80px]">
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
      <WhySection />
      <FaqSection />
    </main>
  )
}
