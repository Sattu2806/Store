export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/','/workaccordian/:path*','/databased/:path*','/item/:path*','/variants/:path*','/work-images/:path*'
  ],
}