"use client"

import { Eye, Target, Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Vision() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-black-soft relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">Our Purpose</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-cream mb-5">Vision & Values</h2>
          <div className="w-16 h-[2px] bg-gold/40 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto stagger-children">
          {/* Vision */}
          <div className="animate-on-scroll text-center group">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
              <Eye className="h-8 w-8 text-gold" />
            </div>
            <h3 className="font-serif text-xl font-bold text-cream mb-4">Our Vision</h3>
            <p className="text-cream/50 leading-relaxed">
              To be Charlotte's most trusted premium cleaning partner, setting the standard for excellence in
              commercial cleanliness and client satisfaction.
            </p>
          </div>

          {/* Mission */}
          <div className="animate-on-scroll text-center group">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
              <Target className="h-8 w-8 text-gold" />
            </div>
            <h3 className="font-serif text-xl font-bold text-cream mb-4">Our Mission</h3>
            <p className="text-cream/50 leading-relaxed">
              To deliver impeccable cleaning services that elevate business environments, protect employee
              well-being, and create lasting impressions for every client who walks through your doors.
            </p>
          </div>

          {/* Values */}
          <div className="animate-on-scroll text-center group">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
              <Heart className="h-8 w-8 text-gold" />
            </div>
            <h3 className="font-serif text-xl font-bold text-cream mb-4">Our Values</h3>
            <p className="text-cream/50 leading-relaxed">
              Integrity, excellence, and attention to detail guide everything we do. We treat every space as
              if it were our own, with respect and meticulous care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
