"use client"

import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { InfoIcon } from 'lucide-react';
import { Label } from '../ui/label';
import { useProfileProvider } from '@/providers/ProfileProvider';

export default function UpdateBuyAmountForm() {

  const {
    likeAmount, updateBuyAmount
  } = useProfileProvider();

  const [likeAmt, setLikeAmt] = useState(0);

  useEffect(() => {
    setLikeAmt(likeAmount)
  }, [likeAmount])

  return (
    <div className=''>
        <div className='space-y-1'>
            <Label htmlFor="name">Engagement Buy amount <InfoIcon className='inline' size={10} /></Label>
            <Input type='number' value={likeAmt} name='like_buy' placeholder='0.001' className='mb-[16px]' onChange={(e) => setLikeAmt(parseFloat(e.target.value))} />
        </div>


        {/* <div className='space-y-1'>
            <Label htmlFor="name">Recast/Retweet amount <InfoIcon className='inline' size={10} /></Label>
            <Input type='number' value={} placeholder='0.001' className='mb-[16px]' />
        </div> */}

        <Button className='mt-[16px]' onClick={() => updateBuyAmount(likeAmt)}>
            Save Settings
        </Button>
    </div>
  )
}
