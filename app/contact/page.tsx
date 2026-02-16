"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function ContactPage() {
  const ref = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit")
      }

      setIsSuccess(true)
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: (
        <a href="tel:7047715245" className="text-cream/50 hover:text-gold transition-colors">
          (704) 771-5245
        </a>
      ),
    },
    {
      icon: Mail,
      title: "Email",
      content: (
        <a href="mailto:info@signatureluxeservices.com" className="text-cream/50 hover:text-gold transition-colors">
          info@signatureluxeservices.com
        </a>
      ),
    },
    {
      icon: MapPin,
      title: "Service Area",
      content: <span className="text-cream/50">Charlotte, NC & surrounding areas</span>,
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: (
        <div className="text-cream/50 space-y-1 text-sm">
          <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      ),
    },
  ]

  return (
    <div ref={ref} className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-black-rich py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.03] via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">Contact Us</p>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-cream">Get In Touch</h1>
              <div className="w-16 h-[2px] bg-gold/40 mx-auto mb-8" />
              <p className="text-lg md:text-xl text-cream/60 leading-relaxed">
                Ready to elevate your business environment? Contact us for a complimentary corporate estimate.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="animate-on-scroll mb-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-4">Contact Information</h2>
                  <p className="text-cream/45 leading-relaxed">
                    Have questions? Need a quote? Our team is here to help.
                  </p>
                </div>

                <div className="space-y-4 stagger-children">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={index}
                        className="animate-on-scroll group flex items-start gap-4 p-5 rounded-xl border border-gold/8 bg-black-soft/30 hover:border-gold/20 transition-all duration-300"
                      >
                        <div className="shrink-0 w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                          <Icon className="h-5 w-5 text-gold" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-cream mb-1">{item.title}</h3>
                          {item.content}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Quote Form */}
              <div className="lg:col-span-3 animate-on-scroll">
                <div className="p-6 md:p-8 rounded-xl border border-gold/10 bg-black-soft/30">
                  {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                        <CheckCircle className="w-10 h-10 text-gold" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-cream mb-3">Request Received!</h3>
                      <p className="text-cream/50 max-w-md">
                        Thank you for reaching out! We will get back to you within 24 hours.
                      </p>
                      <Button
                        className="mt-8 bg-transparent border border-gold/30 text-gold hover:bg-gold hover:text-black-rich transition-all"
                        onClick={() => setIsSuccess(false)}
                      >
                        Submit Another Request
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-2">Request a Quote</h2>
                      <p className="text-cream/40 mb-8">
                        Fill out the form below for a complimentary, no-obligation estimate.
                      </p>

                      {error && (
                        <div className="mb-6 p-4 rounded-lg border border-red-500/20 bg-red-500/10 text-red-400 text-sm">
                          {error}
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-cream/70 text-sm">Full Name *</Label>
                            <Input
                              id="name"
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                              disabled={isSubmitting}
                              className="bg-background border-gold/15 text-cream placeholder:text-cream/25 focus:border-gold/40 focus:ring-gold/20"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-cream/70 text-sm">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                              disabled={isSubmitting}
                              className="bg-background border-gold/15 text-cream placeholder:text-cream/25 focus:border-gold/40 focus:ring-gold/20"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-cream/70 text-sm">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="(704) 123-4567"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              required
                              disabled={isSubmitting}
                              className="bg-background border-gold/15 text-cream placeholder:text-cream/25 focus:border-gold/40 focus:ring-gold/20"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="service" className="text-cream/70 text-sm">Service Type *</Label>
                            <select
                              id="service"
                              className="flex h-10 w-full rounded-md border border-gold/15 bg-background px-3 py-2 text-sm text-cream ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/20 focus-visible:border-gold/40 disabled:cursor-not-allowed disabled:opacity-50"
                              value={formData.service}
                              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                              required
                              disabled={isSubmitting}
                            >
                              <option value="" className="bg-black-rich text-cream/50">Select a service</option>
                              <option value="corporate-office" className="bg-black-rich text-cream">Corporate Office Cleaning</option>
                              <option value="commercial" className="bg-black-rich text-cream">Commercial Facility Maintenance</option>
                              <option value="deep-clean" className="bg-black-rich text-cream">Premium Deep Clean</option>
                              <option value="move-in-out" className="bg-black-rich text-cream">Move In/Out & Turnover</option>
                              <option value="residential" className="bg-black-rich text-cream">Residential Cleaning</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-cream/70 text-sm">Additional Details</Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us about your cleaning needs, property size, preferred schedule..."
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            disabled={isSubmitting}
                            className="bg-background border-gold/15 text-cream placeholder:text-cream/25 focus:border-gold/40 focus:ring-gold/20 resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-gold text-black-rich hover:bg-gold-light font-semibold py-6 text-base transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            "Request Free Estimate"
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
