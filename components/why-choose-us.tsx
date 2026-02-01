import { CheckCircle, Heart, Shield, Award, Clock, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Very Detailed Cleaning",
      description: "We pay attention to every corner and surface for a truly thorough clean",
    },
    {
      icon: Heart,
      title: "Local Business in Charlotte",
      description: "Family-owned and operated, serving our community with pride",
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your complete peace of mind",
    },
    {
      icon: Award,
      title: "Supplies Included",
      description: "We bring all professional-grade cleaning supplies and equipment",
    },
    {
      icon: Clock,
      title: "Reliable and Punctual",
      description: "On-time, every time - we respect your schedule",
    },
    {
      icon: Users,
      title: "Flexible Availability",
      description: "Convenient scheduling options that work around your busy life",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover what makes Twin Sisters Cleaning the trusted choice for homes and businesses across Charlotte
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-background">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{reason.title}</h3>
                  <p className="text-muted-foreground text-pretty">{reason.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
