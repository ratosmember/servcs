import { CheckCircle, Gem, Shield, Award, Clock, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Meticulous Standards",
      description: "Every surface inspected, every corner addressed -- our detailed process ensures nothing is missed",
    },
    {
      icon: Gem,
      title: "Premium Service",
      description: "Luxury-grade cleaning for businesses that refuse to compromise on quality or presentation",
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully bonded, licensed, and insured for your complete confidence and protection",
    },
    {
      icon: Award,
      title: "All Supplies Included",
      description: "We bring commercial-grade, eco-friendly cleaning products and professional equipment",
    },
    {
      icon: Clock,
      title: "Reliable & Punctual",
      description: "Consistent scheduling that works around your business hours -- no disruptions",
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description: "Background-checked, uniformed teams trained in commercial cleaning protocols",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-black-rich">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-3">The Signature Difference</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-cream">Why Businesses Choose Us</h2>
          <p className="text-lg text-cream/60 max-w-2xl mx-auto text-pretty">
            Discover what makes Signature Luxe the preferred cleaning partner for businesses across Charlotte
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-black-soft border-gold/10 hover:border-gold/30">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-gold/10">
                    <Icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-cream">{reason.title}</h3>
                  <p className="text-cream/60 text-pretty">{reason.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
