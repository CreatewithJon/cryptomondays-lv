import { NextResponse, type NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const isLoginPage = pathname === '/crypto-mondays-admin'
  const isAdminSubpage = pathname.startsWith('/crypto-mondays-admin/')

  const auth = request.cookies.get('cm-admin-auth')
  const isAuthenticated = auth?.value === process.env.CM_ADMIN_PASSWORD

  // Unauthenticated on a subpage → redirect to login
  if (isAdminSubpage && !isAuthenticated) {
    const url = request.nextUrl.clone()
    url.pathname = '/crypto-mondays-admin'
    return NextResponse.redirect(url)
  }

  // Authenticated on login page → go straight to dashboard
  if (isLoginPage && isAuthenticated) {
    const url = request.nextUrl.clone()
    url.pathname = '/crypto-mondays-admin/dashboard'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/crypto-mondays-admin', '/crypto-mondays-admin/:path*'],
}
