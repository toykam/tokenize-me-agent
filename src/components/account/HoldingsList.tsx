'use client';

import { useHoldings } from '@/providers/HoldingsProvider';
import { Button } from '../ui/button';

export function HoldingsList() {
  const { holdings, isLoading, error, refreshHoldings } = useHoldings();

  if (isLoading) {
    return <div>Loading holdings...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
        <Button onClick={() => refreshHoldings()}>Retry</Button>
      </div>
    );
  }

  if (holdings.length === 0) {
    return <div>No holdings found</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Your Holdings</h2>
        <Button onClick={() => refreshHoldings()}>Refresh</Button>
      </div>
      <div className="grid gap-4">
        {holdings.map((holding) => (
          <div 
            key={holding.tokenAddress}
            className="p-4 rounded-lg bg-gray-800"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{holding.name}</h3>
                <p className="text-sm text-gray-400">{holding.symbol}</p>
                <p className="mt-2">Balance: {holding.balance}</p>
              </div>
              {holding.platform && (
                <div className="text-sm text-gray-400">
                  {holding.platform} - @{holding.handle}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}