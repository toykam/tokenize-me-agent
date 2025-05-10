
import { prisma } from "@/lib/prisma";
import { getUserByFID } from "@/lib/services/user.service";
import { NextResponse } from "next/server";

export async function POST(
    req: Request
) {
    try {
        const { fid, like_amount } = await req.json();
        let user = await getUserByFID(fid)

        if (!user) {
            return NextResponse.json({"message": `User not found`}, {status: 500})
        }
        
        await prisma.buyAmount.update({
            where: {userId: user.id},
            data: {
                likeAmount: like_amount,
                retweetAmount: like_amount
            }
        });

        user = await getUserByFID(fid)

        return NextResponse.json({user}, {status: 200});
    } catch (error) {
        return NextResponse.json({"message": `${error}`}, {status: 500})
    }
}