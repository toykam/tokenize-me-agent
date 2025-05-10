"use client"

import React from 'react'
import { Avatar } from '../ui/avatar'
import { LogOutIcon, Settings } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import "@neynar/react/dist/style.css";
import { usePathname, useRouter } from 'next/navigation'


export default function AccountHeader({title = "TokenizedProfile"}: {title: string}) {
    const {isAuthenticated, user, logout, isNeynar} = useAuth();

    const router = useRouter();
    const pathname = usePathname();
  
    const showBackButton = pathname !== '/account';

    
  return (
    <div className="flex justify-between mb-[16px] px-[24px] sticky top-0 z-10 py-[18px] items-center bg-[#070707]">
    {isAuthenticated && (
      <div className='flex gap-2'>
        {showBackButton && (
          <button
            onClick={() => router.back()}
            className="text-white hover:text-[#ff6b6b] transition-colors duration-200 mr-[16px]"
          >
            ← Back
          </button>
        )}
        {!showBackButton && <Avatar>
          <AvatarImage src={`${user?.profileImageUrl}`} alt={`${user?.displayName} PFP`} />
          <AvatarFallback>{user?.displayName?.substring(0, 2)}</AvatarFallback>
        </Avatar>}
      </div>
    )}

    <Link href="/account">
      <h2 className="text-white font-extrabold text-center">{title}</h2>
    </Link>

    {isAuthenticated && (
      <div className="flex gap-[16px]">
        <Link href="/account/settings">
          <Settings color="white" />
        </Link>
        {isNeynar && <LogOutIcon className='text-red-500' onClick={logout} />}
      </div>
    )}
  </div>
  )
}
