-- AlterTable
ALTER TABLE "LinkedAccount" ADD COLUMN     "url" TEXT NOT NULL DEFAULT 'https://warpcast.com/';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "pfp" TEXT;
