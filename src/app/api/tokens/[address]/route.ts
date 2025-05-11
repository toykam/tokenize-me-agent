import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { viemClient } from '@/lib/viem';
import { erc20Abi, formatEther } from 'viem';


export async function POST(_: Request, { params }: { params: Promise<{ address: string }>  }) {
    try {
        const { address } = await params;
        const { fid } = await _.json();
        let balance = "0";
        const token = await prisma.token.findFirst({
            where: { address },
            select: {
                user: {
                    include: {linkedAccounts: {select: {platform: true, username: true}}}
                }, address: true, name: true, decimals: true, symbol: true, createdAt: true,
                _count: {select: {Engagement: true, transactions: true}}
            }
        });

        if (fid != null) {
            const user = await prisma.user.findFirst({
                where: {fid},
                select: {wallet: {select: {address: true}}}
            });
            const rawBalance = await viemClient.readContract({
                address: token?.address as `0x${string}`,
                abi: erc20Abi,
                functionName: "balanceOf",
                args: [user?.wallet?.address as `0x${string}`]
            });

            balance = formatEther(rawBalance);
        }

        return NextResponse.json({token, balance: balance.toString()});
    } catch (error) {
        console.error('Error fetching holdings:', error);
        return NextResponse.json(
            { error: 'Failed to fetch holdings' },
            { status: 500 }
        );
    }
}