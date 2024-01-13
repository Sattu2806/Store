-- CreateEnum
CREATE TYPE "TechnicalEvaluationandPRStatus" AS ENUM ('Preparation', 'UnderApproval', 'Completed');

-- CreateEnum
CREATE TYPE "RFQStatus" AS ENUM ('Senttovendor', 'Pending');

-- CreateEnum
CREATE TYPE "ReceivedQuotationStatus" AS ENUM ('Vendorselected', 'Pending');

-- CreateEnum
CREATE TYPE "POStatus" AS ENUM ('UnderPreparation', 'Placed', 'Pending');

-- CreateEnum
CREATE TYPE "ManufacturingStatus" AS ENUM ('Started', 'QualityTest', 'Pending', 'Completed');

-- CreateEnum
CREATE TYPE "FinalInspectionStatus" AS ENUM ('Ongoing', 'Completed', 'Pending');

-- CreateEnum
CREATE TYPE "DeliveryToSiteStatus" AS ENUM ('UnderShipment', 'CustomClearance', 'Delivered', 'Pending');

-- CreateTable
CREATE TABLE "LongLeadItem" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "vendor" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "unit" TEXT NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "requiredAtSiteDate" TIMESTAMP(3) NOT NULL,
    "deliveryMode" TEXT NOT NULL,
    "technicalEvaluation" "TechnicalEvaluationandPRStatus",
    "prStatus" "TechnicalEvaluationandPRStatus",
    "rfqStatus" "RFQStatus",
    "receivedQuotation" "ReceivedQuotationStatus",
    "poStatus" "POStatus",
    "manufacturingStatus" "ManufacturingStatus",
    "finalInspection" "FinalInspectionStatus",
    "deliveryToSite" "DeliveryToSiteStatus",

    CONSTRAINT "LongLeadItem_pkey" PRIMARY KEY ("id")
);
