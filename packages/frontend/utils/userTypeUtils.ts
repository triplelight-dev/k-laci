import { UserType } from '@/features/signup/hooks/useSignupFlow';

export const getUserTypeFromEmail = (email: string): UserType => {
  const domain = email.split('@')[1]?.toLowerCase();
  
  if (!domain) return 'GENERAL';
  
  if (domain.endsWith('korea.kr') || domain.endsWith('go.kr')) {
    return 'GOV';
  } else if (domain.endsWith('triplelight.co')) {
    return 'EDU';
  } else {
    return 'GENERAL';
  }
}; 