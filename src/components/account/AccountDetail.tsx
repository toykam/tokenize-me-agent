"use client"

import { useProfileProvider } from '@/providers/ProfileProvider'
import React from 'react'

export default function AccountDetail() {
    const {
        account,
    } = useProfileProvider()
    
    return (
        <div className="w-full md:p-6 lg:p-8 rounded-lg bg-white/5 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Account Details</h2>
            <div className="space-y-4">
                <div className="flex flex-col">
                    <p className="text-sm text-gray-400">Wallet Address</p>
                    <p className="font-mono text-sm md:text-base break-all">{account?.wallet?.address}</p>
                </div>
            </div>
        </div>
    )
}
