import { BuyAmount, LinkedAccount, UserWallet } from "@/generated/prisma"

export interface User {
    wallet: UserWallet | undefined,
    id: string,
    buyAmount?: BuyAmount,
    token?: Token,
    pfp?: string,
    linkedAccounts: LinkedAccount[],
    displayName: string,
    fid: string,
    username: string,
}


export type Token = {
    readonly user?:      User;
    readonly address?:   string;
    readonly name?:      string;
    readonly decimals?:  number;
    readonly symbol?:    string;
    readonly _count?:    Count;
    readonly createdAt?: Date;
}

export type Count = {
    readonly Engagement?:   number;
    readonly transactions?: number;
}