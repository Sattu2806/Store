/*
  Warnings:

  - You are about to drop the column `deliveryToSite` on the `LongLeadItem` table. All the data in the column will be lost.
  - You are about to drop the column `finalInspection` on the `LongLeadItem` table. All the data in the column will be lost.
  - You are about to drop the column `manufacturingStatus` on the `LongLeadItem` table. All the data in the column will be lost.
  - You are about to drop the column `poStatus` on the `LongLeadItem` table. All the data in the column will be lost.
  - You are about to drop the column `prStatus` on the `LongLeadItem` table. All the data in the column will be lost.
  - You are about to drop the column `receivedQuotation` on the `LongLeadItem` table. All the data in the column will be lost.
  - You are about to drop the column `rfqStatus` on the `LongLeadItem` table. All the data in the column will be lost.
  - You are about to drop the column `technicalEvaluation` on the `LongLeadItem` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "TechnicalPR" AS ENUM ('Preparation', 'UnderApproval', 'Completed');

-- CreateEnum
CREATE TYPE "RFQ" AS ENUM ('Senttovendor', 'Pending');

-- CreateEnum
CREATE TYPE "ReceivedQuotation" AS ENUM ('Vendorselected', 'Pending');

-- CreateEnum
CREATE TYPE "PO" AS ENUM ('UnderPreparation', 'Placed', 'Pending');

-- CreateEnum
CREATE TYPE "Manufacturing" AS ENUM ('Started', 'QualityTest', 'Pending', 'Completed');

-- CreateEnum
CREATE TYPE "FinalInspection" AS ENUM ('Ongoing', 'Completed', 'Pending');

-- CreateEnum
CREATE TYPE "DeliveryToSite" AS ENUM ('UnderShipment', 'CustomClearance', 'Delivered', 'Pending');

-- AlterTable
ALTER TABLE "LongLeadItem" DROP COLUMN "deliveryToSite",
DROP COLUMN "finalInspection",
DROP COLUMN "manufacturingStatus",
DROP COLUMN "poStatus",
DROP COLUMN "prStatus",
DROP COLUMN "receivedQuotation",
DROP COLUMN "rfqStatus",
DROP COLUMN "technicalEvaluation";

-- DropEnum
DROP TYPE "DeliveryToSiteStatus";

-- DropEnum
DROP TYPE "FinalInspectionStatus";

-- DropEnum
DROP TYPE "ManufacturingStatus";

-- DropEnum
DROP TYPE "POStatus";

-- DropEnum
DROP TYPE "RFQStatus";

-- DropEnum
DROP TYPE "ReceivedQuotationStatus";

-- DropEnum
DROP TYPE "TechnicalEvaluationandPRStatus";

-- CreateTable
CREATE TABLE "TechnicalEvaluationStatus" (
    "id" SERIAL NOT NULL,
    "status" "TechnicalPR" NOT NULL,
    "longleadId" INTEGER NOT NULL,

    CONSTRAINT "TechnicalEvaluationStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PRStatus" (
    "id" SERIAL NOT NULL,
    "status" "TechnicalPR" NOT NULL,
    "longleadId" INTEGER NOT NULL,

    CONSTRAINT "PRStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RFQStatus" (
    "id" SERIAL NOT NULL,
    "status" "RFQ" NOT NULL,
    "longleadId" INTEGER NOT NULL,

    CONSTRAINT "RFQStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReceivedQuotationStatus" (
    "id" SERIAL NOT NULL,
    "status" "ReceivedQuotation" NOT NULL,
    "longleadId" INTEGER NOT NULL,

    CONSTRAINT "ReceivedQuotationStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "POStatus" (
    "id" SERIAL NOT NULL,
    "status" "PO" NOT NULL,
    "longleadId" INTEGER NOT NULL,

    CONSTRAINT "POStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ManufacturingStatus" (
    "id" SERIAL NOT NULL,
    "status" "Manufacturing" NOT NULL,
    "longleadId" INTEGER NOT NULL,

    CONSTRAINT "ManufacturingStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinalInspectionStatus" (
    "id" SERIAL NOT NULL,
    "status" "FinalInspection" NOT NULL,
    "longleadId" INTEGER NOT NULL,

    CONSTRAINT "FinalInspectionStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeliveryToSiteStatus" (
    "id" SERIAL NOT NULL,
    "status" "DeliveryToSite" NOT NULL,
    "longleadId" INTEGER NOT NULL,

    CONSTRAINT "DeliveryToSiteStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TechnicalEvaluationStatus_longleadId_key" ON "TechnicalEvaluationStatus"("longleadId");

-- CreateIndex
CREATE UNIQUE INDEX "PRStatus_longleadId_key" ON "PRStatus"("longleadId");

-- CreateIndex
CREATE UNIQUE INDEX "RFQStatus_longleadId_key" ON "RFQStatus"("longleadId");

-- CreateIndex
CREATE UNIQUE INDEX "ReceivedQuotationStatus_longleadId_key" ON "ReceivedQuotationStatus"("longleadId");

-- CreateIndex
CREATE UNIQUE INDEX "POStatus_longleadId_key" ON "POStatus"("longleadId");

-- CreateIndex
CREATE UNIQUE INDEX "ManufacturingStatus_longleadId_key" ON "ManufacturingStatus"("longleadId");

-- CreateIndex
CREATE UNIQUE INDEX "FinalInspectionStatus_longleadId_key" ON "FinalInspectionStatus"("longleadId");

-- CreateIndex
CREATE UNIQUE INDEX "DeliveryToSiteStatus_longleadId_key" ON "DeliveryToSiteStatus"("longleadId");

-- AddForeignKey
ALTER TABLE "TechnicalEvaluationStatus" ADD CONSTRAINT "TechnicalEvaluationStatus_longleadId_fkey" FOREIGN KEY ("longleadId") REFERENCES "LongLeadItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PRStatus" ADD CONSTRAINT "PRStatus_longleadId_fkey" FOREIGN KEY ("longleadId") REFERENCES "LongLeadItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RFQStatus" ADD CONSTRAINT "RFQStatus_longleadId_fkey" FOREIGN KEY ("longleadId") REFERENCES "LongLeadItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceivedQuotationStatus" ADD CONSTRAINT "ReceivedQuotationStatus_longleadId_fkey" FOREIGN KEY ("longleadId") REFERENCES "LongLeadItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "POStatus" ADD CONSTRAINT "POStatus_longleadId_fkey" FOREIGN KEY ("longleadId") REFERENCES "LongLeadItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManufacturingStatus" ADD CONSTRAINT "ManufacturingStatus_longleadId_fkey" FOREIGN KEY ("longleadId") REFERENCES "LongLeadItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinalInspectionStatus" ADD CONSTRAINT "FinalInspectionStatus_longleadId_fkey" FOREIGN KEY ("longleadId") REFERENCES "LongLeadItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryToSiteStatus" ADD CONSTRAINT "DeliveryToSiteStatus_longleadId_fkey" FOREIGN KEY ("longleadId") REFERENCES "LongLeadItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
