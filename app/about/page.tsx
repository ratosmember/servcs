"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import { Award, Gem, Shield, CheckCircle, Clock, Users, Eye, Target, Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function AboutPage() {
  const ref = useScrollAnimation()

  const specialties = [
    {
      icon: CheckCircle,
      title: "Meticulous Standards",
      description: "Every surface inspected, every corner addressed with precision and care",
    },
    {
      icon: Gem,
      title: "Premium Service",
      description: "Luxury-grade cleaning for businesses that demand the highest quality",
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully bonded, licensed, and insured for your complete confidence",
    },
    {
      icon: Award,
      title: "All Supplies Included",
      description: "Commercial-grade, eco-friendly products and professional equipment",
    },
    {
      icon: Clock,
      title: "Reliable & Punctual",
      description: "Consistent scheduling that works around your business operations",
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description: "Background-checked, uniformed teams with commercial expertise",
    },
  ]

  const values = [
    { icon: Eye, title: "Our Vision", text: "To be Charlotte's most trusted premium cleaning partner, setting the standard for excellence in commercial cleanliness." },
    { icon: Target, title: "Our Mission", text: "To deliver impeccable cleaning services that elevate business environments and create lasting impressions." },
    { icon: Heart, title: "Our Values", text: "Integrity, excellence, and attention to detail guide everything we do. We treat every space as if it were our own." },
  ]

  return (
    <div ref={ref} className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-black-rich py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.03] via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">About Us</p>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-cream">
                About Signature Luxe
              </h1>
              <div className="w-16 h-[2px] bg-gold/40 mx-auto mb-8" />
              <p className="text-lg md:text-xl text-cream/60 leading-relaxed">
                A premium cleaning company based in Charlotte, NC. We specialize in
                executive-level commercial and residential cleaning with impeccable standards.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-on-scroll">
                <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">Our Story</p>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-cream">Built on Excellence</h2>
                <div className="w-16 h-[2px] bg-gold/40 mx-auto mt-5" />
              </div>
              <div className="space-y-6 text-cream/50 leading-relaxed">
                <p className="animate-on-scroll">
                  Signature Luxe Cleaning Services was founded with a clear vision: to provide Charlotte businesses with
                  cleaning services that match the caliber of their operations. We understand that your workspace is a
                  reflection of your brand -- every lobby, every conference room, every restroom communicates something to
                  your clients and employees.
                </p>
                <p className="animate-on-scroll">
                  Our team of trained professionals follows rigorous protocols designed for commercial environments. From
                  corporate offices and medical facilities to retail spaces and property management firms, we tailor our
                  services to meet the unique demands of each industry.
                </p>
                <p className="animate-on-scroll">
                  Licensed, insured, and equipped with commercial-grade products, we offer flexible scheduling that
                  works around your business hours. Whether you need daily maintenance, weekly deep cleans, or one-time
                  project work, Signature Luxe delivers consistent, premium results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Values */}
        <section className="py-20 md:py-28 bg-black-soft relative">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-on-scroll">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">Our Purpose</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-cream">Vision & Values</h2>
              <div className="w-16 h-[2px] bg-gold/40 mx-auto mt-5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto stagger-children">
              {values.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="animate-on-scroll text-center group p-6 rounded-xl border border-gold/8 hover:border-gold/20 transition-all duration-500">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                      <Icon className="h-8 w-8 text-gold" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-cream mb-4">{item.title}</h3>
                    <p className="text-cream/45 leading-relaxed">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-on-scroll">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">The Signature Difference</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-cream">Why Businesses Choose Us</h2>
              <div className="w-16 h-[2px] bg-gold/40 mx-auto mt-5" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto stagger-children">
              {specialties.map((specialty, index) => {
                const Icon = specialty.icon
                return (
                  <div
                    key={index}
                    className="animate-on-scroll group text-center p-6 rounded-xl border border-gold/8 bg-black-soft/30 hover:border-gold/20 hover:bg-black-soft/60 transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-full bg-gold/8 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/15 transition-colors">
                      <Icon className="h-7 w-7 text-gold" />
                    </div>
                    <h3 className="text-lg font-semibold text-cream mb-2">{specialty.title}</h3>
                    <p className="text-cream/45 leading-relaxed text-sm">{specialty.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}
