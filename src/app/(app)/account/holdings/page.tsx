import AccountHeader from '@/components/account/AccountHeader'
import HoldingItemComponent from '@/components/account/HoldingIcon'
import React from 'react'

export default function AllHoldingPage() {
  return (
    <div className='h-full bg-[#070707] py-[24px]'>
        <AccountHeader title='All Holdings'/>


        <div className='mt-[40px] px-[24px]'>

            <div className='flex flex-col gap-[32px]'>
                <HoldingItemComponent />
                <HoldingItemComponent />
                <HoldingItemComponent />
                <HoldingItemComponent />
                <HoldingItemComponent />
                <HoldingItemComponent />
                <HoldingItemComponent />
                <HoldingItemComponent />
                <HoldingItemComponent />
                <HoldingItemComponent />
                <HoldingItemComponent />
                <HoldingItemComponent />
            </div>
        </div>
    </div>
  )
}
