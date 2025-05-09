'use client';

import { useAuth } from '@/hooks/useAuth';
import { Token } from '@/lib/types';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from "sonner"


interface TokensContextType {
  tokens: Token[];
  token: Token | null;
  isLoading: boolean;
  isLoadingTokenDetail: boolean;
  error: Error | null;
  refreshTokens: () => Promise<void>;
  setTokenId: (tokenId: string) => void;
}

const TokensContext = createContext<TokensContextType | undefined>(undefined);

export function useTokens() {
  const context = useContext(TokensContext);
  if (context === undefined) {
    throw new Error('useTokens must be used within a TokensProvider');
  }
  return context;
}

interface TokensProviderProps {
  children: ReactNode;
}

export function TokensProvider({ children }: TokensProviderProps) {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [token, setToken] = useState<Token | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingTokenDetail, setIsLoadingTokenDetail] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [tokenId, setTokenId] = useState<string | null>(null);


  const {
    isAuthenticated
  } = useAuth()

  const refreshTokens = async () => {
    try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch('/api/tokens');
        if (!response.ok) {
          throw new Error('Failed to fetch tokens');
        }
        const data = await response.json();
        setTokens(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error occurred'));
    } finally {
      setIsLoading(false);
    }
  };

  const loadTokenDetail = async () => {
    try {
        setIsLoadingTokenDetail(true)
        console.log("Wanting to load token detail");
        const response = await fetch("/api/tokens/"+tokenId);
        if (!response.ok) {
            throw new Error('Failed to fetch tokens');
        }
        const data = await response.json();
        setToken(data);
    } catch (err) {

      toast.error(err instanceof Error ? err.message : ('Unknown error occurred'));
    } finally {
      setIsLoadingTokenDetail(false);
    }
    
  }

  useEffect(() => {
    if (isAuthenticated) {
        refreshTokens();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated && tokenId != null) {
        loadTokenDetail();
    }
  }, [isAuthenticated, tokenId]);

  const value = {
    tokens,
    isLoading,
    error,
    refreshTokens,
    token,
    setTokenId,
    isLoadingTokenDetail
  };

  return (
    <TokensContext.Provider value={value}>
      {children}
    </TokensContext.Provider>
  );
}
