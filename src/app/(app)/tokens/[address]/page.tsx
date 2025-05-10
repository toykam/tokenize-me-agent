"use client"

import AccountHeader from '@/components/account/AccountHeader'
import FrameReadyWrapper from '@/components/FrameReadyWrapper'
import { useTokens } from '@/providers/TokensProvider'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'


export default function TokenDetailPage() {
  const {
    token,
    isLoadingTokenDetail,
    setTokenId
  } = useTokens()

  const { address } = useParams();

  
  useEffect(() => {
    if (address != null) {
        if (typeof address === 'string') {
            setTokenId(address);
        }
    }
  }, [address]);


  const socialLinks = token?.user?.linkedAccounts ?? [];
  const contractAddress = token?.address ?? "";
  const engagements = token?._count?.Engagement ?? 0;
  const transactions = token?._count?.transactions ?? 0;

  return (
    <FrameReadyWrapper>
      <div className='h-full'>
          <AccountHeader title={isLoadingTokenDetail ? "..." : token?.name ?? ""} />

          <div className="bg-[#1a1a2e] text-[#e5e5e5] font-arial py-[clamp(1rem,2vw,1.25rem)] px-[clamp(0.625rem,1.5vw,1.25rem)] max-w-[1200px] mx-auto rounded-[10px] min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#16213e] to-[#1a1a2e] py-[clamp(1.5rem,3vw,2.5rem)] px-[clamp(1rem,2vw,2.5rem)] rounded-[10px] text-center mb-[clamp(0.75rem,1.5vw,1.25rem)]">
              <h1 className="text-[#ff6b6b] font-bold text-[clamp(1.5rem,4vw,2.5rem)] md:text-[clamp(1.75rem,3.5vw,2.5rem)] lg:text-[2.5rem] m-0">
                {token?.name}
              </h1>
              <h2 className="text-[#4ecdc4] font-semibold text-[clamp(1rem,2.5vw,1.5rem)] md:text-[clamp(1.1rem,2vw,1.5rem)] lg:text-[1.5rem] mt-[0.3125rem] mb-0">
                {token?.symbol}
              </h2>
            </div>

            {/* Social Accounts Section */}
            <div className="bg-[#16213e] py-[clamp(0.75rem,1.5vw,1.25rem)] px-[clamp(0.625rem,1.5vw,1.25rem)] rounded-[10px] mb-[clamp(0.75rem,1.5vw,1.25rem)]">
              <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-semibold mb-[0.5rem]">Social Accounts</h3>
              {socialLinks && socialLinks.length > 0 ? (
                <div className="flex flex-wrap gap-x-[clamp(0.5rem,1vw,0.9375rem)] gap-y-[0.3125rem] md:gap-x-[0.9375rem]">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.username}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4ecdc4] text-[clamp(0.875rem,1.5vw,1rem)] hover:text-[#ff6b6b] transition-colors duration-200"
                    >
                      @{link.username} on {link.platform}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-[clamp(0.875rem,1.5vw,1rem)]">No social accounts linked.</p>
              )}
            </div>

            {/* Token Details Section */}
            <div className="bg-[#16213e] py-[clamp(0.75rem,1.5vw,1.25rem)] px-[clamp(0.625rem,1.5vw,1.25rem)] rounded-[10px] mb-[clamp(0.75rem,1.5vw,1.25rem)]">
              <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-semibold mb-[0.5rem]">Token Details</h3>
              <div className="space-y-[clamp(0.5rem,1vw,0.625rem)]">
                <div className="text-[clamp(0.875rem,1.5vw,1.1rem)] break-all">
                  Contract Address: {contractAddress}
                </div>
                <div className="text-[clamp(0.875rem,1.5vw,1.1rem)]">Symbol: {token?.symbol}</div>
                <div className="text-[clamp(0.875rem,1.5vw,1.1rem)]">Name: {token?.name}</div>
              </div>
            </div>

            {/* Engagement & Transaction Statistics Section */}
            <div className="bg-[#16213e] py-[clamp(0.75rem,1.5vw,1.25rem)] px-[clamp(0.625rem,1.5vw,1.25rem)] rounded-[10px]">
              <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-semibold mb-[0.5rem]">
                Engagement & Transaction Statistics
              </h3>
              <div className="space-y-[clamp(0.5rem,1vw,0.625rem)]">
                {engagements && (
                  <>
                    <div className="flex flex-col md:flex-row md:justify-between text-[clamp(0.875rem,1.5vw,1.1rem)]">
                      <span>Active Users:</span>
                      <span>{engagements}</span>
                    </div>
                  </>
                )}
                {transactions && (
                  <>
                    <div className="flex flex-col md:flex-row md:justify-between text-[clamp(0.875rem,1.5vw,1.1rem)]">
                      <span>Total Transactions:</span>
                      <span>{transactions}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
      </div>
    </FrameReadyWrapper>
  )
}
