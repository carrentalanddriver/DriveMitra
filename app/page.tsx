import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { ServicesSection } from '../components/ServicesSection'
import { WhyChooseUsSection } from '../components/WhyChooseUsSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
