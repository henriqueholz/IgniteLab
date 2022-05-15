/*
  Warnings:

  - You are about to drop the column `ProductId` on the `Purchase` table. All the data in the column will be lost.
  - The `status` column on the `Purchase` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `productId` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Made the column `customerId` on table `Purchase` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "PurchaseStatus" AS ENUM ('PENDING', 'APPROVED', 'FAILED');

-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_ProductId_fkey";

-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_customerId_fkey";

-- AlterTable
ALTER TABLE "Purchase" DROP COLUMN "ProductId",
ADD COLUMN     "productId" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "PurchaseStatus" NOT NULL DEFAULT E'PENDING',
ALTER COLUMN "customerId" SET NOT NULL;

-- DropEnum
DROP TYPE "PuchaseStatus";

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
