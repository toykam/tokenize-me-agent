"use client";

import React from 'react'
import { cn } from '@/lib/utils'
import { useAuth } from '@/hooks/useAuth'
import { NeynarAuthButton } from '@neynar/react';
import { useProfileProvider } from '@/providers/ProfileProvider';
import { Button } from '../ui/button';
import Link from 'next/link';



export default function AccountHero() {
    const {user, isAuthenticated, loading} = useAuth();
    const {
        balance,
        account,
        isLoading
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
            <p className='text-[16px] font-medium mb-[20px]'>Current Balance</p>

            <div className='flex gap-2 items-center'>
                <p className='text-[24px] font-extrabold'>{balance} ETH</p>
                
                {/* <ArrowUp color='#6552FE' size={10}/>
                <p className='text-[#6552FE] font-bold font-inter'>10.2%</p> */}
            </div>
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
