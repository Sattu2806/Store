-- CreateTable
CREATE TABLE "LongLead" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LongLead_pkey" PRIMARY KEY ("id")
);
