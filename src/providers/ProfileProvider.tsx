'use client';

import { User } from '@/generated/prisma';
import { useAuth } from '@/hooks/useAuth';
import axios from "axios";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';


interface ProfileProviderContextType {
  isLoading: boolean;
  account: any;
  error: any;
  refreshUser: () => Promise<void>;
  balance: string,
  updateBuyAmount: (likeAmount: number) => Promise<void>;
  likeAmount: number,
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
  const [likeAmount, setLikeAmount] = useState(0);
  const {
    isAuthenticated, user
  } = useAuth()

  const fetchAccount = async () => {
    try {
        if (isAuthenticated) {
          setIsLoading(true);
          setError(null);
          const response = await axios.post("/api/account/profile", {
            'fid': user?.fid,
            'display_name': user?.display_name,
            'username': user?.username,
            'pfp': user?.profileImageUrl
          });
          const usr = response.data['user'];
          setAccount(response.data['user'] as User);
          setEthBalance(response.data['balance']);
          setLikeAmount(usr.buyAmount.likeAmount ?? 0)
        }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error occurred'));
    } finally {
      setIsLoading(false);
    }
  };

  const updateBuyAmount = async (likeAmount: number) => {
    try {
      if (isAuthenticated) {
        toast.info("Updating buy amount...")
        setIsLoading(true);
        setError(null);
        const response = await axios.post("/api/account/update-buy-amount", {
          'fid': user?.fid,
          'like_amount': likeAmount
        });
        toast.success("Buy amount updated successfully")
        setAccount(response.data['user'] as User);
      }
    } catch (err) {
      toast.success("Unable to update buy amount.");
      setError(err instanceof Error ? err : new Error('Unknown error occurred'));
    } finally {
      setIsLoading(false);
    }
  }

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
    balance: ethBalance,
    updateBuyAmount,
    likeAmount
  };

  return (
    <ProfileProviderContext.Provider value={value}>
      {children}
    </ProfileProviderContext.Provider>
  );
}
