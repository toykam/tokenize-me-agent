import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const searchName = searchParams.get('name');
        const section = searchParams.get('section')?.toLowerCase();
        const sortBy = searchParams.get('sortBy')?.toLowerCase();

        const where: any = {};
        let orderBy: any[] = [];

        // Add search conditions
        if (searchName) {
            where.OR = [
                { name: { contains: searchName, mode: 'insensitive' } },
                { symbol: { contains: searchName, mode: 'insensitive' } }
            ];
        }

        // Add section conditions
        if (section === 'new') {
            const twentyFourHoursAgo = new Date();
            twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);
            where.createdAt = { gte: twentyFourHoursAgo };
        }

        // Add sorting based on section and parameter
        if (section === 'trending' || sortBy === 'engagement') {
            orderBy = [
                { Engagement: { _count: 'desc' } },
                { transactions: { _count: 'desc' } }
            ];
        } else if (section === 'new') {
            orderBy = [{ createdAt: 'desc' }];
        } else if (sortBy === 'transactions') {
            orderBy = [{ transactions: { _count: 'desc' } }];
        }

        const tokens = await prisma.token.findMany({
            where,
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