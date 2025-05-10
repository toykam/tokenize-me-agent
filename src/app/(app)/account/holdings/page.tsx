"use client"

import AccountHeader from '@/components/account/AccountHeader'
import HoldingItemComponent from '@/components/account/HoldingIcon'
import FrameReadyWrapper from '@/components/FrameReadyWrapper'
import { useHoldings } from '@/providers/HoldingsProvider'
import React from 'react'

export default function AllHoldingPage() {
  const {
    holdings
  } = useHoldings()
  return (
    <FrameReadyWrapper>
      <div className='h-full'>
          <AccountHeader title='All Holdings'/>


          <div className='mt-[40px] px-[24px]'>

              <div className='flex flex-col gap-[32px]'>
                  {holdings.length == 0 && <p className='text-white text-center'>No Token have been launched. Tokenize your profile to start earning today.</p>}
                  {holdings.map((v) => {
                    return <HoldingItemComponent token={v} key={v.address} />;
                  })}
              </div>
          </div>
      </div>
    </FrameReadyWrapper>
  )
}
