import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET() {
  try {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get("admin_session")?.value
    
    if (!sessionToken) {
      return NextResponse.json({ authenticated: false }, { status: 401 })
    }
    
    const supabase = await createClient()
    
    const { data: session } = await supabase
      .from("admin_sessions")
      .select("*")
      .eq("session_token", sessionToken)
      .single()
    
    if (!session) {
      return NextResponse.json({ authenticated: false }, { status: 401 })
    }
    
    return NextResponse.json({ authenticated: true })
  } catch (error) {
    console.error("Verify error:", error)
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }
}
