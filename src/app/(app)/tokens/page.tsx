"use client"

import AccountHeader from '@/components/account/AccountHeader'
import HoldingItemComponent from '@/components/account/HoldingIcon';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { useTokens } from '@/providers/TokensProvider'
import React, { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce';

export default function AllTokenPage() {
  const { tokens, isLoading, refreshTokens } = useTokens();
  const [searchQuery, setSearchQuery] = useState('');

  // Debounce the search to avoid too many API calls
  const debouncedSearch = useDebouncedCallback((value: string) => {
    refreshTokens({ search: value || undefined });
  }, 700);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    debouncedSearch(value);
  };
  
  return (
    <div>
      <div className='h-full'>
        <AccountHeader title='All Tokenized Profiles'/>



        <div className='mt-[40px] px-[24px]'>
          {<div>
            <Input 
              type='search' 
              value={searchQuery}
              onChange={handleSearch} 
              className='mb-10 text-white ' 
              placeholder='Search token by name'
            />  
          </div>}
          {isLoading && <>
            {[1,2,3,4,5].map((v) => <div key={v} className="flex items-center space-x-4 mb-2">
              <Skeleton className="h-12 w-12 rounded-full bg-green-50/10"  />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-green-50/10" />
                <Skeleton className="h-4 w-[200px] bg-green-50/10" />
              </div>
            </div>)}
          </>}

          <div className='flex flex-col gap-[32px]'>
            {!isLoading && tokens.length == 0 && 
              <p className='text-white text-center'>
                {searchQuery 
                  ? 'No tokens found matching your search.' 
                  : 'No Token have been launched. Tokenize your profile to start earning today.'}
              </p>}
            {!isLoading && tokens.map((v) => {
              return <HoldingItemComponent token={v} key={v.address} />;
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
