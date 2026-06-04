-- Create RegistrationCode table
CREATE TABLE `RegistrationCode` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(191) NOT NULL,
  `maxUses` INTEGER NOT NULL DEFAULT 1,
  `useCount` INTEGER NOT NULL DEFAULT 0,
  `createdById` INTEGER NOT NULL,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create unique index on code
CREATE UNIQUE INDEX `RegistrationCode_code_key` ON `RegistrationCode`(`code`);

-- Create index for lookups
ALTER TABLE `RegistrationCode` ADD INDEX `RegistrationCode_code_idx`(`code`);

-- Add foreign key to User table
ALTER TABLE `RegistrationCode` ADD CONSTRAINT `RegistrationCode_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
