import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';


export async function GET() {
    try {
        
        const tokens = await prisma.token.findMany({
            select: {
                user: true, address: true, name: true, decimals: true, symbol: true, createdAt: true,
                _count: {select: {Engagement: true, transactions: true}}
            }
        });

        return NextResponse.json(tokens);
    } catch (error) {
        console.error('Error fetching holdings:', error);
        return NextResponse.json(
            { error: 'Failed to fetch holdings' },
            { status: 500 }
        );
    }
}