import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Refresh session
  const { data: { user } } = await supabase.auth.getUser()

  const pathname = request.nextUrl.pathname
  const isLoginPage = pathname === '/crypto-mondays-admin'
  const isAdminSubpage = pathname.startsWith('/crypto-mondays-admin/')

  // If on admin subpage and not authenticated, redirect to login
  if (isAdminSubpage && !user) {
    const url = request.nextUrl.clone()
    url.pathname = '/crypto-mondays-admin'
    return NextResponse.redirect(url)
  }

  // If authenticated and on login page, redirect to dashboard
  if (isLoginPage && user) {
    const url = request.nextUrl.clone()
    url.pathname = '/crypto-mondays-admin/dashboard'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}

export const config = {
  matcher: ['/crypto-mondays-admin/:path*'],
}
