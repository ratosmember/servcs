import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Deep Cleaning",
      image: "/professional-deep-cleaning-service-sparkling-clean.jpg",
      description:
        "Our comprehensive deep cleaning service goes beyond the surface to tackle every corner of your space. Perfect for spring cleaning, post-renovation, or whenever your property needs extra attention.",
      features: [
        "Detailed cleaning of all rooms and surfaces",
        "Behind and under furniture cleaning",
        "Baseboards, window sills, and door frames",
        "Cabinet and drawer cleaning (inside & out)",
        "Light fixture and ceiling fan cleaning",
        "Deep kitchen and bathroom sanitization",
      ],
    },
    {
      title: "Residential Cleaning",
      image: "/clean-modern-home-living-room-sparkling-fresh.jpg",
      description:
        "Regular maintenance cleaning for your home that keeps your living spaces fresh, healthy, and welcoming. Customizable schedules to fit your lifestyle - weekly, bi-weekly, or monthly.",
      features: [
        "Dusting of all accessible surfaces",
        "Vacuuming and mopping all floors",
        "Kitchen cleaning and sanitizing",
        "Bathroom cleaning and disinfection",
        "Bedroom tidying and bed making",
        "Living area organization and cleaning",
      ],
    },
    {
      title: "Commercial Cleaning",
      image: "/clean-modern-office-workspace-professional.jpg",
      description:
        "Professional cleaning solutions for businesses, offices, and commercial properties. We understand the importance of maintaining a clean, professional environment for your employees and clients.",
      features: [
        "Office and workspace cleaning",
        "Restroom sanitization and restocking",
        "Break room and kitchen cleaning",
        "Floor care (vacuum, mop, polish)",
        "Trash removal and recycling",
        "High-touch surface disinfection",
      ],
    },
    {
      title: "Move In/Out Cleaning",
      image: "/empty-clean-apartment-moving-boxes-spotless.jpg",
      description:
        "Thorough cleaning service for moving transitions. Whether you're moving in or moving out, we ensure the property is spotless and ready for its next chapter.",
      features: [
        "Complete top-to-bottom cleaning",
        "Appliance cleaning (inside & out)",
        "Cabinet and closet cleaning",
        "Window and glass cleaning",
        "Floor deep cleaning and treatment",
        "Final walkthrough inspection ready",
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Cleaning Services</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                Professional cleaning solutions tailored to your needs. From deep cleans to regular maintenance, we've
                got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-16">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className={`grid md:grid-cols-2 gap-6 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                    <div className={`relative h-64 md:h-auto ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">{service.description}</p>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact">
                        <Button size="lg" className="w-full md:w-auto">
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
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Experience the Difference?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              Let Twin Sisters Cleaning transform your space. Contact us today for a free estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Get Free Estimate
                </Button>
              </Link>
              <a href="tel:7047715245">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
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
