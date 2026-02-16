"use client"

import { CheckCircle, Gem, Shield, Award, Clock, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function WhyChooseUs() {
  const ref = useScrollAnimation()

  const reasons = [
    {
      icon: CheckCircle,
      title: "Meticulous Standards",
      description: "Every surface inspected, every corner addressed with precision",
    },
    {
      icon: Gem,
      title: "Premium Service",
      description: "Luxury-grade cleaning for businesses that refuse to compromise",
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully bonded, licensed, and insured for your confidence",
    },
    {
      icon: Award,
      title: "Supplies Included",
      description: "Commercial-grade, eco-friendly products and equipment",
    },
    {
      icon: Clock,
      title: "Reliable & Punctual",
      description: "Consistent scheduling around your business hours",
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description: "Background-checked, uniformed teams with expertise",
    },
  ]

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">The Signature Difference</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-5 text-cream">Why Businesses Choose Us</h2>
          <div className="w-16 h-[2px] bg-gold/40 mx-auto mb-6" />
          <p className="text-lg text-cream/50 max-w-2xl mx-auto">
            Discover what makes Signature Luxe the preferred cleaning partner for businesses across Charlotte
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto stagger-children">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="animate-on-scroll group text-center p-6 rounded-xl border border-gold/8 bg-black-soft/30 hover:border-gold/20 hover:bg-black-soft/60 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-gold/8 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/15 transition-colors duration-300">
                  <Icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-cream mb-2">{reason.title}</h3>
                <p className="text-cream/45 leading-relaxed text-sm">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
