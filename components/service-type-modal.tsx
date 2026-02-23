"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Building2, Home, X } from "lucide-react"

export function ServiceTypeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem("service-type-dismissed")
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        requestAnimationFrame(() => setIsAnimating(true))
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsOpen(false)
      sessionStorage.setItem("service-type-dismissed", "true")
    }, 300)
  }

  const handleCommercial = () => {
    handleClose()
  }

  const handleResidential = () => {
    sessionStorage.setItem("service-type-dismissed", "true")
    window.location.href = "https://residential.signatureluxeservices.com/about"
  }

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-all duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black-rich/80 backdrop-blur-md"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-lg bg-black-rich border border-gold/20 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden transition-all duration-300 ${
          isAnimating ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        {/* Gold top accent */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 text-cream/40 hover:text-cream transition-colors rounded-lg hover:bg-cream/5 z-10"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8 md:p-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="Signature Luxe Cleaning Services"
              width={140}
              height={47}
              className="h-16 w-auto"
            />
          </div>

          {/* Text */}
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-3">
              Welcome to Signature Luxe
            </h2>
            <p className="text-cream/50 leading-relaxed max-w-sm mx-auto">
              What type of cleaning service are you looking for? Select below to find the right solution for you.
            </p>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Commercial */}
            <button
              onClick={handleCommercial}
              className="group relative flex flex-col items-center gap-4 p-6 rounded-xl border-2 border-gold/20 bg-gold/[0.04] hover:border-gold/50 hover:bg-gold/[0.08] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <Building2 className="h-7 w-7 text-gold" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-cream mb-1">Commercial</h3>
                <p className="text-xs text-cream/40 leading-relaxed">
                  Offices, facilities, medical spaces & corporate environments
                </p>
              </div>
            </button>

            {/* Residential */}
            <button
              onClick={handleResidential}
              className="group relative flex flex-col items-center gap-4 p-6 rounded-xl border-2 border-cream/10 bg-cream/[0.02] hover:border-cream/20 hover:bg-cream/[0.04] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-cream/5 flex items-center justify-center group-hover:bg-cream/10 transition-colors duration-300">
                <Home className="h-7 w-7 text-cream/60" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-cream/80 mb-1">Residential</h3>
                <p className="text-xs text-cream/35 leading-relaxed">
                  Homes, apartments, move-in/out & deep cleans
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
