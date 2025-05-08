/*
  Warnings:

  - You are about to drop the column `primaryAccountId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `TokenizedAccount` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Token` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Token` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TokenizedAccount" DROP CONSTRAINT "TokenizedAccount_tokenAddress_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_primaryAccountId_fkey";

-- DropIndex
DROP INDEX "User_primaryAccountId_key";

-- AlterTable
ALTER TABLE "Token" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "primaryAccountId";

-- DropTable
DROP TABLE "TokenizedAccount";

-- CreateIndex
CREATE UNIQUE INDEX "Token_userId_key" ON "Token"("userId");

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
