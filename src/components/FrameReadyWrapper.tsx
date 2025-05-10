"use client"

import { useMiniKit } from '@coinbase/onchainkit/minikit';
import React, { ReactNode, useEffect } from 'react'

export default function FrameReadyWrapper({
    children
}: {children: ReactNode}) {
    const { setFrameReady, isFrameReady } = useMiniKit();
    
    // The setFrameReady() function is called when your mini-app is ready to be shown
    useEffect(() => {
    if (!isFrameReady) {
        setFrameReady();
    }
    }, [setFrameReady, isFrameReady]);
  return (
    <div>{children}</div>
  )
}
