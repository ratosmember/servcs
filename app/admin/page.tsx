"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Trash2, Pencil, LogOut, Phone, Mail, Calendar, FileText } from "lucide-react"

interface QuoteRequest {
  id: string
  name: string
  email: string
  phone: string
  service: string
  message: string | null
  status: string
  created_at: string
  updated_at: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [loginError, setLoginError] = useState("")
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [quotes, setQuotes] = useState<QuoteRequest[]>([])
  const [isLoadingQuotes, setIsLoadingQuotes] = useState(false)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/admin/verify")
      if (response.ok) {
        setIsAuthenticated(true)
        fetchQuotes()
      }
    } catch {
      // Not authenticated
    } finally {
      setIsLoading(false)
    }
  }

  const fetchQuotes = async () => {
    setIsLoadingQuotes(true)
    try {
      const response = await fetch("/api/admin/quotes")
      if (response.ok) {
        const data = await response.json()
        setQuotes(data.quotes || [])
      }
    } catch (err) {
      console.error("Failed to fetch quotes:", err)
    } finally {
      setIsLoadingQuotes(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggingIn(true)
    setLoginError("")

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      })

      if (response.ok) {
        setIsAuthenticated(true)
        fetchQuotes()
      } else {
        const data = await response.json()
        setLoginError(data.error || "Login failed")
      }
    } catch {
      setLoginError("Something went wrong")
    } finally {
      setIsLoggingIn(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this request?")) return

    try {
      const response = await fetch(`/api/admin/quotes?id=${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setQuotes(quotes.filter((q) => q.id !== id))
      }
    } catch (err) {
      console.error("Failed to delete:", err)
    }
  }

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const response = await fetch("/api/admin/quotes", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      })

      if (response.ok) {
        setQuotes(quotes.map((q) => (q.id === id ? { ...q, status: newStatus } : q)))
      }
    } catch (err) {
      console.error("Failed to update status:", err)
    }
  }

  const handleLogout = () => {
    document.cookie = "admin_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    setIsAuthenticated(false)
    setQuotes([])
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 border-green-500 border-l-4"
      case "rejected":
        return "bg-red-100 border-red-500 border-l-4"
      default:
        return "bg-background border-l-4 border-primary"
    }
  }

  const getServiceName = (service: string) => {
    const services: Record<string, string> = {
      "deep-clean": "Deep Cleaning",
      residential: "Residential Cleaning",
      commercial: "Commercial Cleaning",
      "move-in-out": "Move In/Out Cleaning",
    }
    return services[service] || service
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Admin Login</h1>
            <p className="text-muted-foreground">Sign in to manage quote requests</p>
          </div>

          {loginError && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                required
                disabled={isLoggingIn}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
                disabled={isLoggingIn}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoggingIn}>
              {isLoggingIn ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Twin Sisters Cleaning - Admin</h1>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Quote Requests</h2>
            <p className="text-muted-foreground">Manage and respond to cleaning quote submissions</p>
          </div>
          <Button variant="outline" onClick={fetchQuotes} disabled={isLoadingQuotes}>
            {isLoadingQuotes ? <Loader2 className="h-4 w-4 animate-spin" /> : "Refresh"}
          </Button>
        </div>

        {isLoadingQuotes ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : quotes.length === 0 ? (
          <Card className="p-12 text-center">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Requests Yet</h3>
            <p className="text-muted-foreground">Quote requests will appear here when customers submit them.</p>
          </Card>
        ) : (
          <div className="grid gap-4">
            {quotes.map((quote) => (
              <Card key={quote.id} className={`p-6 ${getStatusColor(quote.status)}`}>
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold">{quote.name}</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {getServiceName(quote.service)}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                          quote.status === "approved"
                            ? "bg-green-500 text-white"
                            : quote.status === "rejected"
                              ? "bg-red-500 text-white"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {quote.status}
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <a href={`mailto:${quote.email}`} className="hover:text-primary transition-colors">
                          {quote.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <a href={`tel:${quote.phone}`} className="hover:text-primary transition-colors">
                          {quote.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {formatDate(quote.created_at)}
                      </div>
                    </div>

                    {quote.message && (
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground whitespace-pre-wrap">{quote.message}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 lg:flex-col lg:items-end">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className={`${quote.status === "approved" ? "bg-green-100 border-green-500" : ""}`}
                        onClick={() => handleStatusChange(quote.id, quote.status === "approved" ? "pending" : "approved")}
                        title="Mark as Approved"
                      >
                        <Pencil className="h-4 w-4 text-green-600" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className={`${quote.status === "rejected" ? "bg-red-100 border-red-500" : ""}`}
                        onClick={() => handleStatusChange(quote.id, quote.status === "rejected" ? "pending" : "rejected")}
                        title="Mark as Rejected"
                      >
                        <Pencil className="h-4 w-4 text-red-600" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-destructive/10 hover:border-destructive bg-transparent"
                        onClick={() => handleDelete(quote.id)}
                        title="Delete Request"
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
