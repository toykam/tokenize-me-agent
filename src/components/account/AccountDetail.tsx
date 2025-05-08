"use client"

import { useProfileProvider } from '@/providers/ProfileProvider'
import React from 'react'

export default function AccountDetail() {
    const {
        account,
        isLoading
    } = useProfileProvider()
  return (
    <div>
        <p>Wallet</p>
        <p>{account?.wallet?.address}</p>
    </div>
  )
}
