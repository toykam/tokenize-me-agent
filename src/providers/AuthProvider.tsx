'use client';

import { useAuth } from '@/hooks/useAuth';
import { redirect, usePathname } from 'next/navigation';
import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a TokensProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { isAuthenticated, loading } = useAuth();
  const pathname = usePathname();

  // Define paths that don't require authentication
  const unAuthorizedPaths = ['/splash', '/login', '/signup']; // Add other public routes as needed

  useEffect(() => {
    // Skip redirects while loading
    if (loading) return;

    // Redirect unauthenticated users to /splash if they're on a protected route
    if (!isAuthenticated && !unAuthorizedPaths.includes(pathname)) {
      redirect('/splash');
    }

    // Redirect authenticated users from /splash to /account
    if (isAuthenticated && pathname === '/splash') {
      redirect('/account');
    }
  }, [isAuthenticated, loading, pathname]); // Removed 'user' from dependencies

  const value = {
    // Add values like isAuthenticated or user if needed
    isAuthenticated: isAuthenticated
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}