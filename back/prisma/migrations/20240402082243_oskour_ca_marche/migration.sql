-- AlterTable
ALTER TABLE `soumissionprojets` MODIFY `image` LONGBLOB NULL;

-- CreateTable
CREATE TABLE `Like` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `soumissionProjetsId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_soumissionProjetsId_fkey` FOREIGN KEY (`soumissionProjetsId`) REFERENCES `SoumissionProjets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
