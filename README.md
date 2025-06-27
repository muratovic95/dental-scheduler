# Supabase Authentication for Dental Scheduler

This repository contains the Supabase authentication integration for the Dental Scheduler application.

## Features

- Email/password authentication
- Email verification
- Password reset functionality
- Google OAuth integration
- User profile management

## Files

- `src/lib/auth.ts`: Supabase authentication functions
- `src/lib/supabase.ts`: Supabase client setup
- `src/middleware.ts`: Middleware for protected routes
- `src/components/AuthProvider.tsx`: Context provider for auth state
- `src/app/auth/verify/page.tsx`: Email verification page
- `src/app/auth/forgot-password/page.tsx`: Password reset request page
- `src/app/auth/reset-password/page.tsx`: Password reset page
- `src/app/auth/callback/page.tsx`: OAuth callback handler
- `src/app/login/auth.ts`: Local auth file for login page
- `src/app/profile/page.tsx`: User profile management

## Setup

1. Install dependencies:
```bash
npm install @supabase/supabase-js @supabase/ssr
```

2. Set up environment variables:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
NEXT_PUBLIC_SITE_URL=your-site-url
```

3. Import and use the authentication functions in your application. 