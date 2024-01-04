/*
  Warnings:

  - You are about to drop the `LongLead` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "LongLead";

-- CreateTable
CREATE TABLE "ProjectMileStone" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectMileStone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectMileStoneInfo" (
    "id" SERIAL NOT NULL,
    "activityId" INTEGER NOT NULL,
    "month" INTEGER,
    "year" INTEGER,
    "barwidth" DOUBLE PRECISION,
    "barleftpostion" DOUBLE PRECISION,

    CONSTRAINT "ProjectMileStoneInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjectMileStoneInfo" ADD CONSTRAINT "ProjectMileStoneInfo_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "ProjectMileStone"("id") ON DELETE CASCADE ON UPDATE CASCADE;
