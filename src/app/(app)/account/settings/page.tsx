import AccountDetail from '@/components/account/AccountDetail'
import AccountHeader from '@/components/account/AccountHeader'
import LinkedAccounts from '@/components/account/LinkedAccounts'
import UpdateBuyAmountForm from '@/components/account/UpdateBuyAmountForm'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'
import React from 'react'

export default function SettingsPage() {

  return (
    <div className='w-full'>

        <AccountHeader title='Settings' />
        
        <Tabs defaultValue="wallet" className="mx-[24px]">
          <TabsList className="grid w-full grid-cols-3 mb-[16px]">
            <TabsTrigger value="wallet">Wallet</TabsTrigger>
            <TabsTrigger value="engagement-buys">Buy Amount</TabsTrigger>
            <TabsTrigger value="linked-accounts">Linked Accounts</TabsTrigger>
          </TabsList>
          <TabsContent value="wallet">
            <Card>
              <CardContent className="space-y-2">
                <AccountDetail />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="engagement-buys">
            <Card>
              <CardHeader>
                <CardTitle>Buy Amount</CardTitle>
                <CardDescription>
                  Update the buy amount for engagement.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <UpdateBuyAmountForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="linked-accounts">
            <LinkedAccounts />
          </TabsContent>
        </Tabs>
    </div>
  )
}
