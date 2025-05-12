"use client"

import AccountHeader from '@/components/account/AccountHeader'
import BuyTokenComponent from '@/components/account/BuyTokenComponent'
import SellTokenComponent from '@/components/account/SellTokenComponent'
import TransferTokenComponent from '@/components/account/TransferTokenComponent'
// import SellTokenComponent from '@/components/account/SellTokenComponent'
import FrameReadyWrapper from '@/components/FrameReadyWrapper'
import { Button } from '@/components/ui/button'
// import { Button } from '@/components/ui/button'
import { toMoneyFormat } from '@/lib/utils'
import { useProfileProvider } from '@/providers/ProfileProvider'
import { useTokens } from '@/providers/TokensProvider'
import { LucideLoader2 } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'


export default function TokenDetailPage() {
  const {
    token,
    isLoadingTokenDetail,
    setTokenId,
    tokenBalance
  } = useTokens()

  const {
    balance,
    account,
    claimReward
  } = useProfileProvider();

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

  console.log(account);

  return (
    <FrameReadyWrapper>
      <div className='h-full'>
          <AccountHeader title={isLoadingTokenDetail ? "..." : token?.name ?? ""} />


          {isLoadingTokenDetail && <div className='text-center flex flex-col items-center justify-center h-screen'>
            <LucideLoader2 className='text-white'/>
            <p className='text-center mt-2 text-white'>Loading token detail...</p>
          </div>}

          {!isLoadingTokenDetail && <div className="bg-[#1a1a2e] text-[#e5e5e5] font-arial py-[clamp(1rem,2vw,1.25rem)] px-[clamp(0.625rem,1.5vw,1.25rem)] max-w-[1200px] mx-auto rounded-[10px] min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#16213e] to-[#1a1a2e] py-[clamp(1.5rem,3vw,2.5rem)] px-[clamp(1rem,2vw,2.5rem)] rounded-[10px] text-center mb-[clamp(0.75rem,1.5vw,1.25rem)]">
              <h1 className="text-[#ff6b6b] font-bold text-[clamp(1.5rem,4vw,2.5rem)] md:text-[clamp(1.75rem,3.5vw,2.5rem)] lg:text-[2.5rem] m-0">
                {token?.name}
              </h1>
              <h2 className="text-[#4ecdc4] font-semibold text-[clamp(1rem,2.5vw,1.5rem)] md:text-[clamp(1.1rem,2vw,1.5rem)] lg:text-[1.5rem] mt-[0.3125rem] mb-0">
                {token?.symbol}
              </h2>
            </div>


            {/* Token Details Section */}
            {token?.address == account.token.address && <div className="bg-[#16213e] py-[clamp(0.75rem,1.5vw,1.25rem)] px-[clamp(0.625rem,1.5vw,1.25rem)] rounded-[10px] mb-[clamp(0.75rem,1.5vw,1.25rem)]">
              <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-semibold mb-[0.5rem]">Reward</h3>
              <div className="space-y-[clamp(0.5rem,1vw,0.625rem)]">
                <Button className='mt-4' onClick={() => claimReward()}>Claim Reward</Button>
              </div>
            </div>}

            {/* Social Accounts Section */}
            <div className="bg-[#16213e] py-[clamp(0.75rem,1.5vw,1.25rem)] px-[clamp(0.625rem,1.5vw,1.25rem)] rounded-[10px] mb-[clamp(0.75rem,1.5vw,1.25rem)]">
              <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-semibold mb-[0.5rem]">Social Accounts</h3>
              {socialLinks && socialLinks.length > 0 ? (
                <div className="flex flex-col justify-start flex-wrap gap-x-[clamp(0.5rem,1vw,0.9375rem)] gap-y-[0.3125rem] md:gap-x-[0.9375rem]">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={`${link.url}${link.username.toLowerCase()}`}
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

            {/* Token Details Section */}
            <div className="bg-[#16213e] py-[clamp(0.75rem,1.5vw,1.25rem)] px-[clamp(0.625rem,1.5vw,1.25rem)] rounded-[10px] mb-[clamp(0.75rem,1.5vw,1.25rem)]">
              <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-semibold mb-[0.5rem]">Your Balance</h3>
              <div className="space-y-[clamp(0.5rem,1vw,0.625rem)]">
                <div className='flex flex-row gap-x-1'>
                  <div className="text-[clamp(0.875rem,1.5vw,1.1rem)]">{toMoneyFormat(tokenBalance)} {token?.symbol}</div>
                </div>
              </div>
            </div>

            {/* Token Details Section */}
            <div className="bg-[#16213e] py-[clamp(0.75rem,1.5vw,1.25rem)] px-[clamp(0.625rem,1.5vw,1.25rem)] rounded-[10px] mb-[clamp(0.75rem,1.5vw,1.25rem)]">
              <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-semibold mb-[0.5rem]">Chart</h3>
              <div className="space-y-[clamp(0.5rem,1vw,0.625rem)]">
                <div className='flex flex-row gap-x-1'>
                  <Link target='_blank' className='text-blue-400' href={`https://dexscreener.com/base/${token?.address}`}>DexScreener</Link>
                  <Link target='_blank' className='text-blue-400' href={`https://www.dexview.com/base/${token?.address}`}>DexView</Link>
                  <Link target='_blank' className='text-blue-400' href={`https://www.geckoterminal.com/base/pools/${token?.address}`}>GeckoTerminal</Link>
                </div>
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
                      <span>Engagements:</span>
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

            {/* Token Details Section */}
            <div className="bg-[#16213e] py-[clamp(0.75rem,1.5vw,1.25rem)] px-[clamp(0.625rem,1.5vw,1.25rem)] rounded-[10px] mb-[clamp(0.75rem,1.5vw,1.25rem)]">
              <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-semibold mb-[0.5rem]">Trade</h3>
              <div className="space-y-[clamp(0.5rem,1vw,0.625rem)] flex gap-2">
                <SellTokenComponent token={token!} balance={Number(tokenBalance)} />
                <BuyTokenComponent token={token!} balance={Number(balance)} />
                <TransferTokenComponent type='token' token={token!} balance={Number(tokenBalance)} />
                {/* <div className="text-[clamp(0.875rem,1.5vw,1.1rem)]">Symbol: {token?.symbol}</div>
                <div className="text-[clamp(0.875rem,1.5vw,1.1rem)]">Name: {token?.name}</div> */}
              </div>
            </div>


          </div>}
      </div>
    </FrameReadyWrapper>
  )
}
