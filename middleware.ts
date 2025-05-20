import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res: response })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If no session and trying to access protected routes
  if (!session) {
    const protectedRoutes = ["/admin", "/agent", "/customer"]
    const isProtectedRoute = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

    if (isProtectedRoute) {
      const redirectUrl = new URL("/login", request.url)
      return NextResponse.redirect(redirectUrl)
    }
  }

  // If session exists, check role-based access
  if (session) {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    // Get user role from database
    const { data: userData } = await supabase.from("deli_users").select("role").eq("id", user?.id).single()

    const role = userData?.role

    // Redirect to login page if already logged in
    if (request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/register") {
      if (role === "admin") return NextResponse.redirect(new URL("/admin/dashboard", request.url))
      if (role === "agent") return NextResponse.redirect(new URL("/agent/dashboard", request.url))
      if (role === "customer") return NextResponse.redirect(new URL("/customer/dashboard", request.url))
    }

    // Role-based access control
    if (request.nextUrl.pathname.startsWith("/admin") && role !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", request.url))
    }

    if (request.nextUrl.pathname.startsWith("/agent") && role !== "agent") {
      return NextResponse.redirect(new URL("/unauthorized", request.url))
    }

    if (request.nextUrl.pathname.startsWith("/customer") && role !== "customer") {
      return NextResponse.redirect(new URL("/unauthorized", request.url))
    }
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
}
