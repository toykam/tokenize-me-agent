"use client"

import React from 'react'
import { Avatar } from '../ui/avatar'
import { LogOutIcon, Settings } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import "@neynar/react/dist/style.css";


export default function AccountHeader({title = "TokenizedProfile"}: {title: string}) {
    const {isAuthenticated, user, logout} = useAuth();
  return (
    <div className='flex justify-between mb-[16px] px-[24px] sticky top-0 z-10 py-[18px] items-center bg-[#070707]'>
        
        {isAuthenticated && <Avatar>
            <AvatarImage src={`${user?.pfp_url}`} alt={`${user?.display_name} PFP`} />
            <AvatarFallback>{user?.display_name?.substring(0,2)}</AvatarFallback>
        </Avatar>}

        <Link href={"/account"}>
            <h2 className='text-white font-extrabold text-center'>{title}</h2>
        </Link>

        {isAuthenticated && <div className='flex gap-[16px]'>
            <Link href={"/account/settings"}>
                <Settings color='white' />
            </Link>

            <LogOutIcon color='red' onClick={logout} />
        </div>}
    </div>
  )
}
