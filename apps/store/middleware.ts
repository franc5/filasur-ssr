// Based on https://supabase.com/docs/guides/auth/server-side/nextjs
import { NextResponse, type NextRequest } from 'next/server'

import { parseCategoryUrlPath } from 'utils/categories/parseCategoryUrlPath'
import { updateSession } from 'utils/supabase/middleware'

import { Urls } from 'consts/urls'

export async function middleware(request: NextRequest) {
  const { origin, pathname, searchParams } = request.nextUrl

  const { categoryId, page } = parseCategoryUrlPath(pathname)
  if (categoryId !== undefined && page === undefined) {
    return NextResponse.redirect(`${origin}${Urls.Category}/${categoryId}/page/1`)
  }

  const keywords = searchParams.get('keywords')
  if (!!keywords && pathname.startsWith(Urls.Search)) {
    return NextResponse.redirect(`${origin}${Urls.Search}/${keywords}/page/1`)
  }

  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
