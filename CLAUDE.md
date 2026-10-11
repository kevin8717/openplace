# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Openplace is a reverse-engineered, unofficial open-source backend for [wplace.live](https://wplace.live) — a collaborative pixel-art canvas where users place colored pixels on a global map.

Three code surfaces:

| Directory | What it is |
|-----------|------------|
| `src/` | Backend — TypeScript, [tinyhttp](https://github.com/tinyhttp/tinyhttp), Prisma ORM (MariaDB/MySQL) |
| `frontend/` | **Git submodule** from `github.com/openplaceteam/frontend` — the original wplace SvelteKit frontend, built as static output. Handles **ALL features except login**. Served by `sirv`. |
| `frontend2/` | Nuxt 3 (Vue 3) + PrimeVue 4 + MapLibre GL. **Only** login/register pages and new features not in the original wplace. pnpm workspace member. |

Detailed docs:
- `.opencode/memory/api-routes.md` — full API route reference (staff dashboard, tickets, appeals, anticheat, KPI)
- `.opencode/memory/store-system.md` — store/cosmetic/payment system reference
- `docs/protocol.md` — protocol documentation (Chinese)

## Common commands

```bash
# Development
pnpm dev                    # Backend: tsx watch src (with --expose-gc)
cd frontend2 && pnpm dev    # Nuxt dev server
pnpm build                  # TypeScript compilation (tsc)

# Linting
pnpm lint                   # tsc --noEmit && eslint src/ scripts/
pnpm lint:fix               # eslint --fix src/ scripts/
cd frontend2 && pnpm lint   # Lint frontend files

# Database (Prisma)
pnpm db:push          # Push schema directly to DB (no migration)
pnpm db:generate      # Regenerate Prisma client — run after any schema change
pnpm db:deploy        # Apply pending migrations
pnpm db:dev           # Create and apply a new migration from schema changes

# Scripts
pnpm setup                  # First-time setup wizard
pnpm clear-pixels           # Clear all pixel data
pnpm export-user-pixels     # Export user pixel data
pnpm send-system-notification  # Send a system-wide notification

# Docker
docker compose up -d        # MariaDB + backend + frontend2
```

**Package manager is pnpm (≥10), Node ≥22. Never use npm or yarn.**

## Architecture

### Request flow

```
src/index.ts
  ├── TZ = "Asia/Shanghai" (align new Date() with MariaDB server time)
  ├── IP normalisation (cf-connecting-ip → x-forwarded-for → remoteAddress)
  ├── cookieParser (JWT in cookie "j")
  ├── Conditional JSON body parsing (skips GET/HEAD, multipart; falls back to json parser for empty content-type)
  ├── CORS (dynamic origin, credentials enabled)
  ├── /api prefix strip (/api/* → /*)
  ├── Route registration → src/routes/*.ts
  │     ├── authMiddleware / optionalAuthMiddleware (JWT → Session table)
  │     └── Service calls in try/catch → handleServiceError(error, res)
  ├── Proxy: /login, /beta, /admin/*, /flags/*, /_nuxt/* → frontend2 (FRONTEND_HOST:FRONTEND_PORT)
  └── Static files: sirv serves frontend/ (original wplace SvelteKit build)
```

The backend is a monolithic tinyhttp server. Each route file exports a default function `(app: App) => void` that registers its paths. The Prisma client is a cached global singleton — always import `prisma` from `src/config/database.ts`.

### Directory roles

| Directory | Purpose |
|-----------|---------|
| `src/routes/` | HTTP route definitions — thin handlers, delegate to services |
| `src/services/` | Business logic: pixel painting, auth, leaderboard, alliances, region stats, moderation |
| `src/middleware/` | `authMiddleware` / `optionalAuthMiddleware`, `handleServiceError` (switch on `error.message`), time middleware |
| `src/config/` | Env-derived constants: JWT secret, Prisma singleton (auto-appends `connection_limit=10&timezone=+08:00`), pixel level formula, email |
| `src/utils/` | Pure helpers: 64-color palette (0–31 free, 32–63 paid/unlockable via bitmap), coordinate math, bitmap, country lookup, `createErrorResponse`, `ValidationError` |
| `src/types/` | `AuthenticatedRequest`, `ColorPalette`, enums (`UserRole`, `BanReason`, `TicketResolution`) |
| `src/validators/` | Hand-written validation functions (return `string | null`). **Project instruction says to use Zod going forward**, but Zod is not yet integrated. |
| `src/discord/` | Discord bot — syncs guild roles to grant reduced pixel cooldowns |
| `scripts/` | One-off CLI scripts: setup wizard, data migration, export, IP list import |
| `prisma/` | `schema.prisma` + migration history (`prisma/migrations/`) |

### Key patterns

- **Auth**: JWT in cookie `j`. `authMiddleware` rejects unauthenticated; `optionalAuthMiddleware` attaches `req.user` (id, sessionId, role) but allows anonymous. Token verified against `Session` table (checks expiry, userId match).
- **Error responses**: Services throw `Error` with a specific message string. Routes catch with `handleServiceError(error, res)` from `src/middleware/errorHandler.ts` — a switch-case mapping message strings to HTTP status codes and JSON responses. Use `throw new ValidationError("message")` for 400 errors.
- **Error response format**: `createErrorResponse(message, status)` returns `{ error: string, status: number }`. Also used directly with plain objects like `{ error: "banned" }`, `{ error: "refresh" }`, `{ error: "timeout" }`, `{ error: "color-not-owned" }`.
- **Rate limiting**: In-memory, keyed by IP or userId (`src/services/rate-limiter.ts`). Toggled via `ENABLE_RATE_LIMIT` env. Individual limits configured per feature (login, signup, password reset, paint).
- **Time zone**: Process TZ forced to `Asia/Shanghai` at startup; DATABASE_URL auto-appends `timezone=+08:00` and `connection_limit=10`. This ensures `new Date()` and MariaDB `NOW()` align.
- **Service classes**: Most services are instantiated classes (e.g. `new PixelService(prisma)`, `new UserService(prisma)`) taking Prisma as a constructor parameter. Two are exported as pre-built singletons: `leaderboardService` and `rateLimiter`.

### Database model highlights

- **`Pixel`**: Composite PK `(season, tileX, tileY, x, y)`. Each pixel is a coordinate within a 256×256 tile. Index: `(paintedBy, paintedAt)`.
- **`Tile`**: Pre-rendered tile images (`imageData` BLOB), unique on `(season, x, y)`.
- **`User`**: Cosmetic ownership stored as JSON strings (`ownedFrames`, `ownedFonts`, `ownedStyles` as `"[]"`; `equippedBadges` as `"[id0,id1,id2]"`). When returning to frontend, `equippedBadges` must be resolved to full badge objects. See `.opencode/memory/store-system.md`.
- **`LeaderboardView`**: Materialized leaderboard, refreshed every 1 minute via `leaderboardService.warmupGlobalLeaderboards()`.
- **`UserRegionStats`** / **`UserRegionStatsDaily`**: Power regional leaderboards. Unique on `(userId, regionCityId, regionCountryId, allianceId, timePeriod/date)`.
- **`Ticket` → `Report` → `Appeal` → `TicketReversal`**: Full moderation pipeline. See `.opencode/memory/api-routes.md`.
- Cosmetics: `Frame`, `FontCosmetic`, `StyleCosmetic` (shop), `Badge` — all with `rarity`, `value` (price in droplets), `purchasable`.

### Frontend integration

- `frontend/` is a **git submodule** (original wplace SvelteKit static build). Handles entire canvas, alliances, leaderboards, store — everything except login.
- `frontend2/` is a Nuxt 3 SPA that provides only login/register and new features. Backend proxies `/login`, `/beta`, `/admin/*`, `/flags/*`, `/_nuxt/*` to it.
- All other requests fall through to `sirv` serving `frontend/` as static files.
- Ports are configured via `BACKEND_PORT` (backend, default 3000), `FRONTEND_PORT` / `FRONTEND_HOST` (proxy target, default `localhost:3001`). **Note:** `.env.example` uses `PORT` but the code reads `BACKEND_PORT` — make sure they match.

### Deployment

- **PM2**: `ecosystem.config.cjs` — memory-based restart at 768 MB, auto-restart with exponential backoff.
- **GitHub Actions**: Push to `v2.0` branch → rsync `src/` to Linux server via SSH → `docker restart openplace-app-1`.
- **Docker Compose**: MariaDB 12 + Node 22 Alpine (backend, `tsx src`) + Node 22 Alpine (frontend2, `nuxt build && node .output/server/index.mjs`).

## Reverse engineering

When working with the original wplace frontend, examine JS files in `frontend/_app/immutable/` to determine expected API shapes. The protocol is reverse-documented in `docs/protocol.md` (Chinese).

## Code conventions

- **Indentation**: Tabs, LF (`.editorconfig`)
- **Linting**: `eslint-config-chariz` + `@tsconfig/node24` + `@tsconfig/strictest`
- **Pre-commit** (lint-staged): `eslint --fix` on staged JS/TS, `prisma format` on `.prisma`
- **Module system**: ESM (`"type": "module"`)
- **File naming**: kebab-case
- **Validation**: Currently hand-written functions in `src/validators/`. Project instruction says to use Zod for new code.
