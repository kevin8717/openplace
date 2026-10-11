# Store / Cosmetic / Payment System Reference

## Database Models

```
Frame:          id, name, description, imageUrl, rarity, value, purchasable, createdAt
FontCosmetic:    id, name, config (CSS font-family), value, rarity, purchasable, createdAt
StyleCosmetic:   id, name, config (CSS string), value, rarity, purchasable, createdAt
Badge:          id, name, description, howToEarn, rarity, reward, imageUrl, type, secret, createdAt
R2Image:        id, name, objectKey, publicUrl, contentType, sizeBytes, createdAt
```

User fields:
- `equippedBadges`: JSON `[id1,id2,id3]` (3 slots)
- `equippedFrameId`, `equippedFontId`, `equippedStyleId`: single IDs
- `ownedFrames`, `ownedFonts`, `ownedStyles`: JSON arrays of IDs

## Field Mappings

| Frontend Field | Backend Source |
|---|---|
| `font.text` / `style.text` | `FontCosmetic.config` / `StyleCosmetic.config` |
| `font.price` / `style.price` | `value` field |
| `frame.owned` | `User.ownedFrames` includes check |
| `badge.earnedAt` | `Badge.createdAt` |
| `badge.earned` | hardcoded `true` |

Error codes: `404`=not found, `403`=insufficient funds/no permission, `409`=already owned

## User Routes

| Route | Method | Response |
|---|---|---|
| `/store/frames` | GET | `[{ id, name, imageUrl, description, rarity, value, owned, createdAt }]` |
| `/store/name` | GET | `{ fonts: [{id, name, price, owned, text}], styles: [{id, name, price, owned, text}] }` |
| `/store/frames/buy/:id` | POST | Buy frame (auto-check owned, deduct droplets) |
| `/store/name/buy/:id` | POST | Buy font or style (auto-detect type) |
| `/me/frames` | GET | User's frames (owned=true) |
| `/me/cosmetics/name` | GET | `{ fonts: [...], styles: [...] }` |
| `/me/frames/equip/:id` | POST | Equip frame (id=0 to unequip) |
| `/me/cosmetic/equip` | POST | body: `{ frameId, fontId, styleId }` |
| `/me/badges/equip` | POST | body: `{ slotIndex0, slotIndex1, slotIndex2 }` -> save as `[id0,id1,id2]` |
| `/me/badges` | GET | `[{ id, name, description, howToEarn, rarity, reward, imageUrl, type, earnedAt, earned, secret }]` |

## Staff Store Manager Routes

| Route | Method | Format |
|---|---|---|
| `/staff/store-manager/frames` | POST | FormData: name, image, description, value, rarity, purchasable |
| `/staff/store-manager/fonts` | POST | JSON |
| `/staff/store-manager/styles` | POST | JSON |
| `/staff/dashboard/store-manager/badges` | POST | JSON |
| `/staff/store-manager/images?page=&pageSize=` | GET | `{ items: [{id,name,publicUrl,contentType,sizeBytes,objectKey}], total, hasNext }` |
| `/staff/store-manager/images` | POST | FormData: name?, image |
| `/staff/store-manager/images/:id` | DELETE | Delete record + local file |

## Image Storage

- Uploaded images saved to `frontend/img/store/`
- DB stores relative path `/img/store/xxx.png`
- Multer `diskStorage`, filename: `timestamp_random.ext`
- Deleting record also deletes local file

## Payment System

| lookup_key | Price (USD) | Droplets | Bonus |
|---|---|---|---|
| `droplets_5` | 5 | 25000 | 0 |
| `droplets_15` | 15 | 75000 | 3750 |
| `droplets_30` | 30 | 150000 | 15000 |
| `droplets_50` | 50 | 250000 | 37500 |
| `droplets_75` | 75 | 375000 | 75000 |
| `droplets_100` | 100 | 500000 | 125000 |

| Route | Method | Notes |
|---|---|---|
| `/payment/create-checkout-session` | POST | body: `{ lookup_key }` -> `{ clientSecret, sessionId }`. Uses JSON, NOT form-urlencoded! Returns JSON, NOT redirect. |
| `/payment/refresh-session/:sessionId` | POST | Process payment, add droplets, create UserNote |

Frontend skips Stripe entirely - directly calls `onComplete` -> `refresh-session`.

## /me Equipped Fields Format

```
equippedBadges: [null | { id, imageUrl, name, rarity }, ...]  // 3 slots, fully resolved badge objects
equippedFrameId: number
equippedFrameUrl: string  // lookup Frame.imageUrl
equippedNameCosmetic: null | { fontId, styleId, resolved: { text: "font-family:...;color:...;" } }
```

> Backend stores `equippedBadges` as JSON `"[1,2,3]"` (pure numbers), but frontend expects full badge objects. Must transform before returning.

## Permissions List

85 permissions total in frontend (source: `DU-2YUMG.js`).

**Removed from backend** (not in frontend):
- `staff.dashboard.ban_waves.see`
- `staff.dashboard.ban_waves.execute`
- `staff.tools.select_pixel.archive`

**Renamed:**
- `staff.tools.wayback.wayback` -> `staff.tools.wayback`

**Added** (13 permissions from frontend):
- `staff.dashboard.users.appeals_history`
- `staff.dashboard.users.edit_email`
- `staff.dashboard.users.phone_verification`
- `staff.dashboard.users.remove_picture`
- `staff.dashboard.anticheat.see`
- `staff.tickets.revert`
- `staff.tickets.revert_review`
- `staff.tools.select_area.phone_verification`
- `staff.tools.select_area.reverse`
- `staff.tools.select_area.timelapse`
- `staff.tools.auto_painter.transparent`
- `staff.tools.auto_painter.no_charges`
- `staff.tools.auto_painter.as_user`
- `staff.tools.auto_painter.no_size_limit`
