export interface UserProfile {
  name: string;
  email: string;
  organization?: string;
  interest_region_id?: number;
  user_type: string;
}

export interface User {
  user_id: string;
  email: string;
  profile: UserProfile;
}

export interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  access_token: string | null;
} 