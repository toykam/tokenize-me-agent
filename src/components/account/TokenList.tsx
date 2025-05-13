import React from 'react'
import { Skeleton } from '../ui/skeleton';
import HoldingItemComponent from './HoldingIcon';

export default function TokenList({ tokens, isLoading, searchQuery, emptyMessage }: {
  tokens: any[];
  isLoading: boolean;
  searchQuery: string;
  emptyMessage: string;
}) {
    if (isLoading) {
    return (
      <>
        {[1,2,3,4,5].map((v) => (
          <div key={v} className="flex items-center space-x-4 mb-2">
            <Skeleton className="h-12 w-12 rounded-full bg-green-50/10" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px] bg-green-50/10" />
              <Skeleton className="h-4 w-[200px] bg-green-50/10" />
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <div className='flex flex-col gap-[32px]'>
      {tokens.length === 0 && 
        <p className='text-white text-center'>
          {searchQuery ? 'No tokens found matching your search.' : emptyMessage}
        </p>
      }
      {tokens.map((v) => (
        <HoldingItemComponent token={v} key={v.address} />
      ))}
    </div>
  );
}
