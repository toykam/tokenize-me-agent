"use client"

import AccountHeader from '@/components/account/AccountHeader'
import HoldingItemComponent from '@/components/account/HoldingIcon';
import { useTokens } from '@/providers/TokensProvider'
import React from 'react'

export default function AllTokenPage() {


  const { tokens } = useTokens();
  
  return (
    <div>

      <div className='h-full'>
          <AccountHeader title='All Tokenized Profiles'/>


          <div className='mt-[40px] px-[24px]'>

            <div className='flex flex-col gap-[32px]'>
                {tokens.length == 0 && <p className='text-white text-center'>No Token have been launched. Tokenize your profile to start earning today.</p>}
                {tokens.map((v) => {
                    return <HoldingItemComponent token={v} key={v.address} />;
                })}
            </div>
        </div>
      </div>
    </div>
  )
}
