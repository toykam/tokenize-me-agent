"use client";

import React from 'react'
import { cn, formatCurrency } from '@/lib/utils'
import { useAuth } from '@/hooks/useAuth'
import { NeynarAuthButton } from '@neynar/react';
import { useProfileProvider } from '@/providers/ProfileProvider';
import { Button } from '../ui/button';
import Link from 'next/link';
import { RefreshCwIcon } from 'lucide-react';



export default function AccountHero() {
    const {user, isAuthenticated, loading} = useAuth();
    const {
        balance,
        account,
        isLoading,
        refreshUser
    } = useProfileProvider()

    const tokenizeMeCast = "Hey @tokenizeme, Put me onchain.";
  return (
    <>
        {!loading && isAuthenticated && <div className="bg-[url(/dashboard-hero-bg.png)] bg-cover w-full px-[24px]">
    
            <p className='text-white text-[24px] font-bold mb-2'>Hello {user?.displayName}</p>
    
            <div className={cn(
                'rounded-2xl px-[20px] py-[12px] h-min-[110px] w-full',
                'bg-gradient-to-tr from-[#93C9F2] via-[#FFDDA8] to-[#B0337A]',
            )}>
                <p className='text-[16px] font-medium mb-[10px]'>Current Balance</p>

                <div className='flex gap-2 items-center'>
                    <p className='text-[clamp(18px,1vw,24px)] font-extrabold'>{(balance)} ETH</p>
                </div>

                <p className='text-black cursor-pointer flex flex-row gap-1 items-center' onClick={refreshUser}>
                    {isLoading && <RefreshCwIcon width={10} height={10} />}
                    refresh
                </p>
            </div>
    
            <div className='flex w-full flex-col justify-items-stretch items-stretch mt-[18px] gap-[16px]'>
                {/* <Button>Deposit</Button>
                <Button variant={"outline"}>Withdraw</Button> */}
                {!isLoading && <>
                    {account['token'] == null && <Link target='_blank' className='w-screen' href={`https://warpcast.com/~/compose?text=${encodeURIComponent(tokenizeMeCast)}`}>
                        <Button variant={"outline"}>Tokenize My Profile</Button>
                    </Link>}
                </>}
            </div>
    
        </div>}
        {!loading && !isAuthenticated && <NeynarAuthButton className='bg-red-500 w-auto mx-[24px]'>Login</NeynarAuthButton>}
        {loading && <p className='text-center text-white'>Please wait...</p>}
    </>
  )
}
