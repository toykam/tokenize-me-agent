"use client"

import { PrivyProvider, SUPPORTED_CHAINS } from '@privy-io/react-auth'
import React from 'react'
import { HoldingsProvider } from './HoldingsProvider'
import { NeynarContextProvider, Theme } from "@neynar/react";
import { ProfileProvider } from './ProfileProvider';

export default function Providers({
    children
}: {children: React.ReactNode}) {
  return (
    <NeynarContextProvider
        settings={{
            clientId: process.env.NEXT_PUBLIC_NEYNAR_CLIENT_ID || "",
            defaultTheme: Theme.Dark,
            eventsCallbacks: {
                onAuthSuccess(params) {
                    // console.log("Auth Success ::: ", params);
                    
                },
                onSignout(user) {
                    console.log("User Loggedout ::: ", user);
                },
            }
        }}
        >
        <ProfileProvider>
            <HoldingsProvider>
                {children}
            </HoldingsProvider>
        </ProfileProvider>
    </NeynarContextProvider>
  )
}
