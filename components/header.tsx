"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-black-rich/98 backdrop-blur-lg shadow-lg shadow-black/20 border-b border-gold/10"
            : "bg-black-rich border-b border-gold/5"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="Signature Luxe Cleaning Services"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-sm font-medium text-cream/70 hover:text-gold transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="tel:7047715245"
                className="flex items-center gap-2 text-sm font-medium text-cream/70 hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">(704) 771-5245</span>
              </a>
              <Link href="/contact">
                <Button className="bg-gold text-black-rich hover:bg-gold-light font-semibold px-6 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
                  Free Estimate
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile buttons */}
          <div className="flex md:hidden items-center gap-2">
            <a href="tel:7047715245">
              <Button size="icon" variant="ghost" className="text-gold hover:text-gold-light hover:bg-black-soft">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Call us</span>
              </Button>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gold hover:text-gold-light transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black-rich/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-20 right-0 z-40 h-[calc(100dvh-5rem)] w-72 bg-black-rich border-l border-gold/10 transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 gap-1">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 px-4 text-lg font-medium text-cream/80 hover:text-gold hover:bg-black-soft rounded-lg transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-6 pt-6 border-t border-gold/10">
            <a
              href="tel:7047715245"
              className="flex items-center gap-3 py-3 px-4 text-cream/70 hover:text-gold transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>(704) 771-5245</span>
            </a>
          </div>

          <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-4">
            <Button className="w-full bg-gold text-black-rich hover:bg-gold-light font-semibold py-6 text-base">
              Free Estimate
            </Button>
          </Link>
        </nav>
      </div>
    </>
  )
}
