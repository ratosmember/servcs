import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, Gem, Shield, CheckCircle, Clock, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
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
      description: "Commercial-grade, eco-friendly products and professional equipment provided",
    },
    {
      icon: Clock,
      title: "Reliable & Punctual",
      description: "Consistent scheduling that works around your business operations",
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description: "Background-checked, uniformed teams with commercial cleaning expertise",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-black-rich py-16 md:py-24 relative">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-4">About Us</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance text-cream">About Signature Luxe Cleaning Services</h1>
              <p className="text-lg md:text-xl text-cream/70 leading-relaxed text-pretty">
                Signature Luxe Cleaning Services is a premium cleaning company based in Charlotte, NC. We specialize in
                executive-level commercial and residential cleaning, including corporate office maintenance, deep cleaning,
                facility management, and property turnovers. We are known for our impeccable standards, reliability, and
                professionalism.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs uppercase tracking-[0.25em] text-gold-dark font-medium mb-3 text-center">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">Built on Excellence</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-pretty">
                  Signature Luxe Cleaning Services was founded with a clear vision: to provide Charlotte businesses with
                  cleaning services that match the caliber of their operations. We understand that your workspace is a
                  reflection of your brand -- every lobby, every conference room, every restroom communicates something to
                  your clients and employees. That's why we approach every project with the same commitment to excellence.
                </p>
                <p className="text-pretty">
                  Our team of trained professionals follows rigorous protocols designed for commercial environments. From
                  corporate offices and medical facilities to retail spaces and property management firms, we tailor our
                  services to meet the unique demands of each industry. We don't believe in one-size-fits-all cleaning --
                  we believe in solutions that elevate your space.
                </p>
                <p className="text-pretty">
                  Licensed, insured, and equipped with commercial-grade products, we offer flexible scheduling that
                  works around your business hours. Whether you need daily maintenance, weekly deep cleans, or one-time
                  project work, Signature Luxe delivers consistent, premium results you can count on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties Grid */}
        <section className="py-16 md:py-20 bg-black-rich">
          <div className="container mx-auto px-4 md:px-6">
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-3 text-center">The Signature Difference</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center text-cream">Why Businesses Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialties.map((specialty, index) => {
                const Icon = specialty.icon
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-black-soft border-gold/10 hover:border-gold/30">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-4 rounded-full bg-gold/10">
                        <Icon className="h-8 w-8 text-gold" />
                      </div>
                      <h3 className="text-xl font-semibold text-cream">{specialty.title}</h3>
                      <p className="text-cream/60 text-pretty">{specialty.description}</p>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
