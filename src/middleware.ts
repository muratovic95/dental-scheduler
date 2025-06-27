import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Create a Supabase client configured to use cookies
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          // This is used for setting cookies during redirects
          request.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: any) {
          // This is used for removing cookies during redirects
          request.cookies.set({
            name,
            value: '',
            ...options,
          });
        },
      },
    }
  );

  // Refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
  const { data: { session } } = await supabase.auth.getSession();

  // Protected routes - redirect to login if not authenticated
  const protectedRoutes = ['/admin', '/profile', '/dashboard'];
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  );

  // Auth routes - redirect to dashboard if already authenticated
  const authRoutes = ['/login', '/register', '/auth/forgot-password', '/auth/reset-password'];
  const isAuthRoute = authRoutes.some(route => 
    request.nextUrl.pathname === route
  );

  // Handle protected routes
  if (isProtectedRoute && !session) {
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Handle auth routes
  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Update response headers if the session was refreshed
  const response = NextResponse.next();
  
  // Add the user object to the request headers for server components
  if (session) {
    response.headers.set('x-user-id', session.user.id);
    response.headers.set('x-user-email', session.user.email || '');
    response.headers.set('x-user-role', session.user.role || 'user');
  }

  return response;
}

export const config = {
  matcher: [
    // Protected routes
    '/admin/:path*',
    '/profile',
    '/dashboard',
    // Auth routes
    '/login',
    '/register',
    '/auth/forgot-password',
    '/auth/reset-password',
  ],
}; 