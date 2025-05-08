import React from 'react'
import HoldingItemComponent from '@/components/account/HoldingIcon';
import AccountHeader from '@/components/account/AccountHeader';
import AccountHero from '@/components/account/AccountHero';
import Link from 'next/link';

export default function AccountPage() {

  return (
    <div className='h-full'>

      <AccountHeader title='TokenizedProfile' />

      <AccountHero />


      <div className='mt-[40px] px-[24px]'>

        <div className='flex justify-between mb-[32px]'>
          <p className='text-white text-[20px] font-bold'>Holdings</p>

          <Link href={"/account/holdings"}>
          <p className='underline text-white'>see all</p>
          </Link>
        </div>

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
