"use client"

import { useEffect, useState } from "react";
import { TokenPriceChart } from "@/components/TokenDetail/TokenChart";
import { getTokenPriceHistory } from "@/lib/chainbase";
import { motion } from "framer-motion"

export function TokenMarketInfo({tokenAddress, createdAt, tokenSymbol}: {tokenAddress: string, createdAt: Date, tokenSymbol: string}) {
  const [marketInfo, setMarketInfo] = useState<{ price: number; marketCap: string; }>({
    marketCap: "0", price: 0
  });
  const [loadingMarketInfo, setIsLoadingMarketInfo] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [priceHistory, setPriceHistory] = useState<Array<{ time: string; value: number }>>([]);

  
  useEffect(() => {
    const loadMarketInfo = async () => {
      try {
        setIsLoadingMarketInfo(true);
        // Fetch price data from dexscreener
        const priceResponse = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`);
        const priceData = await priceResponse.json();
        const data = {
          price: 0,
          marketCap: "0"
        };

        const pairs = priceData.pairs?.[0];
        if (pairs) {
            data.price = pairs.priceUsd;
            data.marketCap = (Number(pairs.priceUsd) * (1_000_000_000)).toString(); // Using 1B total supply


            // Format historical data for the chart
            const history = await getTokenPriceHistory(tokenAddress, createdAt);
            setPriceHistory(history);
        }
        
        setMarketInfo(data);
      } catch (error) {
        setError(`Error: ${error}`);
      } finally {
        setIsLoadingMarketInfo(false);
      }
    }
    loadMarketInfo();

    return () => {}
  }, [])
  return (
    <>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}}  className="bg-[#16213e] py-[clamp(0.75rem,1.5vw,1.25rem)] px-[clamp(0.625rem,1.5vw,1.25rem)] rounded-[10px] mb-[clamp(0.75rem,1.5vw,1.25rem)]">
        <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-semibold mb-[0.5rem]">Market Information</h3>
        
        {error.length == 0 && <p className='text-center text-red-500'>{error}</p>}
        {error.length == 0 && <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-[clamp(0.5rem,1vw,0.625rem)]">
            <div className="text-[clamp(0.875rem,1.5vw,1.1rem)]">
              <span className="text-[#4ecdc4]">Price:</span>{' '}
              {!loadingMarketInfo ? `$${Number(marketInfo.price).toFixed(6)}` : 'Loading...'}
            </div>
          </div>
          <div className="space-y-[clamp(0.5rem,1vw,0.625rem)]">
            <div className="text-[clamp(0.875rem,1.5vw,1.1rem)]">
              <span className="text-[#4ecdc4]">Market Cap:</span>{' '}
              {!loadingMarketInfo ? `$${Number(marketInfo.marketCap).toLocaleString()}` : 'Loading...'}
            </div>
          </div>
        </div>}
      </motion.div>

      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="bg-[#16213e] py-[clamp(0.75rem,1.5vw,1.25rem)] px-[clamp(0.625rem,1.5vw,1.25rem)] rounded-[10px] mb-[clamp(0.75rem,1.5vw,1.25rem)]">
        <h4 className="text-[clamp(1rem,1.8vw,1.3rem)] font-semibold mb-4">Price Chart</h4>
        {error.length != 0 && <p className='text-center text-red-500'>{error}</p>}
        {error.length == 0 && <div className="mt-6">
        {!loadingMarketInfo && priceHistory.length > 0 ? (
          <TokenPriceChart 
            data={priceHistory} 
            tokenSymbol={tokenSymbol} 
          />
        ) : (
          <div className="h-[400px] flex items-center justify-center text-gray-400">
            {loadingMarketInfo ? 'Loading chart data...' : 'No price data available'}
          </div>
        )}
      </div>}
      </motion.div>
    </>
  )
}
