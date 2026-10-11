# API Route Reference

## Ticket / Report System

| Route | Method | Description | Response |
|---|---|---|---|
| `/staff/tickets/get` | GET | All open tickets | `{ tickets: [{ id, status, createdAt, assignedUser: {id,name,picture}, reportedUser: {id,name,picture,role,allianceId,allianceName}, reports: [{ id, reason, description, reportedLatitude, reportedLongitude, imageUrl, createdAt, reportedBy: {id,name} }] }] }` |
| `/staff/tickets/set-status` | POST | Handle a ticket | body: `{ ticketId, status, selectedReportId, assignedReason }` |
| `/staff/tickets/open_count` | GET | Count open tickets | `{ tickets: count }` |
| `/staff/tickets/closed-today` | GET | Today's closing stats | `{ closedTotal, ignored, timeouts, bans, rclosedTotal, rignored, rtimeouts, rbans }` |
| `/staff/tickets/assign` | POST | Assign ticket (stub) | `{ newTicketsIds: [] }` |
| `/staff/tickets/translate` | POST | Translate text (stub) | body: `{ text }` -> `{ translation }` |

## User Tickets

| Route | Method | Description |
|---|---|---|
| `/staff/dashboard/users/tickets?userId&kind=sent\|against\|handled&page&pageSize` | GET | User-dimension tickets (kind: sent=my reports, against=reports on me, handled=tickets I moderated) |
| `/staff/dashboard/users/tickets/stats?id=` | GET | User ticket stats: `{ closedTotal, ignored, timeouts, bans, rclosedTotal, ... }` |
| `/staff/dashboard/users/ban` | POST | Ban user(s): `{ userIds, reason, notes }` |
| `/staff/dashboard/users/timeout` | POST | Timeout user(s): `{ userIds, reason, notes }` |

## Dashboard Summary

