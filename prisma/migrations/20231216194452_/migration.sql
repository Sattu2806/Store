-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TotalQuantity" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "foundationType" TEXT NOT NULL,
    "totalFoundations" INTEGER NOT NULL,
    "excavationQty" DOUBLE PRECISION NOT NULL,
    "rebarQty" DOUBLE PRECISION NOT NULL,
    "concreteQty" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "TotalQuantity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyQuantity" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "excavationQty" DOUBLE PRECISION NOT NULL,
    "formWorkQty" DOUBLE PRECISION NOT NULL,
    "rebarQty" DOUBLE PRECISION NOT NULL,
    "concreteQty" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "DailyQuantity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Group_name_key" ON "Group"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TotalQuantity" ADD CONSTRAINT "TotalQuantity_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TotalQuantity" ADD CONSTRAINT "TotalQuantity_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyQuantity" ADD CONSTRAINT "DailyQuantity_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyQuantity" ADD CONSTRAINT "DailyQuantity_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
