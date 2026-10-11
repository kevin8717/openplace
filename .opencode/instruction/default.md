# openplace Project

You are working on **openplace**, an unofficial open-source backend for [wplace.live](https://wplace.live). This is a reverse-engineered wplace project.

## Project Structure

| Directory | Purpose |
|---|---|
| `src/` | Backend — @tinyhttp/app + Prisma ORM (MariaDB/MySQL) |
| `frontend/` | Original wplace frontend (SvelteKit built static output), git submodule from `github.com/openplaceteam/frontend`. All features except login live here. |
| `frontend2/` | Nuxt 3 (Vue 3) frontend — **only** login/register pages and new features not in original wplace |
| `prisma/` | Database schema (`schema.prisma`) + migrations |
| `scripts/` | Utility/migration scripts |
| `docs/` | Protocol documentation (`protocol.md`, Chinese) |
| `.opencode/memory/` | Detailed API route and store system reference |

## Development

- **Package manager:** pnpm (>=10), Node >=22. Never use npm or yarn.
- **Backend dev:** `pnpm dev` (tsx watch src, port 3001)
- **Frontend dev:** `cd frontend2 && pnpm dev` (nuxt dev, port 3000)
- **Backend build:** `pnpm build` (tsc)
- **Lint:** `pnpm lint` (tsc --noEmit && eslint src/ scripts/)
- **Test:** `pnpm test` (Vitest)

Backend proxies `/login`, `/beta`, `/admin/*`, `/flags/*`, `/_nuxt/*` to frontend2 on port 3000.
Backend serves `frontend/` as static files via sirv.
Environment variables in `.env` (see `.env.example`).

## Conventions

- Use Zod for input validation (`src/validators/`)
- Use Prisma Client for all database access
- Error handling uses the errorHandler middleware pattern
- After schema changes, run `pnpm db:generate`

## For Reverse Engineering

Use the `frontend-analysis` agent when working with the reverse-engineered frontend JS files in `frontend/_app/immutable/` to determine API requirements.
