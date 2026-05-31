import type { User } from "@supabase/supabase-js";

export type AuthUser = User;

export type AuthState = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};
