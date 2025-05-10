"use client"

import { useProfileProvider } from '@/providers/ProfileProvider'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'

export default function LinkedAccounts() {
    const {
        account
    } = useProfileProvider()
    
    return (
        <Card className="w-full">
            <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl">Linked Accounts</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                    These are the social accounts you have linked.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
                <div className="space-y-4">
                    {account?.linkedAccounts?.length === 0 ? (
                        <p className="text-sm text-muted-foreground">No accounts linked yet.</p>
                    ) : (
                        <div className="grid gap-3">
                            {account?.linkedAccounts?.map((v: any) => (
                                <div 
                                    key={v.id} 
                                    className="flex items-center justify-between p-3 rounded-lg bg-card/5 hover:bg-card/10 transition-colors"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="text-sm font-medium">{v.platform}</div>
                                        <div className="text-sm text-muted-foreground">@{v.username}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
