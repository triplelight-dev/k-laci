import { SupabaseClient } from '@supabase/supabase-js';

/**
 * Supabase client type with auth methods
 */
export type SupabaseClientWithAuth = SupabaseClient & {
  auth: {
    getUser: (token: string) => Promise<{
      data: {
        user: {
          id: string;
          email: string;
          role?: string;
          created_at?: string;
          updated_at?: string;
        } | null;
      };
      error: Error | null;
    }>;
    admin: {
      deleteUser: (userId: string) => Promise<{
        data: { user: null };
        error: Error | null;
      }>;
    };
  };
};

/**
 * Supabase service configuration
 */
export interface SupabaseConfig {
  url: string;
  anonKey: string;
}

/**
 * Supabase service response wrapper
 */
export interface SupabaseResponse<T> {
  data: T | null;
  error: Error | null;
}
