import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: any, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(Number(value));
}

export function toMoneyFormat(value: any) {
  return Number(value).toLocaleString('en-US');
}

export const TOKEN_FACTORY_CONTRACT = process.env.TOKEN_FACTORY_CONTRACT!;
export const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY!;
export const DEX_CONTRACT = process.env.DEX_CONTRACT!;
export const NEYNAR_MENTION_WEBHOOK_SECRET = process.env.NEYNAR_MENTION_WEBHOOK_SECRET!;
export const NEYNAR_ENGAGEMENT_WEBHOOK_SECRET = process.env.NEYNAR_ENGAGEMENT_WEBHOOK_SECRET!;
export const ENGAGEMENT_WEBHOOK_ID = process.env.NEYNAR_ENGAGEMENT_WEBHOOK_ID!;
export const LP_LOCKER_CONTRACT = process.env.LP_LOCKER_CONTRACT!;