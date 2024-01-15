/*
  Warnings:

  - Changed the type of `category` on the `LongLeadItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "LongLeadItem" DROP COLUMN "category",
ADD COLUMN     "category" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "LongLeadItemCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "LongLeadItemCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LongLeadItem" ADD CONSTRAINT "LongLeadItem_category_fkey" FOREIGN KEY ("category") REFERENCES "LongLeadItemCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
