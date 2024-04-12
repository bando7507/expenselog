/*
  Warnings:

  - Added the required column `sticker` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` ADD COLUMN `sticker` VARCHAR(191) NOT NULL;
