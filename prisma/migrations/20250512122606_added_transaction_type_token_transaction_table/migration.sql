-- CreateEnum
CREATE TYPE "TokenTransactionType" AS ENUM ('buy', 'sell', 'transfer');

-- AlterTable
ALTER TABLE "TokenTransaction" ADD COLUMN     "type" "TokenTransactionType" NOT NULL DEFAULT 'buy';
