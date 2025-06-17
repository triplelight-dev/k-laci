import { StateCreator } from 'zustand';
import { AuthState } from '../types/auth';

export interface AuthSlice {
  auth: AuthState;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  auth: initialState,
  
  setIsLoggedIn: (isLoggedIn: boolean) => {
    set((state) => ({
      auth: {
        ...state.auth,
        isLoggedIn,
      },
    }));
  },
}); 