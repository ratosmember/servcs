import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black-rich border-t border-gold/10">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wide text-gold">
                Signature Luxe
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-light/60 font-medium">
                Cleaning Services
              </span>
            </div>
            <p className="text-sm text-cream/50 leading-relaxed">
              Premium commercial and residential cleaning services for businesses throughout the Charlotte metropolitan area.
            </p>
            <p className="text-xs text-cream/30">
              signatureluxeservices.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-cream">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-cream/50 hover:text-gold transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-cream/50 hover:text-gold transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-sm text-cream/50 hover:text-gold transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-sm text-cream/50 hover:text-gold transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-cream">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:7047715245"
                className="flex items-center gap-2 text-sm text-cream/50 hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(704) 771-5245</span>
              </a>
              <a
                href="mailto:info@signatureluxeservices.com"
                className="flex items-center gap-2 text-sm text-cream/50 hover:text-gold transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@signatureluxeservices.com</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-cream/50">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Charlotte, NC</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-cream/40">
            © {new Date().getFullYear()} Signature Luxe Cleaning Services. All rights reserved.
          </p>
          <p className="text-xs text-cream/30">
            Licensed & Insured | Charlotte, NC
          </p>
        </div>
      </div>
    </footer>
  )
}
