"use client"

import { useProfileProvider } from '@/providers/ProfileProvider'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'

export default function LinkedAccounts() {
    const {
        account,
        isLoading
    } = useProfileProvider()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Linked Accounts</CardTitle>
        <CardDescription>
          This are the social accounts you have linked.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>Linked Accounts</p>
        {account?.linkedAccounts?.map((v: any) => {
          return (<p>{v.platform} {"<==>"} @{v.username}</p>)
        })}
      </CardContent>
    </Card>
  )
}
