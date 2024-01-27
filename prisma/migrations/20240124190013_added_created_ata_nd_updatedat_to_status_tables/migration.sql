/*
  Warnings:

  - Added the required column `updatedAt` to the `DeliveryToSiteStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `FinalInspectionStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ManufacturingStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `POStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `PRStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `RFQStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ReceivedQuotationStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TechnicalEvaluationStatus` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DeliveryToSiteStatus" DROP CONSTRAINT "DeliveryToSiteStatus_longleadId_fkey";

-- DropForeignKey
ALTER TABLE "FinalInspectionStatus" DROP CONSTRAINT "FinalInspectionStatus_longleadId_fkey";

-- DropForeignKey
ALTER TABLE "ManufacturingStatus" DROP CONSTRAINT "ManufacturingStatus_longleadId_fkey";

-- DropForeignKey
ALTER TABLE "POStatus" DROP CONSTRAINT "POStatus_longleadId_fkey";

-- DropForeignKey
ALTER TABLE "PRStatus" DROP CONSTRAINT "PRStatus_longleadId_fkey";

-- DropForeignKey
ALTER TABLE "RFQStatus" DROP CONSTRAINT "RFQStatus_longleadId_fkey";

-- DropForeignKey
ALTER TABLE "ReceivedQuotationStatus" DROP CONSTRAINT "ReceivedQuotationStatus_longleadId_fkey";

-- DropForeignKey
ALTER TABLE "TechnicalEvaluationStatus" DROP CONSTRAINT "TechnicalEvaluationStatus_longleadId_fkey";

-- AlterTable
ALTER TABLE "DeliveryToSiteStatus" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "FinalInspectionStatus" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ManufacturingStatus" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "POStatus" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "PRStatus" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "RFQStatus" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ReceivedQuotationStatus" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "TechnicalEvaluationStatus" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "TechnicalEvaluationStatus" ADD CONSTRAINT "TechnicalEvaluationStatus_longleadId_fkey" FOREIGN KEY ("longleadId") REFERENCES "LongLeadItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PRStatus" ADD CONSTRAINT "PRStatus_longleadId_fkey" FOREIGN KEY ("longleadId") REFERENCES "LongLeadItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RFQStatus" ADD CONSTRAINT "RFQStatus_longleadId_fkey" FOREIGN KEY ("longleadId") REFERENCES "LongLeadItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceivedQuotationStatus" ADD CONSTRAINT "ReceivedQuotationStatus_longleadId_fkey" FOREIGN KEY ("longleadId") REFERENCES "LongLeadItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "POStatus" ADD CONSTRAINT "POStatus_longleadId_fkey" FOREIGN KEY ("longleadId") REFERENCES "LongLeadItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManufacturingStatus" ADD CONSTRAINT "ManufacturingStatus_longleadId_fkey" FOREIGN KEY ("longleadId") REFERENCES "LongLeadItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinalInspectionStatus" ADD CONSTRAINT "FinalInspectionStatus_longleadId_fkey" FOREIGN KEY ("longleadId") REFERENCES "LongLeadItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryToSiteStatus" ADD CONSTRAINT "DeliveryToSiteStatus_longleadId_fkey" FOREIGN KEY ("longleadId") REFERENCES "LongLeadItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
