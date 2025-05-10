"use client"

import React from 'react'
import HoldingItemComponent from '@/components/account/HoldingIcon';
import AccountHeader from '@/components/account/AccountHeader';
import AccountHero from '@/components/account/AccountHero';
import Link from 'next/link';
import { useTokens } from '@/providers/TokensProvider';
import FrameReadyWrapper from '@/components/FrameReadyWrapper';

export default function AccountPage() {

  const {
    tokens
  } = useTokens();
  return (
    <FrameReadyWrapper>
      <div className='h-full'>

        <AccountHeader title='TokenizedProfile' />

        <AccountHero />


        <div className='mt-[40px] px-[24px]'>

          <div className='flex justify-between mb-[32px]'>
            <p className='text-white text-[20px] font-bold'>Tokens</p>

            <Link href={"/tokens"}>
            <p className='underline text-white'>see all</p>
            </Link>
          </div>

          <div className='flex flex-col gap-[32px]'>
            {tokens.length == 0 && <p className='text-white text-center'>No Token have been launched. Tokenize your profile to start earning today.</p>}
            {tokens.map((v) => {
              return <HoldingItemComponent token={v} key={v.address} />;
            })}
          </div>
        </div>

      </div>
    </FrameReadyWrapper>
  )
}
