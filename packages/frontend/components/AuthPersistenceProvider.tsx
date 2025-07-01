'use client';

import { useAuthPersistence } from '@/hooks/useAuthPersistence';

export default function AuthPersistenceProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  useAuthPersistence();
  return <>{children}</>;
} 