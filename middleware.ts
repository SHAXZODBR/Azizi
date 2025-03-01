import { type NextRequest, NextResponse } from "next/server";

// Define protected routes that require authentication
const adminRoutes = ["/admin", "/admin/archive"];
const protectedRoutes = ["/archive"];

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Get the session from the cookie
  const sessionCookie = req.cookies.get("session")?.value;

  if (!sessionCookie) {
    // If no session and trying to access protected route, redirect to login
    if (adminRoutes.some((route) => pathname.startsWith(route))) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  }

  // Parse the session
  const session = JSON.parse(sessionCookie);

  // Check if user is trying to access admin routes without admin role
  if (
    adminRoutes.some((route) => pathname.startsWith(route)) &&
    session.role !== "admin"
  ) {
    return NextResponse.redirect(new URL("/archive", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/archive/:path*", "/login", "/register"],
};
