import { createClient } from "@/lib/supabase/server"
import { NextRequest, NextResponse } from "next/server"

const RATE_LIMIT_WINDOW = 10 * 60 * 1000 // 10 minutes in milliseconds
const MAX_REQUESTS = 3

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    
    // Get client IP for rate limiting
    const forwarded = request.headers.get("x-forwarded-for")
    const ip = forwarded ? forwarded.split(",")[0] : request.headers.get("x-real-ip") || "unknown"
    
    // Check rate limit
    const now = new Date()
    const windowStart = new Date(now.getTime() - RATE_LIMIT_WINDOW)
    
    const { data: rateLimit } = await supabase
      .from("rate_limits")
      .select("*")
      .eq("ip_address", ip)
      .single()
    
    if (rateLimit) {
      const rateLimitWindowStart = new Date(rateLimit.window_start)
      
      if (rateLimitWindowStart > windowStart) {
        // Within the window
        if (rateLimit.request_count >= MAX_REQUESTS) {
          return NextResponse.json(
            { error: "Rate limit exceeded. Please try again in a few minutes." },
            { status: 429 }
          )
        }
        
        // Update count
        await supabase
          .from("rate_limits")
          .update({ request_count: rateLimit.request_count + 1 })
          .eq("ip_address", ip)
      } else {
        // Reset window
        await supabase
          .from("rate_limits")
          .update({ request_count: 1, window_start: now.toISOString() })
          .eq("ip_address", ip)
      }
    } else {
      // Create new rate limit record
      await supabase
        .from("rate_limits")
        .insert({ ip_address: ip, request_count: 1, window_start: now.toISOString() })
    }
    
    // Parse request body
    const body = await request.json()
    const { name, email, phone, service, message } = body
    
    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }
    
    // Insert quote request
    const { data, error } = await supabase
      .from("quote_requests")
      .insert({
        name,
        email,
        phone,
        service,
        message: message || null,
        status: "pending"
      })
      .select()
      .single()
    
    if (error) {
      console.error("Database error:", error)
      return NextResponse.json(
        { error: "Failed to submit quote request" },
        { status: 500 }
      )
    }
    
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
