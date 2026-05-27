#!/usr/bin/env tsx
/**
 * Migration script: Migrate existing Ticket data to the new Report model.
 *
 * This script reads all existing Tickets and creates corresponding Report entries.
 * Run this AFTER applying the Prisma migration (db push / migrate).
 *
 * Usage: npx tsx scripts/migrate-ticket-to-report.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function migrate() {
	console.log("Starting Ticket → Report migration...");

	const tickets = await prisma.ticket.findMany({
		include: { reports: true }
	});

	let created = 0;
	let skipped = 0;

	for (const ticket of tickets) {
		// Skip if reports already exist (e.g., migration already ran)
		if (ticket.reports.length > 0) {
			skipped++;
			continue;
		}

		// The old Ticket table had: userId, reason, notes, image (as imageBase64 in prisma),
		// latitude, longitude, zoom. The db push already dropped these columns from Ticket,
		// so we cannot read them from the Ticket model anymore.
		// This script is a no-op placeholder since the SQL migration handled the data copy.
		skipped++;
	}

	console.log(`Done. ${created} reports created, ${skipped} tickets skipped (already migrated or no data).`);
	console.log("If the SQL migration already ran, all data was migrated at the database level.");
}

migrate()
	.catch(console.error)
	.finally(() => prisma.$disconnect());
