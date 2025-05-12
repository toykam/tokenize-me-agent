import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const searchName = searchParams.get('name');
        const sortBy = searchParams.get('sortBy')?.toLowerCase();

        let orderBy: any[] = [];
        
        // Add sorting based on parameter
        if (sortBy === 'engagement') {
            orderBy.push({ Engagement: { _count: 'desc' } });
        } else if (sortBy === 'transactions') {
            orderBy.push({ transactions: { _count: 'desc' } });
        } else {
            // Default sorting by both
            orderBy = [
                { Engagement: { _count: 'desc' } },
                { transactions: { _count: 'desc' } }
            ];
        }

        const tokens = await prisma.token.findMany({
            where: searchName ? {
                OR: [
                    {
                        name: {
                            contains: searchName,
                            mode: 'insensitive'
                        }
                    },
                    {
                        symbol: {
                            contains: searchName,
                            mode: 'insensitive'
                        }
                    }
                ]
            } : undefined,
            select: {
                user: true,
                address: true,
                name: true,
                decimals: true,
                symbol: true,
                createdAt: true,
                _count: {
                    select: {
                        Engagement: true,
                        transactions: true
                    }
                }
            },
            orderBy
        });

        return NextResponse.json(tokens);
    } catch (error) {
        console.error('Error fetching tokens:', error);
        return NextResponse.json(
            { error: 'Failed to fetch tokens' },
            { status: 500 }
        );
    }
}