-- AlterTable
ALTER TABLE `soumissionprojets` MODIFY `image` LONGBLOB NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `age` INTEGER NOT NULL DEFAULT 0;
