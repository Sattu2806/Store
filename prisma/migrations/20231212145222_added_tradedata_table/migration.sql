-- CreateTable
CREATE TABLE "TradeData" (
    "id" SERIAL NOT NULL,
    "Type" TEXT NOT NULL,
    "Trade" TEXT NOT NULL,
    "Month" TEXT NOT NULL,
    "Value" INTEGER NOT NULL,

    CONSTRAINT "TradeData_pkey" PRIMARY KEY ("id")
);
