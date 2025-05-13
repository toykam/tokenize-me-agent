"use client"

import AccountHeader from '@/components/account/AccountHeader'
import TokenList from '@/components/account/TokenList';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTokens } from '@/providers/TokensProvider'
import React, { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce';

export default function AllTokenPage() {
  const { tokens, isLoading, refreshTokens } = useTokens();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Debounce the search to avoid too many API calls
  const debouncedSearch = useDebouncedCallback((value: string) => {
    refreshTokens({ search: value || undefined });
  }, 700);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    debouncedSearch(value);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    refreshTokens({ search: searchQuery || undefined, section: value });
  };
  
  
  return (
    <div>
      <div className='h-full'>
        <AccountHeader title='All Tokenized Profiles'/>

        <div className='mt-[40px] px-[24px]'>
          <div className="mb-6">
            <Input 
              type='search' 
              value={searchQuery}
              onChange={handleSearch} 
              className='mb-6 text-white' 
              placeholder='Search token by name or symbol'
            />
            
            <Tabs defaultValue="all" onValueChange={handleTabChange}>
              <TabsList className="grid w-full grid-cols-3 mb-6 bg-[#1a1a2e]/10">
                <TabsTrigger className={activeTab == 'trending' ? '' : 'text-white/100'} value="trending">Trending</TabsTrigger>
                <TabsTrigger className={activeTab == 'new' ? '' : 'text-white/100'} value="new">New</TabsTrigger>
                <TabsTrigger className={activeTab == 'all' ? '' : 'text-white/100'} value="all">All</TabsTrigger>
              </TabsList>

              <TabsContent value="trending">
                <TokenList 
                  tokens={tokens} 
                  isLoading={isLoading} 
                  searchQuery={searchQuery}
                  emptyMessage="No trending tokens found."
                />
              </TabsContent>

              <TabsContent value="new">
                <TokenList 
                  tokens={tokens} 
                  isLoading={isLoading} 
                  searchQuery={searchQuery}
                  emptyMessage="No new tokens in the last 24 hours."
                />
              </TabsContent>

              <TabsContent value="all">
                <TokenList 
                  tokens={tokens} 
                  isLoading={isLoading} 
                  searchQuery={searchQuery}
                  emptyMessage="No tokens have been launched yet."
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
