'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '../../../lib/supabase';

export default function VerifyPage() {
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Get the token and type from the URL
        const token = searchParams.get('token');
        const type = searchParams.get('type');

        if (!token || type !== 'email_change' && type !== 'signup') {
          setVerificationStatus('error');
          setErrorMessage('Invalid verification link');
          return;
        }

        // Verify the email
        if (type === 'signup') {
          // Handle signup verification
          const { error } = await supabase.auth.verifyOtp({
            token_hash: token,
            type: 'signup',
          });

          if (error) {
            setVerificationStatus('error');
            setErrorMessage(error.message);
            return;
          }
        } else if (type === 'email_change') {
          // Handle email change verification
          const { error } = await supabase.auth.verifyOtp({
            token_hash: token,
            type: 'email_change',
          });

          if (error) {
            setVerificationStatus('error');
            setErrorMessage(error.message);
            return;
          }
        }

        setVerificationStatus('success');
        
        // Redirect to login after 3 seconds
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      } catch (error) {
        console.error('Verification error:', error);
        setVerificationStatus('error');
        setErrorMessage('An unexpected error occurred');
      }
    };

    verifyEmail();
  }, [searchParams, router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full max-w-md space-y-8 text-center">
        {verificationStatus === 'loading' && (
          <>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Verifying your email...
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          </>
        )}

        {verificationStatus === 'success' && (
          <>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Email verified successfully!
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              You will be redirected to the login page in a few seconds.
            </p>
            <div className="mt-4">
              <Link href="/login" className="text-blue-600 hover:text-blue-500">
                Click here if you are not redirected automatically
              </Link>
            </div>
          </>
        )}

        {verificationStatus === 'error' && (
          <>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Verification failed
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {errorMessage || 'There was a problem verifying your email.'}
            </p>
            <div className="mt-4">
              <Link href="/login" className="text-blue-600 hover:text-blue-500">
                Return to login
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 