import { Token } from '@/lib/types'
import Link from 'next/link'
import React from 'react'

export default function HoldingItemComponent({token} : {token: Token}) {
  return (
    <Link href={`/tokens/${token.address}`}>
      <div className='flex gap-[12px]'>
          <div className='max-h-[45px] max-w-[45px] bg-amber-300 rounded-2xl flex-1/6'></div>

          <div className=''>
              <p className='text-white font-extrabold text-[16px]'>{token.name}</p>
              <p className='text-[#6C757D] font-medium text-[14px]'>{token.symbol}</p>
          </div>


          {/* <div className='flex-1/2 flex justify-center'>
              <img src="/graph.png" alt="" className='h-[30px]' />
          </div> */}


          <div className='flex-1/2 flex justify-end flex-col items-end-safe'>
              <p className='text-[#6C757D] font-medium text-[14px]'>tx: {token._count?.transactions}</p>
              <p className='text-[#6C757D] font-medium text-[14px]'>{token._count?.Engagement} engagements</p>
          </div>
      </div>
    </Link>
  )
}
