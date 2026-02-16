import { MapPin } from "lucide-react"

const cities = [
  "Charlotte",
  "Concord",
  "Davidson",
  "Fort Mill",
  "Harrisburg",
  "Huntersville",
  "Indian Land",
  "Indian Trail",
  "Marvin",
  "Matthews",
  "Mint Hill",
  "Monroe",
  "Mount Holly",
  "Pineville",
  "Waxhaw",
  "Wellington",
  "Weddington",
  "Stallings",
  "Wesley Chapel",
  "Hemby Bridge",
  "Lake Park",
  "Fairview",
  "Ballantyne",
  "Stanfield",
  "Locust",
  "Midland",
  "Cornelius",
  "Belmont",
  "Gastonia",
  "Lowell",
  "Tega Cay",
]

export function ServiceAreas() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-dark font-medium mb-3">Service Coverage</p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-6 w-6 text-gold-dark" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Areas We Serve</h2>
          </div>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            Proudly serving Charlotte and the surrounding communities throughout North Carolina and South Carolina
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3">
            {cities.map((city, index) => (
              <li key={index} className="flex items-start gap-2 text-foreground">
                <span className="text-gold-dark mt-1">•</span>
                <span className="text-sm md:text-base">{city}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
