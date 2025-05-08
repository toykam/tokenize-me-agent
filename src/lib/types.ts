import { BuyAmount, LinkedAccount, Token, UserWallet } from "@/generated/prisma"

export interface User {
    wallet: UserWallet | undefined,
    id: string,
    buyAmount?: BuyAmount,
    token?: Token,
    linkedAccounts: LinkedAccount[],
    displayName: string,
    fid: string,
    username: string
}