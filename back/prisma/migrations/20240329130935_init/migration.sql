-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `mail` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_mail_key`(`mail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SoumissionProjets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomProjet` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `categorie` VARCHAR(191) NOT NULL,
    `budget` VARCHAR(191) NOT NULL,
    `lieu` VARCHAR(191) NOT NULL,
    `image` LONGBLOB NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PrecedentProjets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomProjet` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `categorie` VARCHAR(191) NOT NULL,
    `budget` VARCHAR(191) NOT NULL,
    `lieu` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL,
    `image` LONGBLOB NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Like` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `soumissionProjetsId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SoumissionProjets` ADD CONSTRAINT `SoumissionProjets_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_soumissionProjetsId_fkey` FOREIGN KEY (`soumissionProjetsId`) REFERENCES `SoumissionProjets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
