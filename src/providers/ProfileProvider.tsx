'use client';

import { User } from '@/generated/prisma';
import { useAuth } from '@/hooks/useAuth';
import { setBalance } from '@nomicfoundation/hardhat-toolbox/network-helpers';
import axios from "axios";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';


interface ProfileProviderContextType {
  isLoading: boolean;
  account: any;
  error: any;
  refreshUser: () => Promise<void>;
  balance: string
}

const ProfileProviderContext = createContext<ProfileProviderContextType | undefined>(undefined);

export function useProfileProvider() {
  const context = useContext(ProfileProviderContext);
  if (context === undefined) {
    throw new Error('useHoldings must be used within a HoldingsProvider');
  }
  return context;
}

interface HoldingsProviderProps {
  children: ReactNode;
}

export function ProfileProvider({ children }: HoldingsProviderProps) {
  const [account, setAccount] = useState<User | null | undefined>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [ethBalance, setEthBalance] = useState("0");
  const {
    isAuthenticated, loading, user
  } = useAuth()

  const fetchAccount = async () => {
    try {
        if (isAuthenticated) {
          setIsLoading(true);
          setError(null);
          const response = await axios.post("/api/account/profile", {
            'fid': user?.fid,
            'display_name': user?.display_name,
            'username': user?.username
          });

          setAccount(response.data['user'] as User);
          setEthBalance(response.data['balance']);
        }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error occurred'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAccount();
    }
  }, [isAuthenticated]);

  const value = {
    account,
    isLoading,
    error,
    refreshUser: fetchAccount,
    balance: ethBalance
  };

  return (
    <ProfileProviderContext.Provider value={value}>
      {children}
    </ProfileProviderContext.Provider>
  );
}
