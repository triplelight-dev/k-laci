'use client';

import { useDevAuth } from '@/hooks/useDevAuth';

export default function DevAuthProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  useDevAuth();
  return <>{children}</>;
} 