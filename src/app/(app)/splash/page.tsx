import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function SplashScreenPage() {
  return (
    <div className='h-screen px-[24px] bg-[#070707] py-[24px] flex flex-col justify-between'>
        <h3 className='text-[48px] font-extrabold text-white mb-10'>Tokenized<br/>Profile</h3>

        <img alt='' className='object-cover  h-fit' src={"/splash-image.png"} />

        <p className='text-white text-[24px] font-medium text-center'>
            Jump start your crypto journey by trading tokenized profile.<br></br>
            <span className='font-extrabold text-[#6552FE]'>Earn</span> from your <span className='font-extrabold text-[#6552FE]'>social engagements</span>.
        </p>

        <Link href={"/account"}>
            <Button
            size={"lg"}
            className='w-full py-[24px] text-[18px] font-bold'
            >
                Get Started</Button>
        </Link>
    </div>
  )
}
