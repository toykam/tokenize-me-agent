import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const TOKEN_FACTORY_CONTRACT = process.env.TOKEN_FACTORY_CONTRACT!;
export const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY!;