/*
  Warnings:

  - The primary key for the `precedentprojets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `precedentprojets` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `soumissionprojets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `soumissionprojets` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `userId` to the `SoumissionProjets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `precedentprojets` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `soumissionprojets` DROP PRIMARY KEY,
    ADD COLUMN `userId` INTEGER NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `SoumissionProjets` ADD CONSTRAINT `SoumissionProjets_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
