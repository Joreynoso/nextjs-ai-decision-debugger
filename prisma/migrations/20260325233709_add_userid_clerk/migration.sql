/*
  Warnings:

  - Added the required column `userId` to the `Run` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Run" ADD COLUMN     "userId" TEXT NOT NULL;
