import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tokenAddress = searchParams.get('address');
  const fromTimestamp = searchParams.get('from');
  const endTimestamp = searchParams.get('to');

  console.log(tokenAddress, fromTimestamp, endTimestamp);

  if (!tokenAddress || !fromTimestamp || !endTimestamp) {
    return NextResponse.json(
      { error: 'Missing required parameters' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://api.chainbase.online/v1/token/price/history?chain_id=8453&contract_address=${tokenAddress}&from_timestamp=${fromTimestamp}&end_timestamp=${endTimestamp}`,
      {
        headers: {
          'x-api-key': process.env.CHAINBASE_API_KEY!,
          'accept': 'application/json'
        }
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching price history:', error);
    return NextResponse.json(
      { error: 'Failed to fetch price history' },
      { status: 500 }
    );
  }
}