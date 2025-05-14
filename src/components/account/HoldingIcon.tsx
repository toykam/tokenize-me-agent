import { Token } from '@/lib/types'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

export default function HoldingItemComponent({token} : {token: Token}) {
  return (
    <Link href={`/tokens/${token.address}`}>
      <motion.div
        // whileHover={{scale: 1.008}}
        whileInView={{scale: 1}}
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{scale: 0}}
        className='flex gap-[12px] flex-auto transition-all duration-500'>
          <div className='max-h-[45px] max-w-[45px] bg-amber-300 rounded-2xl flex-1/6'>
            <img src={`${token.user?.pfp ?? '/splash-image.png'}`} className='w-full h-full rounded-2xl' />
          </div>

          <div className='flex-1/2'>
              <p className='text-white font-extrabold text-[16px]'>{token.name}</p>
              <p className='text-[#6C757D] font-medium text-[14px]'>{token.symbol}</p>  
          </div>

          <div className='flex-1/2 flex justify-end flex-col items-end-safe'>
              <p className='text-[#6C757D] font-medium text-[14px]'>tx: {token._count?.transactions}</p>
              <p className='text-[#6C757D] font-medium text-[14px]'>{token._count?.Engagement} engagements</p>
          </div>
      </motion.div>
    </Link>
  )
}
