"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Get In Touch</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                Ready to experience professional cleaning services? We'd love to hear from you. Contact us today for a
                free estimate!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-pretty">
                    Have questions? Need a quote? Our friendly team is here to help. Reach out to us using any of the
                    methods below.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Phone</h3>
                        <a href="tel:7047715245" className="text-muted-foreground hover:text-primary transition-colors">
                          (704) 771-5245
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <a
                          href="mailto:info@twinsisterscleaning.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@twinsisterscleaning.com
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Service Area</h3>
                        <p className="text-muted-foreground">Charlotte, NC and surrounding areas</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Business Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Quote Form */}
              <div className="lg:col-span-3">
                <Card className="p-8">
                  {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="relative mb-6">
                        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center animate-scale-in">
                          <CheckCircle className="w-14 h-14 text-green-600 animate-check-draw" />
                        </div>
                        <div className="absolute inset-0 rounded-full border-4 border-green-500 animate-ping opacity-20" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-700 mb-3">Request Received!</h3>
                      <p className="text-muted-foreground max-w-md text-pretty">
                        Thank you for reaching out! We've received your cleaning quote request and will get back to you
                        within 24 hours.
                      </p>
                      <Button
                        className="mt-6 bg-transparent"
                        variant="outline"
                        onClick={() => setIsSuccess(false)}
                      >
                        Submit Another Request
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl md:text-3xl font-bold mb-6">Request a Cleaning Quote</h2>
                      <p className="text-muted-foreground mb-8 text-pretty">
                        Fill out the form below and we'll get back to you with a free, no-obligation estimate within 24
                        hours.
                      </p>

                      {error && (
                        <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                          {error}
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="(704) 123-4567"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="service">Service Type *</Label>
                            <select
                              id="service"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              value={formData.service}
                              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                              required
                              disabled={isSubmitting}
                            >
                              <option value="">Select a service</option>
                              <option value="deep-clean">Deep Cleaning</option>
                              <option value="residential">Residential Cleaning</option>
                              <option value="commercial">Commercial Cleaning</option>
                              <option value="move-in-out">Move In/Out Cleaning</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Additional Details</Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us about your cleaning needs, property size, preferred schedule, or any special requirements..."
                            rows={6}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            disabled={isSubmitting}
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
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
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        @keyframes scale-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes check-draw {
          0% {
            stroke-dashoffset: 100;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }
        
        .animate-check-draw {
          animation: check-draw 0.5s ease-out 0.3s forwards;
        }
      `}</style>
    </div>
  )
}
