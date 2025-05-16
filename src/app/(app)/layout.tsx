"use client"

import React from 'react'
import Providers from '@/providers/providers';
import { Toaster } from '@/components/ui/sonner';
import { MiniKitContextProvider } from '@/providers/MiniKitContextProvider';
import "@neynar/react/dist/style.css"

export default function AppLayout({children}: {
    children: React.ReactNode
}) {
  return (
    <Providers>
      <MiniKitContextProvider>
        {children}
        <Toaster />
      </MiniKitContextProvider>
    </Providers>
  )
}
