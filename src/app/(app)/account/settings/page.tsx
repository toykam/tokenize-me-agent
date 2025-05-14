"use client"

import AccountDetail from '@/components/account/AccountDetail'
import AccountHeader from '@/components/account/AccountHeader'
import LinkedAccounts from '@/components/account/LinkedAccounts'
import UpdateBuyAmountForm from '@/components/account/UpdateBuyAmountForm'
import FrameReadyWrapper from '@/components/FrameReadyWrapper'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import React, { useState } from 'react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('wallet');

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <FrameReadyWrapper>
      <div className="w-screen mx-auto">
        <AccountHeader title='Settings' />
        
        <div className='mt-[40px] px-[24px]'>
          <Tabs defaultValue="wallet" className="w-full" onValueChange={handleTabChange}>
            <TabsList className="grid w-full grid-cols-3 mb-6 bg-[#1a1a2e]/10">
              <TabsTrigger 
                className={activeTab === 'wallet' ? '' : 'text-white/100'} 
                value="wallet"
              >
                Wallet
              </TabsTrigger>
              <TabsTrigger 
                className={activeTab === 'engagement-buys' ? '' : 'text-white/100'} 
                value="engagement-buys"
              >
                Buy Amount
              </TabsTrigger>
              <TabsTrigger 
                className={activeTab === 'linked-accounts' ? '' : 'text-white/100'} 
                value="linked-accounts"
              >
                Linked Accounts
              </TabsTrigger>
            </TabsList>

            <TabsContent value="wallet">
              <Card className="w-full">
                <CardContent className="p-4 sm:p-6">
                  <AccountDetail />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="engagement-buys">
              <Card className="w-full">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl">Buy Amount</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Update the amount of token you want to buy in ETH when you interact with tokenized profiles.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 space-y-4">
                  <UpdateBuyAmountForm />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="linked-accounts">
              <LinkedAccounts />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </FrameReadyWrapper>
  )
}
