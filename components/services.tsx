import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Building2, TruckIcon, Briefcase } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Corporate Office Cleaning",
    description:
      "Keep your corporate environment impeccable. We deliver executive-level cleaning for offices, lobbies, conference rooms, and shared spaces -- creating first impressions that reflect your brand's excellence.",
  },
  {
    icon: Briefcase,
    title: "Commercial Facility Maintenance",
    description:
      "Comprehensive cleaning solutions for retail spaces, medical offices, and commercial properties. We maintain the highest standards of hygiene and presentation your business demands.",
  },
  {
    icon: Sparkles,
    title: "Premium Deep Clean",
    description:
      "Our signature deep cleaning service goes beyond the surface. Ideal for post-construction, seasonal refreshes, or elevating any space to showroom condition with meticulous attention to detail.",
  },
  {
    icon: TruckIcon,
    title: "Move In/Out & Turnover",
    description:
      "Seamless property transitions for businesses and property managers. We ensure spaces are inspection-ready, whether you're relocating offices or preparing commercial units for new tenants.",
  },
]

export function Services() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-dark font-medium mb-3">What We Offer</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">Our Premium Services</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            Tailored cleaning solutions for businesses that demand excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg bg-card"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-gold-dark" />
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
