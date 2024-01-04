/*
  Warnings:

  - You are about to drop the column `activityId` on the `ProjectMileStoneInfo` table. All the data in the column will be lost.
  - Added the required column `ProjectMileStoneId` to the `ProjectMileStoneInfo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProjectMileStoneInfo" DROP CONSTRAINT "ProjectMileStoneInfo_activityId_fkey";

-- AlterTable
ALTER TABLE "ProjectMileStoneInfo" DROP COLUMN "activityId",
ADD COLUMN     "ProjectMileStoneId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ProjectMileStoneInfo" ADD CONSTRAINT "ProjectMileStoneInfo_ProjectMileStoneId_fkey" FOREIGN KEY ("ProjectMileStoneId") REFERENCES "ProjectMileStone"("id") ON DELETE CASCADE ON UPDATE CASCADE;
