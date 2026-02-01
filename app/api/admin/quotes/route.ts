import { createClient } from "@/lib/supabase/server"
import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

async function verifyAdmin() {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get("admin_session")?.value
  
  if (!sessionToken) return false
  
  const supabase = await createClient()
  const { data: session } = await supabase
    .from("admin_sessions")
    .select("*")
    .eq("session_token", sessionToken)
    .single()
  
  return !!session
}

export async function GET() {
  try {
    const isAdmin = await verifyAdmin()
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    const supabase = await createClient()
    
    const { data, error } = await supabase
      .from("quote_requests")
      .select("*")
      .order("created_at", { ascending: false })
    
    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to fetch quotes" }, { status: 500 })
    }
    
    return NextResponse.json({ quotes: data })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const isAdmin = await verifyAdmin()
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    
    if (!id) {
      return NextResponse.json({ error: "Missing quote ID" }, { status: 400 })
    }
    
    const supabase = await createClient()
    
    const { error } = await supabase
      .from("quote_requests")
      .delete()
      .eq("id", id)
    
    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to delete quote" }, { status: 500 })
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const isAdmin = await verifyAdmin()
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    const body = await request.json()
    const { id, status } = body
    
    if (!id || !status) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }
    
    const supabase = await createClient()
    
    const { error } = await supabase
      .from("quote_requests")
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", id)
    
    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to update quote" }, { status: 500 })
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
