"use client"

import { useProfileProvider } from '@/providers/ProfileProvider';
import React from 'react'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { InfoIcon } from 'lucide-react';
import { Label } from '../ui/label';

export default function UpdateBuyAmountForm() {
      const {
        account,
        isLoading
      } = useProfileProvider();
  return (
    <div className=''>
        <div className='space-y-1'>
            <Label htmlFor="name">Like amount <InfoIcon className='inline' size={10} /></Label>
            <Input type='number' name='like_buy' placeholder='0.001' className='mb-[16px]' />
        </div>


        <div className='space-y-1'>
            <Label htmlFor="name">Recast/Retweet amount <InfoIcon className='inline' size={10} /></Label>
            <Input type='number' placeholder='0.001' className='mb-[16px]' />
        </div>

        <Button className='mt-[16px]'>
            Save Settings
        </Button>
    </div>
  )
}
