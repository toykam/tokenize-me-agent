import { Wallet } from "ethers";
import { prisma } from "../prisma";
import { encryptPrivateKey } from "../encryption";
import { LinkedAccount, User } from "@/generated/prisma";

interface CreateUser {
    fid: number;
    displayName: string;
    username: string
}

interface AddLinkedAccount {
    platformAccountId: string;
    platform: string;
    userId: string;
    username: string;
}

export const createUser = async ({
    fid, displayName, username
}: CreateUser) => {
    return await prisma.user.create({
        data: {
            fid: fid,
            username: username,
            displayName: displayName
        }
    });
}

export const createWalletForUser = async (userid: string) => {
    const wallet = Wallet.createRandom();
    const encrypted = encryptPrivateKey(wallet.privateKey);
    return await prisma.userWallet.create({
        data: {
            userId: userid,
            address: wallet.address,
            authTag: encrypted.authTag,
            encryptedKey: encrypted.encrypted,
            iv: encrypted.iv
        }
    })
}

export const initializeEngagementBuyAmount = async (userid: string) => {
    return await prisma.buyAmount.create({
        data: {
            userId: userid
        }
    })
}

export const getUserByFID = async (fid: number): Promise<any | null> => {
    return await prisma.user.findFirst({
        where: {fid: fid },
        include: {buyAmount: true, wallet: {select: {address: true}}, token: true, linkedAccounts: true}
    })
}

export const createLinkedAccount = async ({platform, platformAccountId, userId, username}: AddLinkedAccount): Promise<LinkedAccount | null> => {
    return await prisma.linkedAccount.create({
        data: {
            accountId: platformAccountId,
            platform: platform,
            username: username,
            userId: userId,
        }
    })
}