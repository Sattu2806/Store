-- CreateTable
CREATE TABLE "ManpowerData" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "Trade" TEXT NOT NULL,
    "Year" INTEGER NOT NULL,
    "Month" TEXT NOT NULL,
    "Nos" INTEGER NOT NULL,

    CONSTRAINT "ManpowerData_pkey" PRIMARY KEY ("id")
);
