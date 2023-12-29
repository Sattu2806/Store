/*
  Warnings:

  - You are about to drop the `DailyQuantity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ManpowerData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TotalQuantity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DailyQuantity" DROP CONSTRAINT "DailyQuantity_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "DailyQuantity" DROP CONSTRAINT "DailyQuantity_groupId_fkey";

-- DropForeignKey
ALTER TABLE "TotalQuantity" DROP CONSTRAINT "TotalQuantity_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "TotalQuantity" DROP CONSTRAINT "TotalQuantity_groupId_fkey";

-- DropTable
DROP TABLE "DailyQuantity";

-- DropTable
DROP TABLE "ManpowerData";

-- DropTable
DROP TABLE "TotalQuantity";

-- CreateTable
CREATE TABLE "resourceData" (
    "id" SERIAL NOT NULL,
    "Group" TEXT,
    "category" TEXT NOT NULL,
    "Trade" TEXT NOT NULL,
    "Year" INTEGER NOT NULL,
    "Month" TEXT NOT NULL,
    "Nos" INTEGER NOT NULL,

    CONSTRAINT "resourceData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TotalScope" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "foundationType" TEXT NOT NULL,
    "totalFoundations" INTEGER NOT NULL,
    "excavationQty" DOUBLE PRECISION NOT NULL,
    "rebarQty" DOUBLE PRECISION NOT NULL,
    "concreteQty" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "TotalScope_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyProductivity" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "excavationQty" DOUBLE PRECISION NOT NULL,
    "formWorkQty" DOUBLE PRECISION NOT NULL,
    "rebarQty" DOUBLE PRECISION NOT NULL,
    "concreteQty" DOUBLE PRECISION NOT NULL,
    "WeekNumber" INTEGER NOT NULL,
    "MonthName" TEXT NOT NULL,

    CONSTRAINT "DailyProductivity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TotalScope" ADD CONSTRAINT "TotalScope_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TotalScope" ADD CONSTRAINT "TotalScope_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyProductivity" ADD CONSTRAINT "DailyProductivity_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyProductivity" ADD CONSTRAINT "DailyProductivity_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
