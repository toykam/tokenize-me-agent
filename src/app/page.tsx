"use client"

import FrameReadyWrapper from '@/components/FrameReadyWrapper'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function SplashScreenPage() {
  return (
    <FrameReadyWrapper>
      <h3 className='text-[48px] text-center font-extrabold text-white mb-2 py-[18px]'>TokenizeMe</h3>
      <div className='md:h-max px-[24px] flex flex-col justify-between md:justify-center md:flex-row items-center md:gap-10'>
        <div>
          <img alt='' className='object-cover' src={"/splash-image.png"} />
        </div>


        <div className='flex flex-col gap-2'>
          <p className='text-white text-[24px] font-medium text-center mb-3'>
              Jump start your crypto journey by trading tokenized profile.<br></br>
              <span className='font-extrabold text-[#6552FE]'>Earn</span> from your <span className='font-extrabold text-[#6552FE]'>social engagements</span>.
        </p>

          {/* <NeynarAuthButton 
            variant={SIWN_variant.WARPCAST}
            
            customLogoUrl='/favicon.png' label='Login to TokenizeMe' className='bg-red-500 w-auto mx-[24px]'>
            Get Started
          </NeynarAuthButton> */}

          <Link href={"/account"} className='cursor-pointer'>
            <Button size={"lg"} className='w-full'>Get Started</Button>
          </Link>
        </div>


      </div>
    </FrameReadyWrapper>
  )
}
