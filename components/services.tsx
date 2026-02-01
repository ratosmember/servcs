import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Home, Building2, TruckIcon } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Deep Clean",
    description:
      "Our comprehensive deep cleaning service tackles every corner of your space. We go beyond surface cleaning to sanitize, scrub, and polish, ensuring your home or office sparkles from top to bottom.",
  },
  {
    icon: Home,
    title: "Residential",
    description:
      "Keep your home fresh and inviting with our regular residential cleaning services. Customized to your needs, we handle everything from dusting and vacuuming to kitchen and bathroom sanitization.",
  },
  {
    icon: Building2,
    title: "Commercial",
    description:
      "Make the right impression with a spotless workplace. Our commercial cleaning services maintain a professional, hygienic environment for your employees and clients, keeping your business looking its best.",
  },
  {
    icon: TruckIcon,
    title: "Move In/Out Cleaning",
    description:
      "Moving can be stressful—let us handle the cleaning. Our move in/out service ensures your old or new space is thoroughly cleaned, making transitions smoother and leaving properties inspection-ready.",
  },
]

export function Services() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Cleaning Services</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            Professional cleaning solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
