import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-background py-20 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/clean-modern-home-living-room-sparkling-fresh.jpg')",
          }}
        />
        {/* Cyan overlay for brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-accent/90" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="h-5 w-5 text-white" />
            <p className="text-sm md:text-base font-medium text-white/90">Based in Charlotte, NC</p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 leading-tight text-white">
            Professional Cleaning Services You Can Trust
          </h1>

          <p className="text-lg md:text-xl text-white/90 text-balance mb-8 leading-relaxed">
            Twin Sisters Cleaning brings sparkling clean results to homes and businesses throughout the Charlotte metro
            area. We deliver exceptional service with attention to every detail.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full font-semibold">
                Get Your Free Estimate
              </Button>
            </Link>
            <a href="tel:7047715245" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary w-full bg-transparent font-semibold"
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
