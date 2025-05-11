
import { prisma } from "@/lib/prisma";
import { createLinkedAccount, createUser, createWalletForUser, getUserByFID, initializeEngagementBuyAmount } from "@/lib/services/user.service";
import { viemClient } from "@/lib/viem";
import { NextResponse } from "next/server";
import { formatEther } from "viem";

export async function POST(
    req: Request
) {
    try {
        const { fid, display_name, username, pfp } = await req.json();
        let user = await getUserByFID(fid)

        if (!user) {
            user = await createUser({
                fid: fid,
                displayName: display_name,
                username: username,
                pfp: pfp
            });
            await Promise.all([
                createWalletForUser(user.id),
                initializeEngagementBuyAmount(user.id),
                createLinkedAccount({
                    platform: "Farcaster",
                    platformAccountId: `${fid}`,
                    userId: user.id,
                    username: username
                }),
            ])
            
            user = await getUserByFID(fid);
        }

        if (user.pfp == null && pfp != null) {
            await prisma.user.update({
                where: {id: user.id},
                data: {pfp}
            })
        }

        // console.log("User ::: ", user);

        const rawBalance = await viemClient.getBalance({
            address: user.wallet.address
        });

        const balance = formatEther(rawBalance);

        return NextResponse.json({user, balance: balance.toString()}, {status: 200});
    } catch (error) {
        return NextResponse.json({"message": `${error}`}, {status: 500})
    }
}