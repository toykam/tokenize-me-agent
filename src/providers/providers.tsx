"use client"

import React from 'react'
import { HoldingsProvider } from './HoldingsProvider'
import { NeynarContextProvider, Theme } from "@neynar/react";
import { ProfileProvider } from './ProfileProvider';
import { TokensProvider } from './TokensProvider';
import { AuthProvider } from './AuthProvider';

export default function Providers({
    children
}: {children: React.ReactNode}) {
  return (
    <NeynarContextProvider
        settings={{
            clientId: process.env.NEXT_PUBLIC_NEYNAR_CLIENT_ID || "",
            defaultTheme: Theme.Dark,
            eventsCallbacks: {
            }
        }}
        >
        <AuthProvider>
            <ProfileProvider>
                <HoldingsProvider>
                    <TokensProvider>
                        {children}
                    </TokensProvider>
                </HoldingsProvider>
            </ProfileProvider>
        </AuthProvider>
    </NeynarContextProvider>
  )
}
