/*
  Warnings:

  - You are about to drop the column `barleftpostion` on the `ProjectMileStoneInfo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProjectMileStoneInfo" DROP COLUMN "barleftpostion",
ADD COLUMN     "barleftposition" DOUBLE PRECISION;
