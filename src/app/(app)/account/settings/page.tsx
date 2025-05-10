import AccountDetail from '@/components/account/AccountDetail'
import AccountHeader from '@/components/account/AccountHeader'
import LinkedAccounts from '@/components/account/LinkedAccounts'
import UpdateBuyAmountForm from '@/components/account/UpdateBuyAmountForm'
import FrameReadyWrapper from '@/components/FrameReadyWrapper'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'
import React from 'react'

export default function SettingsPage() {
  return (
    <FrameReadyWrapper>
      <div className="w-screen mx-auto">
        <AccountHeader title='Settings' />
        
        <Tabs defaultValue="wallet" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
            <TabsTrigger value="wallet" className="px-4 py-2">Wallet</TabsTrigger>
            <TabsTrigger value="engagement-buys" className="px-4 py-2">Buy Amount</TabsTrigger>
            <TabsTrigger value="linked-accounts" className="px-4 py-2">Linked Accounts</TabsTrigger>
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
    </FrameReadyWrapper>
  )
}
