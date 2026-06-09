-- Add extra user fields for frontend compatibility
ALTER TABLE `User` ADD COLUMN `freeFlag` BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN `hotspotsOptOut` BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN `showDiscord` BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN `rulesRead` BOOLEAN NOT NULL DEFAULT false;
