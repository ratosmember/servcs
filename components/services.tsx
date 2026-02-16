"use client"

import { Sparkles, Building2, TruckIcon, Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: Building2,
    title: "Corporate Office Cleaning",
    description:
      "Executive-level cleaning for offices, lobbies, conference rooms, and shared spaces -- creating first impressions that reflect your brand.",
  },
  {
    icon: Briefcase,
    title: "Commercial Facility Maintenance",
    description:
      "Comprehensive cleaning for retail spaces, medical offices, and commercial properties with industry-specific protocols.",
  },
  {
    icon: Sparkles,
    title: "Premium Deep Clean",
    description:
      "Our signature service goes beyond the surface. Ideal for post-construction, seasonal refreshes, or showroom-condition results.",
  },
  {
    icon: TruckIcon,
    title: "Move In/Out & Turnover",
    description:
      "Seamless property transitions for businesses and property managers. Spaces left inspection-ready, guaranteed.",
  },
]

export function Services() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">What We Offer</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-5 text-cream">Our Premium Services</h2>
          <div className="w-16 h-[2px] bg-gold/40 mx-auto mb-6" />
          <p className="text-lg text-cream/50 max-w-2xl mx-auto leading-relaxed">
            Tailored cleaning solutions for businesses that demand excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto stagger-children">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="animate-on-scroll group relative p-6 md:p-8 rounded-xl border border-gold/10 bg-black-soft/50 hover:border-gold/30 hover:bg-black-soft transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-cream/50 leading-relaxed text-sm md:text-base">{service.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium transition-colors group"
          >
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
