"use client"

import { MapPin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const cities = [
  "Charlotte", "Concord", "Davidson", "Fort Mill", "Harrisburg", "Huntersville",
  "Indian Land", "Indian Trail", "Marvin", "Matthews", "Mint Hill", "Monroe",
  "Mount Holly", "Pineville", "Waxhaw", "Weddington", "Stallings", "Wesley Chapel",
  "Lake Park", "Fairview", "Ballantyne", "Cornelius", "Belmont", "Gastonia",
  "Lowell", "Tega Cay", "Midland", "Locust",
]

export function ServiceAreas() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-black-soft relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">Service Coverage</p>
          <div className="flex items-center justify-center gap-3 mb-5">
            <MapPin className="h-6 w-6 text-gold" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-cream">Areas We Serve</h2>
          </div>
          <div className="w-16 h-[2px] bg-gold/40 mx-auto mb-6" />
          <p className="text-lg text-cream/50 max-w-2xl mx-auto leading-relaxed">
            Proudly serving Charlotte and surrounding communities across North and South Carolina
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-on-scroll">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {cities.map((city, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-background/50 border border-gold/8 hover:border-gold/20 transition-colors duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold/60 shrink-0" />
                <span className="text-sm text-cream/70">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
