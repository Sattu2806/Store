-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "Discipline" TEXT NOT NULL,
    "Area" TEXT NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,
    "Excavation" INTEGER NOT NULL,
    "FormWork" INTEGER NOT NULL,
    "Rebar" INTEGER NOT NULL,
    "Concrete" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonthlyData" (
    "id" SERIAL NOT NULL,
    "Type" TEXT NOT NULL,
    "Month" TEXT NOT NULL,
    "Value" INTEGER NOT NULL,

    CONSTRAINT "MonthlyData_pkey" PRIMARY KEY ("id")
);
