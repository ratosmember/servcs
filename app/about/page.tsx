import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, Heart, Shield, CheckCircle, Clock, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  const specialties = [
    {
      icon: CheckCircle,
      title: "Very Detailed Cleaning",
      description: "Every corner, every surface - we pay attention to the details that matter most",
    },
    {
      icon: Heart,
      title: "Local Family Business",
      description: "Proudly serving Charlotte and building lasting relationships with our community",
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your complete peace of mind and protection",
    },
    {
      icon: Award,
      title: "Supplies Included",
      description: "We bring all the professional-grade cleaning supplies and equipment needed",
    },
    {
      icon: Clock,
      title: "Reliable & Punctual",
      description: "On-time service you can count on - we respect your schedule and time",
    },
    {
      icon: Users,
      title: "Flexible Availability",
      description: "Scheduling that works around your life with convenient booking options",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About Twin Sisters Cleaning</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                Twin Sisters Cleaning is a local, family-owned cleaning company based in Charlotte, NC. We specialize in
                detailed residential and commercial cleaning, including standard cleaning, deep cleaning,
                move-in/move-out, and Airbnb turnovers. We are known for our attention to detail, reliability, and
                professionalism.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-pretty">
                  As twin sisters who grew up in Charlotte, we understand that your home is more than just a space -
                  it's where life happens, where memories are made, and where you deserve to feel comfortable and at
                  peace. That's why we started Twin Sisters Cleaning: to bring professional, caring cleaning services to
                  our community with the personal touch that only a family business can provide.
                </p>
                <p className="text-pretty">
                  We know how busy life can be, and cleaning is often the last thing on your mind after a long day.
                  That's where we come in. Our goal is simple: to leave every home spotless and every client satisfied.
                  We treat each home as if it were our own, giving you back precious time to focus on what truly matters
                  - your family, your work, and your well-being.
                </p>
                <p className="text-pretty">
                  Licensed and insured with all supplies included, we offer flexible scheduling to work around your
                  life. Whether you need a one-time deep clean, regular maintenance, or help with a move, we're here to
                  make your life easier. Thank you for trusting us with your home - we don't take that responsibility
                  lightly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties Grid */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialties.map((specialty, index) => {
                const Icon = specialty.icon
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-4 rounded-full bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{specialty.title}</h3>
                      <p className="text-muted-foreground text-pretty">{specialty.description}</p>
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
