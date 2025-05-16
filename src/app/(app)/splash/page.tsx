"use client"

import FrameReadyWrapper from '@/components/FrameReadyWrapper'
import { NeynarAuthButton } from '@neynar/react'
import React from 'react'

export default function SplashScreenPage() {
  return (
    <FrameReadyWrapper>
      <h3 className='text-[48px] md:text-center font-extrabold text-white mb-10 p-[24px]'>Tokenized Profile</h3>
      <div className='h-screen md:h-max px-[24px] py-[24px] flex flex-col justify-between md:justify-center md:flex-row items-center md:gap-10'>
          <div>
            <img alt='' className='object-cover h-fit md:h-[500px] md:w-[500px] bg-center' src={"/splash-image.png"} />
          </div>


          <div className='flex flex-col gap-4'>
            <p className='text-white text-[24px] font-medium text-center'>
                Jump start your crypto journey by trading tokenized profile.<br></br>
                <span className='font-extrabold text-[#6552FE]'>Earn</span> from your <span className='font-extrabold text-[#6552FE]'>social engagements</span>.
            </p>

            {/* <Link href={"/account"}>
                <Button
                size={"lg"}
                className='w-full py-[24px] text-[18px] font-bold'
                >
                    Login</Button>
            </Link> */}

            <NeynarAuthButton className='bg-red-500 w-auto mx-[24px]'>
              Get Started
            </NeynarAuthButton>
          </div>


      </div>
    </FrameReadyWrapper>
  )
}
