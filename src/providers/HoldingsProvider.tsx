'use client';

import { useAuth } from '@/hooks/useAuth';
import { Token } from '@/lib/types';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';


interface HoldingsContextType {
  holdings: Token[];
  isLoading: boolean;
  error: Error | null;
  refreshHoldings: () => Promise<void>;
}

const HoldingsContext = createContext<HoldingsContextType | undefined>(undefined);

export function useHoldings() {
  const context = useContext(HoldingsContext);
  if (context === undefined) {
    throw new Error('useHoldings must be used within a HoldingsProvider');
  }
  return context;
}

interface HoldingsProviderProps {
  children: ReactNode;
}

export function HoldingsProvider({ children }: HoldingsProviderProps) {
  const [holdings, setHoldings] = useState<Token[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const {
    isAuthenticated
  } = useAuth()

  const refreshHoldings = async () => {
    try {
        if (isAuthenticated) {
            setIsLoading(true);
            setError(null);
            
            // TODO: Implement fetching holdings from your API/blockchain
            // This is a placeholder implementation
            const response = await fetch('/api/holdings');
            if (!response.ok) {
              throw new Error('Failed to fetch holdings');
            }
            const data = await response.json();
            setHoldings(data);
        }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error occurred'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
        refreshHoldings();
    }
  }, [isAuthenticated]);

  const value = {
    holdings,
    isLoading,
    error,
    refreshHoldings
  };

  return (
    <HoldingsContext.Provider value={value}>
      {children}
    </HoldingsContext.Provider>
  );
}
