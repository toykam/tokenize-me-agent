-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "fid" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "displayName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "primaryAccountId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserWallet" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "encryptedKey" TEXT NOT NULL,
    "iv" TEXT NOT NULL,
    "authTag" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserWallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TokenizedAccount" (
    "id" TEXT NOT NULL,
    "tokenSymbol" TEXT NOT NULL,
    "tokenAddress" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TokenizedAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinkedAccount" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "LinkedAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "address" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "decimals" INTEGER NOT NULL,
    "totalSupply" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("address")
);

-- CreateTable
CREATE TABLE "Engagement" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tokenAddress" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "triggeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "transactionid" TEXT,

    CONSTRAINT "Engagement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TokenTransaction" (
    "id" TEXT NOT NULL,
    "tokenAddress" TEXT NOT NULL,
    "fromAddress" TEXT NOT NULL,
    "toAddress" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "txHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TokenTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_fid_key" ON "User"("fid");

-- CreateIndex
CREATE UNIQUE INDEX "User_primaryAccountId_key" ON "User"("primaryAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "UserWallet_userId_key" ON "UserWallet"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserWallet_address_key" ON "UserWallet"("address");

-- CreateIndex
CREATE UNIQUE INDEX "TokenizedAccount_tokenSymbol_key" ON "TokenizedAccount"("tokenSymbol");

-- CreateIndex
CREATE UNIQUE INDEX "TokenizedAccount_tokenAddress_key" ON "TokenizedAccount"("tokenAddress");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_primaryAccountId_fkey" FOREIGN KEY ("primaryAccountId") REFERENCES "TokenizedAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWallet" ADD CONSTRAINT "UserWallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TokenizedAccount" ADD CONSTRAINT "TokenizedAccount_tokenAddress_fkey" FOREIGN KEY ("tokenAddress") REFERENCES "Token"("address") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkedAccount" ADD CONSTRAINT "LinkedAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Engagement" ADD CONSTRAINT "Engagement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Engagement" ADD CONSTRAINT "Engagement_tokenAddress_fkey" FOREIGN KEY ("tokenAddress") REFERENCES "Token"("address") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Engagement" ADD CONSTRAINT "Engagement_transactionid_fkey" FOREIGN KEY ("transactionid") REFERENCES "TokenTransaction"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TokenTransaction" ADD CONSTRAINT "TokenTransaction_tokenAddress_fkey" FOREIGN KEY ("tokenAddress") REFERENCES "Token"("address") ON DELETE RESTRICT ON UPDATE CASCADE;
