"use client"

import AccountHeader from '@/components/account/AccountHeader'
import FrameReadyWrapper from '@/components/FrameReadyWrapper'
import { useTokens } from '@/providers/TokensProvider'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function AllTokenPage() {
  const {
    token,
    isLoadingTokenDetail,
    setTokenId
  } = useTokens()

  const { address } = useParams();

  
  useEffect(() => {
    if (address != null) {
        if (typeof address === 'string') {
            setTokenId(address);
        }
    }
  }, [address]);
  return (
    <FrameReadyWrapper>
      <div className='h-full'>
          <AccountHeader title={isLoadingTokenDetail ? "..." : token?.name ?? ""} />


          <div className='mt-[40px] px-[24px]'>

              <div className='flex flex-col gap-[32px]'>
                
              </div>
          </div>
      </div>
    </FrameReadyWrapper>
  )
}
