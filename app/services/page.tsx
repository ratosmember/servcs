import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Corporate Office Cleaning",
      image: "/clean-modern-office-workspace-professional.jpg",
      description:
        "Executive-level cleaning for corporate environments. We understand that your office space reflects your brand -- from the reception area to the boardroom, every surface communicates professionalism to clients and employees.",
      features: [
        "Executive office and workspace cleaning",
        "Lobby, reception, and conference room detailing",
        "Restroom sanitization and restocking",
        "Break room and kitchen deep cleaning",
        "High-touch surface disinfection protocols",
        "After-hours service to avoid disruptions",
      ],
    },
    {
      title: "Commercial Facility Maintenance",
      image: "/professional-deep-cleaning-service-sparkling-clean.jpg",
      description:
        "Comprehensive cleaning programs for retail spaces, medical offices, fitness centers, and other commercial properties. We maintain the hygiene standards your industry demands.",
      features: [
        "Industry-specific cleaning protocols",
        "Floor care (vacuum, mop, polish, strip & wax)",
        "Window and glass cleaning",
        "Trash removal and recycling management",
        "Flexible daily, weekly, or monthly schedules",
        "Quality assurance inspections included",
      ],
    },
    {
      title: "Premium Deep Clean",
      image: "/clean-modern-home-living-room-sparkling-fresh.jpg",
      description:
        "Our signature deep cleaning service goes beyond standard maintenance. Ideal for post-construction, seasonal refreshes, or elevating any space to showroom condition with meticulous attention to detail.",
      features: [
        "Comprehensive top-to-bottom deep cleaning",
        "Behind and under all furniture and fixtures",
        "Baseboards, window sills, and architectural details",
        "Cabinet and storage area detailing (inside & out)",
        "Light fixture and ceiling fan restoration",
        "Deep kitchen and bathroom sanitization",
      ],
    },
    {
      title: "Move In/Out & Turnover",
      image: "/empty-clean-apartment-moving-boxes-spotless.jpg",
      description:
        "Seamless property transitions for businesses and property managers. Whether preparing commercial units for new tenants or handling office relocations, we ensure spaces are inspection-ready.",
      features: [
        "Complete top-to-bottom property preparation",
        "Appliance cleaning (inside & out)",
        "Cabinet, closet, and storage area detailing",
        "Window and glass cleaning",
        "Floor deep cleaning and treatment",
        "Final walkthrough and inspection guarantee",
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-black-rich py-16 md:py-24 relative">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-4">Our Expertise</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance text-cream">Premium Cleaning Services</h1>
              <p className="text-lg md:text-xl text-cream/70 leading-relaxed text-pretty">
                Executive-level cleaning solutions tailored to your business needs. From daily maintenance to deep cleans,
                we deliver impeccable results.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-16">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden border-border hover:border-gold/30 transition-all duration-300">
                  <div className={`grid md:grid-cols-2 gap-6 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                    <div className={`relative h-64 md:h-auto ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">{service.description}</p>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-gold-dark flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact">
                        <Button size="lg" className="w-full md:w-auto bg-gold text-black-rich hover:bg-gold-light font-semibold">
                          Request Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-black-rich">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-balance text-cream">Ready to Elevate Your Space?</h2>
            <p className="text-lg mb-8 text-cream/70 max-w-2xl mx-auto text-pretty">
              Let Signature Luxe Cleaning Services transform your business environment. Contact us today for a complimentary corporate quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gold text-black-rich hover:bg-gold-light font-semibold">
                  Request Corporate Quote
                </Button>
              </Link>
              <a href="tel:7047715245">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-gold/50 text-gold hover:bg-gold hover:text-black-rich"
                >
                  Call (704) 771-5245
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