| Route | Method | Description |
|---|---|---|
| `/staff/dashboard/summary/counters/tickets` | GET | Open tickets by reason: `{ doxxing:N, inappropriate_content:N, hate_speech:N, bot:N, other:N, griefing:N, total_open_tickets:N }` (resolution=null only, categorized by first report's reason) |
| `/staff/dashboard/summary/counters/reports` | GET | Same format, reports under resolution=null tickets |
| `/staff/dashboard/summary/users/ban` | POST | Batch ban + UserNote |
| `/staff/dashboard/summary/users/timeout` | POST | Batch timeout + UserNote |
| `/staff/dashboard/summary/users/unban` | POST | Batch unban |
| `/staff/dashboard/summary/users/increment-droplet` | POST | Add/remove droplets |

## Alliance

| Route | Method | Response |
|---|---|---|
| `GET /staff/dashboard/alliances/:id` | GET | `{ id, name, pixelsPainted, membersCount }` |
| `GET /staff/dashboard/alliances/:id/full` | GET | Full info: `{ id, name, description, hqLatitude, hqLongitude, pixelsPainted, members: [{..., lastPixelLatitude, lastPixelLongitude, lastPixelPaintedAt}], bannedUsers, createdAt, updatedAt, membersCount, ownerId, ownerName }` |
| `GET /staff/dashboard/alliances/search?q=` | GET | `[{ id, name, pixelsPainted }]` **(register BEFORE `/:id`!)** |
| `POST /staff/dashboard/alliances/:id/members/:userId/role` | POST | body: `{ role: 'owner'\|'admin'\|'member' }` |
| `POST /staff/dashboard/alliances/:id/ban-all` | POST | (stub) body: `{ reason, notes }` |
| `POST /staff/dashboard/alliances/:id/members/:userId/remove` | POST | -> 200 |

## Appeals

| Route | Method | Description |
|---|---|---|
| `POST /report/appeal` | POST | User submits appeal: `{ message }` |
| `GET /staff/appeals/get` | GET | Pending appeals: `[{ id, notes, createdAt, user: {id,name,picture,role,pixelsPainted,reportedCount,timeoutCount,allianceId,allianceName,lastTimeoutReason,timeoutUntil,lastLatitude,lastLongitude} }]` **(field name is 'notes', not 'message'!)** |
| `POST /staff/appeals/:id/handle` | POST | body: `{ approved: boolean }` |
| `GET /staff/appeals/tickets` | GET | Appealing user's ticket history |
| `GET /staff/appeals/open_count` | GET | Pending appeal count |
| `POST /staff/appeals/assign` | POST | (stub) |
| `POST /staff/appeals/translate` | POST | (stub) body: `{ text }` -> `{ translation }` |
| `GET\|POST /staff/appeals/notes` | GET/POST | User notes CRUD |
| `GET /me/last-appeal` | GET | User's last appeal timestamp |

## KPI

| Route | Method | Response |
|---|---|---|
| `GET /staff/dashboard/kpi/tickets` | GET | `{ current: { openCount, solvedCount, totalCount, ignoredCount, timeoutCount, banCount, overturnedCount, duplicatesCount, solvedRatePct, ignoredRatePct, timeoutRatePct, banRatePct, overturnedRatePct, duplicatesRatePct, reportedUsersRatePct, timeToSolve: {avgMs, medianMs, p95Ms}, backlogAging: {openGt1h, openGt24h, openGt7d} }, previous: {...}, series: [{bucketUtc, openCount,...}] }` |
| `GET /staff/dashboard/kpi/closed-tickets` | GET | `[{ user: {id,name,role,picture,allianceId}, total, ban, ignored, timeout, suspensionRate }]` |
| `GET /staff/dashboard/kpi/closed-reports` | GET | Same format |
| `GET /staff/dashboard/team/closed-tickets` | GET | Team-level stats |
| `GET /staff/dashboard/team/closed-reports` | GET | Team-level stats |
| `GET /staff/dashboard/ban-appeals/see` | GET | Moderator ban/ignore stats |

> **Important:** `reportedUsersRatePct = (uniqueReporters / totalTickets) * 100` must be included in KPI tickets response.

## Audit Log

| Route | Method | Query Params |
|---|---|---|
| `GET /staff/dashboard/audit-logs/see` | GET | `actorUserId, targetUserId, action, limit, offset, sortKey, sortDir` |

Actions: `BAN_WAVE`, `MANUAL_BAN`, `MANUAL_TIMEOUT`, `MANUAL_CHANGE_DROPLETS`, `MANUAL_REMOVE_BAN`, `DELETE_ALL_SESSIONS`, `PERMISSIONS_UPDATE`, `CHANGE_USERNAME`, `ACCEPT_APPEAL`, `DENY_APPEAL`, etc.

## Ban Wave

| Route | Method | Response |
|---|---|---|
| `GET /staff/dashboard/ban-waves/see` | GET | `{ nextBanWaveAt, banWaves: [{id,executedByUserId,executedByName,totalBans,createdAt}] }` |
| `POST /staff/dashboard/ban-waves/execute` | POST | No body, executes ban wave |

> Requires `BanWave` table (not yet implemented).

## Anticheat Dashboard

| Route | Method | Response |
|---|---|---|
| `GET /staff/dashboard/anticheat/stats?from&to` | GET | `{ challengeTimeline, challengeTimelineByCategory, signalBreakdown, isolatedSignals, triggeredByTier[], usersWithChallenges }` |
| `GET /staff/dashboard/anticheat/signals?from&to` | GET | `{ timeline, topSignals, paintRequests }` |
| `GET /staff/dashboard/anticheat/user/:userId?from&to` | GET | `{ recentSignals, signalSummary, signalTimeline, challenges }` |

Signal categories:
| Prefix | Category |
|---|---|
| `behavioral_*` | Behavioral |
| `device_*` | Device |
| `network_*` | Network |
| `pawtect_*` | Pawtect |
| `captcha_*` | Captcha |
| `wasm_telemetry_*` | WASM |
| `ip_*` / `session_*` / `fingerprint_*` | Historical |
| `reported_*` / `alliance_reported_*` | Reports |
| other | Other |

Challenge tiers: 1=PoW, 2=Turnstile, 3=hCaptcha, 4=OTP

## Notification

| Route | Method | Notes |
|---|---|---|
| Various notification routes | - | **Frontend IGNORES title/message!** Uses hardcoded translations by `type`. Types: `report_feedback`, `appeal_feedback`. For appeal_feedback: `data.approved` determines the message. |

## Additional /me Endpoints

| Route | Method | Response |
|---|---|---|
| `/me/email` | GET | `{ email }` |
| `/me/pixels-painted-today` | GET | `{ paintedToday: number }` |
| `/me/suspension` | GET | `{ active, kind, reason }` |
| `/me/rules/read` | POST | `{ success: true }` |

## User Info Detail (/staff/dashboard/users/info)

Returns: `timeout_until`, `timeout_reason`, `banned`, `reported_times`, `timeouts_count`, `same_ip_accounts`, `pixels_painted`, `last_pixel_latitude`, `last_pixel_longitude`, `associated_accounts_number`, `associated_accounts`, `email` (if permitted).

Role-based access controlled by `staff.dashboard.*` permission identifiers.
