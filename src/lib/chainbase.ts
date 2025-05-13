export async function getTokenPriceHistory(tokenAddress: string, createdAt: Date) {
  const now = Math.floor(Date.now() / 1000); // current timestamp in seconds
  const tokenCreationTime = Math.floor(new Date(createdAt).getTime() / 1000); // convert creation date to epoch
  
  try {
    const response = await fetch(
      `https://api.chainbase.online/v1/token/price/history?chain_id=8453&contract_address=${tokenAddress}&from_timestamp=${tokenCreationTime}&end_timestamp=${now}`,
      {
        headers: {
          'x-api-key': process.env.CHAINBASE_API_KEY!,
          'accept': 'application/json'
        }
      }
    );

    const data = await response.json();
    
    if (!data.data) {
      throw new Error('No price data available');
    }

    // Transform data for lightweight-charts format
    return data.data.map((item: any) => ({
      time: item.timestamp,
      value: parseFloat(item.price)
    })).sort((a: { time: number; }, b: { time: number; }) => a.time - b.time); // Ensure data is sorted by time
  } catch (error) {
    console.error('Error fetching price history:', error);
    return [];
  }
}