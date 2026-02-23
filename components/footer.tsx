import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black-rich border-t border-gold/10 relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Logo and description */}
          <div className="md:col-span-5 space-y-5">
            <Image
              src="/logo.png"
              alt="Signature Luxe Cleaning Services"
              width={160}
              height={53}
              className="h-14 w-auto"
            />
            <p className="text-sm text-cream/65 leading-relaxed max-w-sm">
              Premium commercial cleaning services for businesses throughout the Charlotte metropolitan area. Impeccable standards, every time.
            </p>
            <p className="text-xs text-cream/40">
              signatureluxeservices.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-5">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-cream/60 hover:text-gold transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-5">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:7047715245"
                className="flex items-center gap-3 text-sm text-cream/60 hover:text-gold transition-colors duration-300"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold/50" />
                <span>(704) 771-5245</span>
              </a>
              <a
                href="mailto:info@signatureluxeservices.com"
                className="flex items-center gap-3 text-sm text-cream/60 hover:text-gold transition-colors duration-300"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold/50" />
                <span>info@signatureluxeservices.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-cream/60">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-gold/50" />
                <span>Charlotte, NC & Surrounding Areas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/8 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Signature Luxe Cleaning Services. All rights reserved.
          </p>
          <p className="text-xs text-cream/40">
            Licensed & Insured | Charlotte, NC
          </p>
        </div>
      </div>
    </footer>
  )
}
