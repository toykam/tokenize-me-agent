-- CreateTable
CREATE TABLE "BuyAmount" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "likeAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "retweetAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BuyAmount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BuyAmount_userId_key" ON "BuyAmount"("userId");

-- AddForeignKey
ALTER TABLE "BuyAmount" ADD CONSTRAINT "BuyAmount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
