// Authentication using Supabase

// Authentication using Supabase
import { createBrowserSupabaseClient, createServerSupabaseClient, createAdminClient } from './supabase';
import type { AuthError, Session, User } from '@supabase/supabase-js';

export type AuthUser = User;

// Sign in with email and password
export async function signInWithEmailPassword(email: string, password: string) {
  const supabase = createBrowserSupabaseClient();
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  return { data, error };
}

// Sign in with Google
export async function signInWithGoogle() {
  const supabase = createBrowserSupabaseClient();
  
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || window.location.origin}/auth/callback`,
    },
  });
  
  return { data, error };
}

// Register with email and password
export async function registerWithEmailPassword(
  name: string,
  email: string,
  password: string
) {
  const supabase = createBrowserSupabaseClient();
  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/verify`,
    },
  });
  
  return { data, error };
}

// Sign out
export async function signOut() {
  const supabase = createBrowserSupabaseClient();
  const { error } = await supabase.auth.signOut();
  return { error };
}

// Get current session
export async function getSession(): Promise<Session | null> {
  const supabase = createBrowserSupabaseClient();
  const { data } = await supabase.auth.getSession();
  return data.session;
}

// Get current user
export async function getCurrentUser(): Promise<User | null> {
  const supabase = createBrowserSupabaseClient();
  const { data } = await supabase.auth.getUser();
  return data.user;
}

// Check if user is authenticated
export async function isAuthenticated(): Promise<boolean> {
  const session = await getSession();
  return session !== null;
}

// Password reset request
export async function requestPasswordReset(email: string) {
  const supabase = createBrowserSupabaseClient();
  
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password`,
  });
  
  return { data, error };
}

// Update password
export async function updatePassword(password: string) {
  const supabase = createBrowserSupabaseClient();
  
  const { data, error } = await supabase.auth.updateUser({
    password,
  });
  
  return { data, error };
}

export async function signUp(email: string, password: string) {
  const supabase = createBrowserSupabaseClient();
  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || window.location.origin}/auth/callback`,
    },
  });
  
  return { data, error };
}

export async function signIn(email: string, password: string) {
  const supabase = createBrowserSupabaseClient();
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  return { data, error };
}

export async function resetPassword(email: string) {
  const supabase = createBrowserSupabaseClient();
  
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || window.location.origin}/auth/reset-password`,
  });
  
  return { data, error };
}

export async function getUser() {
  const supabase = createBrowserSupabaseClient();
  const { data } = await supabase.auth.getUser();
  return data.user;
}

export async function getUserOnServer() {
  const supabase = createServerSupabaseClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function updateUserProfile(updates: { 
  email?: string;
  data?: {
    full_name?: string;
    avatar_url?: string;
    [key: string]: any;
  }
}) {
  const supabase = createBrowserSupabaseClient();
  
  const { data, error } = await supabase.auth.updateUser(updates);
  
  return { data, error };
} 