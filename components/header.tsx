import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold-dark/20 bg-black-rich/98 backdrop-blur supports-[backdrop-filter]:bg-black-rich/95">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-wide text-gold">
              Signature Luxe
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gold-light/70 font-medium">
              Cleaning Services
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gold hover:text-gold-light transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-cream/80 hover:text-gold transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-sm font-medium text-cream/80 hover:text-gold transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-sm font-medium text-cream/80 hover:text-gold transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:7047715245"
              className="flex items-center gap-2 text-sm font-medium text-cream/80 hover:text-gold transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">(704) 771-5245</span>
            </a>
            <Link href="/contact">
              <Button size="lg" className="bg-gold text-black-rich hover:bg-gold-light font-semibold">
                Free Estimate
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a href="tel:7047715245">
            <Button size="sm" variant="ghost" className="text-gold hover:text-gold-light hover:bg-black-soft">
              <Phone className="h-4 w-4" />
            </Button>
          </a>
          <Link href="/contact">
            <Button size="sm" className="bg-gold text-black-rich hover:bg-gold-light font-semibold">
              Estimate
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
