import { NextResponse } from 'next/server';
import { TokenFactory__factory } from '../../../../blockchain/typechain-types';
import { ethers } from 'ethers';

const FACTORY_ADDRESS = process.env.TOKEN_FACTORY_CONTRACT;
const RPC_URL = process.env.NEXT_PUBLIC_BASE_RPC_URL;

export async function GET() {
    try {
        if (!FACTORY_ADDRESS || !RPC_URL) {
            throw new Error('Missing environment variables');
        }

        const provider = new ethers.JsonRpcProvider(RPC_URL);
        const factory = TokenFactory__factory.connect(FACTORY_ADDRESS, provider);
        
        const tokens = await factory.getAllTokens();
        const holdings = await Promise.all(tokens.map(async (tokenAddress) => {
            // Basic token info using ethers contract interface
            const tokenContract = new ethers.Contract(
                tokenAddress,
                ['function name() view returns (string)', 'function symbol() view returns (string)', 'function balanceOf(address) view returns (uint256)'],
                provider
            );

            const [name, symbol] = await Promise.all([
                tokenContract.name(),
                tokenContract.symbol(),
            ]);

            return {
                tokenAddress,
                name,
                symbol,
                balance: '0', // You can implement actual balance fetching here
            };
        }));

        return NextResponse.json(holdings);
    } catch (error) {
        console.error('Error fetching holdings:', error);
        return NextResponse.json(
            { error: 'Failed to fetch holdings' },
            { status: 500 }
        );
    }
}