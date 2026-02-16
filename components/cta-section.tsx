"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CtaSection() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.03] via-transparent to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">Get Started</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-cream">
            Ready to Elevate Your Space?
          </h2>
          <div className="w-16 h-[2px] bg-gold/40 mx-auto mb-6" />
          <p className="text-lg text-cream/50 mb-10 leading-relaxed">
            Let Signature Luxe Cleaning Services transform your business environment. Contact us today for a
            complimentary corporate quote.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
      </div>
    </section>
  )
}
