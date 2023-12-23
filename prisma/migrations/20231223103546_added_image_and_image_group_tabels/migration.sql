-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slideActive" BOOLEAN NOT NULL DEFAULT false,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ImageGroup_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "ImageGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
