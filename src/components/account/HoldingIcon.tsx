import React from 'react'

export default function HoldingItemComponent() {
  return (
    <div className='flex gap-[12px]'>
        <div className='h-[45px] w-[45px] bg-amber-300 rounded-2xl flex-1/6'></div>

        <div className=''>
            <p className='text-white font-extrabold text-[16px]'>Ethereum</p>
            <p className='text-[#6C757D] font-medium text-[14px]'>ETH</p>
        </div>


        <div className='flex-1/2 flex justify-center'>
            <img src="/graph.png" alt="" className='h-[30px]' />
        </div>


        <div>
            <p className='text-white font-extrabold text-[16px]'>$503.12</p>
            <p className='text-[#6C757D] font-medium text-[14px]'>50 ETH</p>
        </div>
    </div>
  )
}
