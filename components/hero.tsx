"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Building2, Shield, MapPin, ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center bg-black-rich overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/clean-modern-office-workspace-professional.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black-rich/90 via-black-rich/80 to-black-rich" />
        <div className="absolute inset-0 bg-gradient-to-r from-black-rich/70 via-transparent to-black-rich/70" />
      </div>

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 md:py-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badges */}
          <div
            className={`flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10 transition-all duration-700 delay-100 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/20 bg-gold/5">
              <Building2 className="h-3.5 w-3.5 text-gold" />
              <span className="text-[11px] uppercase tracking-[0.15em] text-gold/90 font-medium">Commercial</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/20 bg-gold/5">
              <Shield className="h-3.5 w-3.5 text-gold" />
              <span className="text-[11px] uppercase tracking-[0.15em] text-gold/90 font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/20 bg-gold/5">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              <span className="text-[11px] uppercase tracking-[0.15em] text-gold/90 font-medium">Charlotte, NC</span>
            </div>
          </div>

          {/* Heading */}
          <h1
            className={`font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-cream block">Professional Cleaning</span>
            <span className="gold-shimmer block mt-2 inline-flex items-center gap-3">
              Services You Can Trust
              <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-gold animate-pulse inline-block" />
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-base md:text-xl text-cream/60 text-balance mb-12 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Signature Luxe Cleaning Services delivers executive-level cleanliness for corporate offices,
            commercial facilities, and medical spaces throughout Charlotte.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-[400ms] ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-gold text-black-rich hover:bg-gold-light font-semibold text-base px-8 py-6 transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 group">
                Request a Corporate Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="tel:7047715245" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-gold/40 text-gold hover:bg-gold hover:text-black-rich bg-transparent font-semibold text-base px-8 py-6 transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                (704) 771-5245
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
