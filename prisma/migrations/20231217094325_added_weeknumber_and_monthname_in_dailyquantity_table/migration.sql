/*
  Warnings:

  - Added the required column `MonthName` to the `DailyQuantity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `WeekNumber` to the `DailyQuantity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DailyQuantity" ADD COLUMN     "MonthName" TEXT NOT NULL,
ADD COLUMN     "WeekNumber" INTEGER NOT NULL;
