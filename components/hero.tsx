import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Building2, Shield } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-black-rich py-24 md:py-36 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/clean-modern-office-workspace-professional.jpg')",
          }}
        />
        {/* Dark overlay for luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-black-rich/95 via-black-rich/90 to-black-soft/85" />
      </div>

      {/* Subtle gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-gold" />
              <span className="text-xs uppercase tracking-[0.2em] text-gold/80 font-medium">Commercial</span>
            </div>
            <div className="w-px h-4 bg-gold/30" />
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-gold" />
              <span className="text-xs uppercase tracking-[0.2em] text-gold/80 font-medium">Licensed & Insured</span>
            </div>
            <div className="w-px h-4 bg-gold/30" />
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" />
              <span className="text-xs uppercase tracking-[0.2em] text-gold/80 font-medium">Charlotte, NC</span>
            </div>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-balance mb-6 leading-tight text-cream">
            Elevate Your Business <br className="hidden md:block" />
            <span className="text-gold">With Pristine Spaces</span>
          </h1>

          <p className="text-lg md:text-xl text-cream/75 text-balance mb-10 leading-relaxed max-w-3xl mx-auto">
            Signature Luxe Cleaning Services delivers executive-level cleanliness for corporate offices, commercial
            facilities, and high-end properties throughout the Charlotte metro area. Impeccable standards, every time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="bg-gold text-black-rich hover:bg-gold-light w-full font-semibold text-base px-8 py-6">
                Request a Corporate Quote
              </Button>
            </Link>
            <a href="tel:7047715245" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gold/50 text-gold hover:bg-gold hover:text-black-rich w-full bg-transparent font-semibold text-base px-8 py-6"
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
