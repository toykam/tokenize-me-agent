import { useEffect, useState } from "react";

export function TokenMarketInfo({tokenAddress}: {tokenAddress: string}) {
  const [marketInfo, setMarketInfo] = useState<{ price: number; marketCap: string; }>({
    marketCap: "0", price: 0
  });
  const [loadingMarketInfo, setIsLoadingMarketInfo] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  
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
    <div className="bg-[#16213e] py-[clamp(0.75rem,1.5vw,1.25rem)] px-[clamp(0.625rem,1.5vw,1.25rem)] rounded-[10px] mb-[clamp(0.75rem,1.5vw,1.25rem)]">
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
    </div>
  )
}
