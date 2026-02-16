import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Vision } from "@/components/vision"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ServiceAreas } from "@/components/service-areas"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Vision />
        <WhyChooseUs />
        <ServiceAreas />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
