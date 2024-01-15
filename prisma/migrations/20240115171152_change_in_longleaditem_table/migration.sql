/*
  Warnings:

  - You are about to drop the column `category` on the `LongLeadItem` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `LongLeadItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LongLeadItem" DROP CONSTRAINT "LongLeadItem_category_fkey";

-- AlterTable
ALTER TABLE "LongLeadItem" DROP COLUMN "category",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "LongLeadItem" ADD CONSTRAINT "LongLeadItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "LongLeadItemCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
