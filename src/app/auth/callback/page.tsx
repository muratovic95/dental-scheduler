'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createBrowserSupabaseClient } from '@/lib/supabase';

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const handleCallback = async () => {
      const supabase = createBrowserSupabaseClient();
      
      // Try to get the code from the URL
      const code = searchParams.get('code');
      
      if (code) {
        // Exchange the code for a session
        await supabase.auth.exchangeCodeForSession(code);
        
        // Redirect to the dashboard
        router.push('/dashboard');
      } else {
        // No code found, redirect to login
        router.push('/login');
      }
    };
    
    handleCallback();
  }, [router, searchParams]);
  
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Completing authentication...</h1>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
      </div>
    </div>
  );
} 