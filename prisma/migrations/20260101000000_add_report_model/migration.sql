-- Create Report table
CREATE TABLE `Report` (
  `id` VARCHAR(191) NOT NULL,
  `ticketId` VARCHAR(191) NOT NULL,
  `userId` INTEGER NOT NULL,
  `reason` VARCHAR(191) NOT NULL,
  `notes` MEDIUMTEXT NOT NULL,
  `image` LONGBLOB NULL,
  `latitude` DOUBLE PRECISION NULL,
  `longitude` DOUBLE PRECISION NULL,
  `zoom` INTEGER NULL,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Add foreign keys
ALTER TABLE `Report` ADD INDEX `Report_ticketId_idx`(`ticketId`);
ALTER TABLE `Report` ADD INDEX `Report_userId_idx`(`userId`);
ALTER TABLE `Report` ADD CONSTRAINT `Report_ticketId_fkey` FOREIGN KEY (`ticketId`) REFERENCES `Ticket`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `Report` ADD CONSTRAINT `Report_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Migrate data from Ticket to Report
INSERT INTO `Report` (`id`, `ticketId`, `userId`, `reason`, `notes`, `image`, `latitude`, `longitude`, `zoom`, `createdAt`)
SELECT CONCAT('mig-', `id`), `id`, `userId`, `reason`, `notes`, `imageBase64`, `latitude`, `longitude`, `zoom`, `createdAt`
FROM `Ticket`
WHERE `reason` IS NOT NULL;

-- Drop old columns from Ticket
ALTER TABLE `Ticket` DROP COLUMN `zoom`,
                    DROP COLUMN `reason`,
                    DROP COLUMN `notes`,
                    DROP COLUMN `severe`;