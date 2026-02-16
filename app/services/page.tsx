"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function ServicesPage() {
  const ref = useScrollAnimation()

  const services = [
    {
      title: "Corporate Office Cleaning",
      image: "/clean-modern-office-workspace-professional.jpg",
      description:
        "Executive-level cleaning for corporate environments. Your office space reflects your brand -- from reception to boardroom, every surface communicates professionalism.",
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
        "Comprehensive cleaning programs for retail spaces, medical offices, fitness centers, and commercial properties with industry-specific standards.",
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
        "Our signature deep cleaning service goes beyond standard maintenance. Ideal for post-construction, seasonal refreshes, or showroom-condition results.",
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
        "Seamless property transitions for businesses and property managers. Spaces left inspection-ready, guaranteed.",
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
    <div ref={ref} className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-black-rich py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.03] via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">Our Expertise</p>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-cream">Premium Cleaning Services</h1>
              <div className="w-16 h-[2px] bg-gold/40 mx-auto mb-8" />
              <p className="text-lg md:text-xl text-cream/60 leading-relaxed">
                Executive-level cleaning solutions tailored to your business needs. Impeccable results, every time.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`animate-on-scroll flex flex-col ${
                    index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                  } gap-8 md:gap-12 items-center max-w-6xl mx-auto`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2 relative">
                    <div className="relative overflow-hidden rounded-xl border border-gold/10">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black-rich/40 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-4">{service.title}</h3>
                    <p className="text-cream/50 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                          <span className="text-sm text-cream/60">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button className="bg-gold text-black-rich hover:bg-gold-light font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 group">
                        Request Quote
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-black-soft relative">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div className="container mx-auto px-4 md:px-6 text-center animate-on-scroll">
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">Get Started</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-cream">
              Ready to Elevate Your Space?
            </h2>
            <div className="w-16 h-[2px] bg-gold/40 mx-auto mb-6" />
            <p className="text-lg text-cream/50 mb-10 max-w-2xl mx-auto">
              Let Signature Luxe transform your business environment with our premium cleaning services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gold text-black-rich hover:bg-gold-light font-semibold text-base px-8 py-6 transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 group">
                  Request Corporate Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="tel:7047715245">
                <Button
                  variant="outline"
                  className="border-2 border-gold/30 text-gold hover:bg-gold hover:text-black-rich bg-transparent font-semibold text-base px-8 py-6 transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (704) 771-5245
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
