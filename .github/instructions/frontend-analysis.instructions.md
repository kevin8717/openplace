---
applyTo: "./**"
---

# 前端 JS 逆向分析指南

## 适用场景
分析 Svelte 构建后的前端 JS 文件（`frontend/_app/immutable/`），推断后端 API 数据结构和路由需求。

## 核心方法

### 1. 定位 API 调用
在 `Crl10T8F.js` 或类似 chunk 中搜索 `async` 方法名或 URL 路径：
```bash
grep_search("getModeratorTickets|staff/tickets/get")
grep_search("async functionName|/api/path")
```
前端 API 类定义在 `Crl10T8F.js` 中，所有请求方法都定义在这个 chunk 里作为 `class u` 的方法。

### 2. 逆向推断数据类型
从 `mapTicketsToReportRows` 这类函数分析字段映射关系：

| 前端字段路径 | 推断的后端字段 | 示例 |
|---|---|---|
| `ticket.reportedUser.id` | `reportedUser.id` | `number` |
| `ticket.reports[].reportedBy` | 举报人在 report 中 | `string \| number` |
| `ticket.handledBy.name` | 处理人字段 | 不存在时用 `"Moderator"` 兜底 |
| `ticket.status ?? "open"` | `status` 回退值 | `resolution ?? "open"` |
| `reportedLatitude` / `reportedLongitude` | report 中的坐标 | 用 `String()` 转换 |
| `imageUrl` | report 图片 | `r.image ? \`data:image/jpeg;base64,\${Buffer.from(r.image).toString("base64")}\` : ""` |
| `assignedUser.name` | 处理人（前端硬编码名） | 始终返回 `{ id, name, picture }` 对象 |
| `reportedUser.allianceName` | 联盟名 | 跨表查询 Alliance |
| `reportedUser.role` | 用户角色 | 需从 User 表 select |

### 3. Ticket 与 Report 概念区分

```
Ticket（工单/案件）
 ├── id
 ├── reportedUser（被举报人）
 ├── resolution（处理结果：null=open / ban / timeout / ignore）
 ├── moderatorUser（处理人）
 └── reports[]（举报明细，一对多）
       ├── report 1: userA 举报，reason="hate-speech"
       ├── report 2: userB 举报，reason="inappropriate-content"
       └── ...
```

| 概念 | 英文 | 含义 | 对应表 |
|---|---|---|---|
| **工单** | **Ticket** | 针对**一个被举报人**的聚合案件，包含处理状态 | `Ticket` 表 |
| **举报** | **Report** | 单个用户提交的单次举报记录（原因、截图、坐标等） | `Report` 表 |

**业务逻辑：** 多个用户举报同一个人时，只创建一个 Ticket，追加多条 Report。版主一次处理（ban/timeout/ignore）影响整张 Ticket。

### 4. 关键差异点检查清单

#### Ticket vs Report 模型
- [ ] Ticket 是否有 `reports[]` 子数组？→ 需要 Report 子表，Ticket 用 `include: { reports: {...} }`
- [ ] Ticket 是否有 `status` 字段？→ 用 `resolution ?? "open"` 模拟
- [ ] Ticket 是否有 `handledBy`? → 用 `moderatorUser` 模拟，但**字段名必须叫 `assignedUser`**
- [ ] 每条 report 是否需要 `reportedCount`, `timeoutCount`, `pixelsPainted`, `sameIpAccounts`? → 需批量查询统计数据（`groupBy`）
- [ ] `reportedUser` 是否含 `role`, `allianceId`, `allianceName`? → 需 select 所有字段 + 跨表查联盟名

#### 常见不匹配问题
```
前端期望字段           → 后端实际字段
assignedUser          → handledBy / moderatorUser（前端硬编码用 assignedUser）
handledBy             → 必须改为 assignedUser 并始终返回 { id, name, picture }
                       （即使为 null 也要返回 { id: 0, name: "—", picture: null }）
reportedUser.role     → 需从 User 表 select role
reportedUser.allianceId / allianceName → 需跨表查询 Alliance
```

### 5. 完整路由映射表

#### 工单/举报系统
| 前端调用路径 | 方法 | 说明 | 返回值格式 |
|---|---|---|---|
| `/staff/tickets/get` | GET | 获取所有 open tickets | `{ tickets: [{ id, status, createdAt, assignedUser, reportedUser, reports[] }], status: 200 }` |
| `/staff/tickets/set-status` | POST | 处理工单 | body: `{ ticketId, status, selectedReportId, assignedReason }` |
| `/staff/tickets/open_count` | GET | open ticket 数量 | `{ tickets: count }` |
| `/staff/tickets/closed-today` | GET | 今日关闭统计 | `{ closedTotal, ignored, timeouts, bans, rclosedTotal, rignored, rtimeouts, rbans }` |
| `/staff/tickets/assign` | POST | 分配工单（stub） | `{ newTicketsIds: [] }` |
| `/staff/tickets/translate` | POST | 翻译（stub） | body: `{ text }` → `{ translation }` |

#### 用户工单
| 前端调用路径 | 方法 | 说明 | 返回值格式 |
|---|---|---|---|
| `/staff/dashboard/users/tickets` | GET | 用户维度的工单 | query: `userId, kind(sent\|against\|handled), page, pageSize` |
| `/staff/dashboard/users/tickets/stats` | GET | 用户工单统计 | query: `id` → `{ closedTotal, ignored, timeouts, bans, rclosedTotal, ... }` |
| `/staff/dashboard/users/ban` | POST | 后台封禁用户 | body: `{ userIds, reason, notes }` |
| `/staff/dashboard/users/timeout` | POST | 后台禁言用户 | body: `{ userIds, reason, notes }` |

```typescript
// kind 参数含义:
// "sent"     → 我发出的举报（where.userId）
// "against"  → 针对我的举报（where.reportedUserId）
// "handled"  → 我处理的工单（where.moderatorUserId）
```

#### 仪表盘统计
| 前端调用路径 | 方法 | 说明 | 返回值格式 |
|---|---|---|---|
| `/staff/dashboard/summary/counters/tickets` | GET | 按原因分类的 open tickets | `{ doxxing: N, inappropriate_content: N, hate_speech: N, bot: N, other: N, griefing: N, total_open_tickets: N }` |
| `/staff/dashboard/summary/counters/reports` | GET | 按原因分类的 open reports | `{ doxxing: N, ..., total_open_reports: N }` |

> **注意：** `counters/tickets` 只统计 `resolution=null` 的 tickets，每个 ticket 取第一条 report 的 reason 分类。
> `counters/reports` 只统计属于 `resolution=null` 的 ticket 下的 reports，按 reason 分组。

#### 仪表盘快捷操作
| 路径 | 方法 | 说明 |
|---|---|---|
| `/staff/dashboard/summary/users/ban` | POST | 批量封禁（含 UserNote） |
| `/staff/dashboard/summary/users/timeout` | POST | 批量禁言（含 UserNote） |
| `/staff/dashboard/summary/users/unban` | POST | 批量解封 |
| `/staff/dashboard/summary/users/increment-droplet` | POST | 增减水滴 |

#### 联盟管理（Alliance）
| 前端调用路径 | 方法 | 说明 | 返回值格式 |
|---|---|---|---|
| `/staff/dashboard/alliances/:id` | GET | 联盟基本信息 | `{ id, name, pixelsPainted, membersCount }` |
| `/staff/dashboard/alliances/:id/full` | GET | 联盟完整信息（含 members 及最后像素坐标） | `{ id, name, description, hqLatitude, hqLongitude, pixelsPainted, members[{ ..., lastPixelLatitude, lastPixelLongitude, lastPixelPaintedAt }], bannedUsers[], createdAt, updatedAt, membersCount, ownerId, ownerName }` |
| `/staff/dashboard/alliances/search` | GET | 搜索联盟（必须注册在 `/:id` 之前避免被吞路由） | query: `q` → `[{ id, name, pixelsPainted }]`（直接返回数组，不是 `{ results }`！） |
| `/staff/dashboard/alliances/:id/members/:userId/role` | POST | 设置成员角色 | body: `{ role: "owner"\|"admin"\|"member" }` → 200 |
| `/staff/dashboard/alliances/:id/ban-all` | POST | 全员封禁（stub） | body: `{ reason, notes }` |
| `/staff/dashboard/alliances/:id/members/:userId/remove` | POST | 踢出成员 | → 200 |

#### 团队统计（KPI）
| 前端调用路径 | 方法 | 说明 |
|---|---|---|
| `/staff/dashboard/kpi/tickets` | GET | KPI 图表数据 |
| `/staff/dashboard/kpi/closed-tickets` | GET | 按 moderator 拆分 |
| `/staff/dashboard/kpi/closed-reports` | GET | 按 moderator 拆分 |
| `/staff/dashboard/team/closed-tickets` | GET | 团队 closed tickets |
| `/staff/dashboard/team/closed-reports` | GET | 团队 closed reports |
| `/staff/dashboard/ban-appeals/see` | GET | 按 moderator 的 ban/ignore 统计 |

```typescript
// KPI tickets 返回值格式
{
  current: {
    openCount, solvedCount, totalCount,
    ignoredCount, timeoutCount, banCount,
    overturnedCount, duplicatesCount,
    solvedRatePct, ignoredRatePct, timeoutRatePct, banRatePct,
    overturnedRatePct, duplicatesRatePct,
    timeToSolve: { avgMs, medianMs, p95Ms },
    backlogAging: { openGt1h, openGt24h, openGt7d }
  },
  previous: { ... },  // compare=1 时返回
  series: [{ bucketUtc, openCount, ... }],
  prevStartUtc, prevEndUtc
}
```

#### 申诉系统（Appeal）
| 前端调用路径 | 方法 | 说明 |
|---|---|---|
| `/report/appeal` | POST | 被封禁用户提交申诉（body: `{ message }`） |
| `/staff/appeals/get` | GET | 获取所有 pending 申诉 |
| `/staff/appeals/:id/handle` | POST | 批准/拒绝申诉（body: `{ approved: boolean }`） |
| `/staff/appeals/tickets` | GET | 申诉用户的工单历史 |
| `/staff/appeals/open_count` | GET | 待处理申诉数 |
| `/staff/appeals/assign` | POST | 分配新申诉（stub） |
| `/staff/appeals/translate` | POST | 翻译（stub） |
| `/staff/appeals/notes` | GET/POST | 用户备注 |
| `/me/last-appeal` | GET | 用户上次申诉时间 |

```typescript
// /staff/appeals/get 返回值每个 item 格式
{
  id: string,
  notes: string,  // 注意：字段名叫 notes 不是 message！
  createdAt: string,
  user: {
    id, name, picture, role,
    pixelsPainted, reportedCount, timeoutCount,
    allianceId, allianceName,
    lastTimeoutReason, timeoutUntil,
    lastLatitude, lastLongitude  // 最后绘制像素坐标
  }
}
```

### 6. 前端用户信息接口字段映射

`/staff/dashboard/users/info` 必须返回以下字段：

| 前端字段 | 后端来源 | 说明 |
|---|---|---|
| `timeout_until` | `user.timeoutUntil` | 禁言到期时间 |
| `timeout_reason` | `user.suspensionReason` | 禁言/封禁原因 |
| `banned` | `user.banned` | 是否被封禁 |
| `reported_times` | `Ticket.count({ reportedUserId })` | 被举报次数 |
| `timeouts_count` | `Ticket.count({ resolution: "timeout" })` | 禁言记录数 |
| `same_ip_accounts` | 同 IP 用户数 | 需查询 User 表 |
| `pixels_painted` | `user.pixelsPainted` | 已绘制像素 |
| `last_pixel_latitude/longitude` | `user.lastPixelLatitude` / `user.lastPixelLongitude`（**已落表**） | 最后像素坐标（画像素时自动存到 User 表，不再扫 Pixel 表） |

**封禁 vs 禁言判断逻辑（前端 19.Dl9pm2i7.js:153）：**
```javascript
const vBe = be(() => {
  return e(vB5)?.timeout_until >= new Date(Date.now() + 31536000000).toISOString();
  // 31536000000ms = 1年
});
// timeout_until > 当前+1年 → 封禁
// timeout_until 为未来但< 当前+1年 → 禁言
```
因此封禁时 `timeoutUntil` 必须设置为 **10年后**，前端才能正确识别。

### 7. 图片处理
```typescript
// Multer 文件上传 → base64 存储
if (req.file?.buffer) {
    imageBase64 = req.file.buffer.toString("base64");
}

// 读取时还原
imageUrl: r.image
    ? `data:image/jpeg;base64,${Buffer.from(r.image).toString("base64")}`
    : ""
```

### 8. 坐标转换
使用 `src/utils/coordinate.ts` 中的 `tilePixelToLatLon(tileX, tileY, pixelX, pixelY)`：
- 默认 tileSize=1000, zoom=11
- 不要硬编码 tileSize=256 的手动计算

### 9. 最后像素坐标优化（User 表落字段）
**背景：** 之前每次读取用户最后像素坐标都要扫 Pixel 表（`findFirst orderBy paintedAt desc`），全联盟成员时性能极差。

**优化方案（已实施）：**
1. Prisma Schema 新增字段：`lastPixelLatitude Float?`, `lastPixelLongitude Float?`, `lastPixelPaintedAt DateTime?`
2. 画像素时，在 `paintPixels` 的事务内（与 charges 更新一起）写入 User 表
3. 所有读 lastPixel 的地方改为直接取 `user.lastPixelLatitude`，不再查 Pixel 表

**涉及后端文件：**
- `src/services/pixel.ts` — 事务内计算 `tilePixelToLatLon` 并写入
- `src/routes/pixel.ts` — 删掉事务外重复的 update（防 1020 错误）
- `src/routes/admin.ts` — `users/info` 和 `alliances/:id/full` 改读 User
- `src/routes/appeal.ts` — `appeals/get` 改读 User
- `src/routes/moderator.ts` — `tickets/get` 改读 User

### 10. 竞态条件（Error 1020）预防
**问题：** 并发画像素时，`SELECT ... FOR UPDATE` 事务锁释放后，外部 `prisma.user.update` 因行已被修改而失败。

**解决方案：**
- `UserService.getUserProfile` 改用 `$transaction` + `SELECT ... FOR UPDATE`
- `PixelService.paintPixels` 中所有 User 更新在同一个事务中完成
- `UserService.setLastIP` 也加了 FOR UPDATE 事务锁和重试机制

### 11. Notification 页面分析（5.CYxjc_dY.js）
**关键发现：前端忽略 API 的 `title`/`message` 字段！**

前端通知列表渲染代码中，对每个 notification item 只使用了：
| API 字段 | 使用情况 |
|---|---|
| `id` | ✅ 标记已读 |
| `read` | ✅ 已读/未读样式 |
| `createdAt` | ✅ 格式化日期 |
| `type` | ✅ 选择模板（`"report_feedback"` / `"appeal_feedback"`） |
| `data.approved` | ✅ appeal 类型时判断通过/拒绝 |
| `title` | ❌ **完全忽略**，显示硬编码翻译字符串 |
| `message` | ❌ **完全忽略**，显示硬编码翻译字符串 |
| `icon` | ❌ 仅作为 slot 占位 |

**前端硬编码的 title/message（翻译函数）：**
- `report_feedback`: title=`yv()`, message=`xv()`（如 "Ticket ignored" / "举报已被忽略"）
- `appeal_feedback`: title=`bv()`, message=`data.approved ? wv() : Sv()`（如 "Appeal accepted" / "Appeal rejected"）

**业务含义：** 后端返回的 `title`/`message` 字段对前端显示无影响。如需动态显示，必须改前端渲染代码。

### 12. Tile 表零值日期处理
**问题：** MySQL `Tile.updatedAt` 列存在 `0000-00-00 00:00:00`，Prisma 的 `$queryRaw` / `findUnique` 都会报错。

**解决方案：**
- 使用 `NULLIF(updatedAt, '0000-00-00 00:00:00')` 在 SQL 层转 NULL
- 在代码中做兜底：`row.updatedAt ?? new Date()`

### 13. 团队统计（closed-tickets / closed-reports）返回值格式
前端期望每个 item 包含：
```typescript
{
  user: {       // 注意是嵌套对象，不是平铺的 userId
    id: number,
    name: string,
    role: string,
    picture: string | null,
    allianceId: number | null
  },
  total: number,
  ban: number,
  ignored: number,
  timeout: number,
  suspensionRate: number  // (ban + timeout) / total
}
```

### 10. Ban Wave（封禁波次）
- **并非自动分析**，页面上只有历史记录 + "立即执行"按钮
- `GET /staff/dashboard/ban-waves/see` → `{ nextBanWaveAt, banWaves: [{ id, executedByUserId, executedByName, totalBans, createdAt }] }`
- `POST /staff/dashboard/ban-waves/execute` → 无 body，直接执行
- 需要 `BanWave` 表和相关路由（尚未实现）

### 11. 语言选择控制（前端硬编码）
`5.CYxjc_dY.js` 中语言列表定义在 settings 页面：
```javascript
const re = [
  { label: "🇺🇸 English", key: "en" },
  { label: "🇧🇷 Português", key: "pt" },
  // 以下语言原本只有 role!=="user" 的用户可见
  { label: "🇨🇳 中文", key: "ch" },
  { label: "🇩🇪 Deutsch", key: "de" },
  { label: "🇪🇸 Español", key: "es" },
  { label: "🇫🇷 Français", key: "fr" },
  { label: "🇮🇹 Italiano", key: "it" },
  { label: "🇯🇵 日本語", key: "jp" },
  { label: "🇵🇱 Polski", key: "pl" },
  { label: "🇷🇺 Русский", key: "ru" },
  { label: "🇺🇦 Українська", key: "uk" },
  { label: "🇻🇳 Tiếng Việt", key: "vi" },
];
```
语言存储在 `Bvn5HspS.js` 的 `C` 类中，初始化时自动检测浏览器语言。

### 12. Audit Log（审计日志）
`/staff/dashboard/audit-logs/see` 支持 query:
- `actorUserId`, `targetUserId`, `action`, `limit`, `offset`, `sortKey`, `sortDir`
- 已有 `AuditLog` 表和路由
- action 包括: `BAN_WAVE`, `MANUAL_BAN`, `MANUAL_TIMEOUT`, `MANUAL_CHANGE_DROPLETS`, `MANUAL_REMOVE_BAN`, `DELETE_ALL_SESSIONS`, `PERMISSIONS_UPDATE`, `CHANGE_USERNAME`, `ACCEPT_APPEAL`, `DENY_APPEAL` 等

### 13. 无法访问资源时的提示
- 用户信息中 `associated_accounts_number`、`associated_accounts`、`email` 等字段在 `/staff/dashboard/users/info` 中返回
- 角色权限控制通过 `staff.dashboard.*` 权限标识符实现

### 14. 商店 / 装扮系统

#### 14.1 数据库模型

```prisma
model Frame            { id, name, description, imageUrl, rarity, value, purchasable, createdAt }
model FontCosmetic     { id, name, config, value, rarity, purchasable, createdAt }
model StyleCosmetic    { id, name, config, value, rarity, purchasable, createdAt }
model Badge            { id, name, description, howToEarn, rarity, reward, imageUrl, type, secret, createdAt }
model R2Image          { id, name, objectKey, publicUrl, contentType, sizeBytes, createdAt }
```

User 表新增字段：
- `equippedBadges` — JSON 数组 `"[id1,id2,id3]"`（三个槽位）
- `equippedFrameId` — 当前装备的边框 ID
- `equippedFontId` — 当前装备的字体 ID
- `equippedStyleId` — 当前装备的样式 ID
- `ownedFrames` — JSON 数组 `"[id1,id2,...]"`（已购买边框）
- `ownedFonts` — JSON 数组 `"[id1,id2,...]"`（已购买字体）
- `ownedStyles` — JSON 数组 `"[id1,id2,...]"`（已购买样式）

#### 14.2 路由映射表

| 前端方法 | 路径 | 方法 | 说明 | 请求/响应 |
|---|---|---|---|---|
| `getStoreFrames()` | `/store/frames` | GET | 所有边框(含owned) | `[{ id, name, imageUrl, description, rarity, value, owned, createdAt }]` |
| `getStoreNameCosmetics()` | `/store/name` | GET | 字体+样式(含owned) | `{ fonts: [{ id, name, price, owned, text }], styles: [...] }` |
| `postBuyUserFrame(id)` | `/store/frames/buy/:id` | POST | 购买边框 | 404=不存在, 403=余额不足, 409=已拥有 |
| `postBuyCosmetic(id)` | `/store/name/buy/:id` | POST | 购买字体/样式 | 自动判断是 font 还是 style |
| `getUserFrames()` | `/me/frames` | GET | 用户拥有的边框 | 同 `/store/frames` 格式, owned=true |
| `getMyNameCosmetics()` | `/me/cosmetics/name` | GET | 用户拥有的字体+样式 | `{ fonts: [...], styles: [...] }` |
| `postEquipUserFrame(id)` | `/me/frames/equip/:id` | POST | 装备边框 | body: 无, id=0 卸下 |
| `postEquipCosmetics({ frameId, fontId, styleId })` | `/me/cosmetic/equip` | POST | 装备框/字体/样式 | JSON body |
| `postEquipUserBadge({ slotIndex0, slotIndex1, slotIndex2 })` | `/me/badges/equip` | POST | 装备徽章 | JSON body, 存为 `[id0,id1,id2]` |
| `getUserBadges()` | `/me/badges` | GET | 获取所有徽章 | `[{ id, name, description, howToEarn, rarity, reward, imageUrl, type, earnedAt, earned, secret }]` |

#### 14.3 商店管理（Staff）

| 前端方法 | 路径 | 方法 | 说明 |
|---|---|---|---|
| `postCreateFrame({ name, image, description, value, rarity, purchasable })` | `/staff/store-manager/frames` | POST | FormData 含图片, 保存到 `frontend/img/store/` |
| `postCreateFont({ name, config, value, purchasable, rarity })` | `/staff/store-manager/fonts` | POST | JSON |
| `postCreateStyle({ name, config, value, rarity, purchasable })` | `/staff/store-manager/styles` | POST | JSON |
| `postCreateBadge({ name, description, howToEarn, rarity, reward, imageUrl, type, secret })` | `/staff/dashboard/store-manager/badges` | POST | JSON |
| `getR2Images({ page, pageSize })` | `/staff/store-manager/images?page=&pageSize=` | GET | `{ items: [{ id, name, publicUrl, contentType, sizeBytes, objectKey }], total, hasNext }` |
| `postUploadR2Image({ name?, image })` | `/staff/store-manager/images` | POST | FormData, 保存到 `frontend/img/store/` |
| `deleteR2Image(id)` | `/staff/store-manager/images/:id` | DELETE | 同时删除本地文件 |

#### 14.4 字段映射

| 前端字段 | 后端来源 | 说明 |
|---|---|---|
| `font.text` | `FontCosmetic.config` | CSS `font-family` 值 |
| `style.text` | `StyleCosmetic.config` | CSS 样式字符串 |
| `font.price` / `style.price` | `value` | 价格，前端字段名是 price |
| `frame.owned` | `User.ownedFrames` | JSON 数组查 includes |
| `font.owned` | `User.ownedFonts` | JSON 数组查 includes |
| `style.owned` | `User.ownedStyles` | JSON 数组查 includes |
| `badge.earnedAt` | `Badge.createdAt` | 前端显示用 |
| `badge.earned` | 硬编码 `true` | 尚无用户-徽章关联表 |

#### 14.5 图片存储策略
- 上传的图片保存到 `frontend/img/store/` 目录
- 数据库只存相对路径 `/img/store/xxx.png`
- Multer 使用 `diskStorage`，文件名格式 `时间戳_随机值.扩展名`
- 删除记录时同步删除本地文件
- 错误处理：`e2.status === 403 || e2.status === 401` 时前端跳转 `/404`

### 15. 用户装备 / 水滴支付 / 表单提交模式

#### 15.1 `/me` 返回的装备字段格式

前端从 `/me` 接口期望的装备字段：

| 字段 | 类型 | 示例 | 说明 |
|---|---|---|---|
| `equippedBadges` | `[null \| { id, imageUrl, name, rarity }, ...]` | `[null, { id:3, imageUrl:"...", name:"Big Buckets", rarity:"rare" }, null]` | 三个槽位，非空时为完整徽章对象 |
| `equippedFrameId` | `number` | `1` | 当前装备的边框 ID |
| `equippedFrameUrl` | `string` | `"/img/xxx.png"` | 边框图片 URL，需查 Frame 表 |
| `equippedNameCosmetic` | `null \| { fontId, styleId, resolved: { text } }` | `{ fontId:3, styleId:22, resolved: { text:"font-family:...;color:...;" } }` | 名称装扮，resolved.text 为拼接后的 CSS |
| `allianceName` | `string` | `""` | 联盟名，通过 `user.alliance.name` 获取 |

**关键：** 后端存 `equippedBadges` 为 `"[1,2,3]"`（纯数字 JSON），但前端期望 `[{ id, imageUrl, name, rarity }]`。返回前需要查 Badge 表做转换。

#### 15.2 购买系统

| 前端调用 | 后端实现要点 |
|---|---|
| `postBuyUserFrame(id)` → `POST /store/frames/buy/:id` | 查 Frame → 查余额 → 查 ownedFrames 防重复 → 扣 droplets 并 push 到 ownedFrames |
| `postBuyCosmetic(id)` → `POST /store/name/buy/:id` | 同时查 FontCosmetic 和 StyleCosmetic → 自动判断类型 → 同理操作 ownedFonts 或 ownedStyles |
| `postEquipCosmetics({ frameId, fontId, styleId })` → `POST /me/cosmetic/equip` | 更新 User 的 equippedFrameId/FontId/StyleId |

**Error code 对照（前端期望）：**
- `404` → 商品不存在
- `403` → 余额不足 / 无权限
- `409` → 已经拥有（已购买过）

#### 15.3 支付表单提交模式

`/payment/create-checkout-session` 不是 fetch/XHR 调用，而是 **HTML 表单提交（form action）**：

```html
<form method="POST" action="/payment/create-checkout-session">
  <input type="hidden" name="lookup_key" value="droplets_15">
  <button type="submit">Comprar</button>
</form>
```

**重要：HTML 表单默认以 `application/x-www-form-urlencoded` 提交，服务器中间件不解析这种格式，需要手动处理：**

```typescript
function parseUrlencodedBody(req: any): Promise<Record<string, string>> {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk: Buffer) => { body += chunk.toString(); });
    req.on("end", () => {
      const params: Record<string, string> = {};
      for (const [key, val] of new URLSearchParams(body)) {
        params[key] = val;
      }
      resolve(params);
    });
    req.on("error", reject);
  });
}
```

**Droplet 商品配置（与前端 BVrGTOqX.js 一致）：**

| lookup_key | 价格(USD) | droplets | bonus |
|---|---|---|---|
| `droplets_5` | 5 | 25000 | 0 |
| `droplets_15` | 15 | 75000 | 3750 |
| `droplets_30` | 30 | 150000 | 15000 |
| `droplets_50` | 50 | 250000 | 37500 |
| `droplets_75` | 75 | 375000 | 75000 |
| `droplets_100` | 100 | 500000 | 125000 |

**支付回调：** 表单提交后服务器应重定向（`res.redirect`），不能返回 JSON，因为浏览器会尝试渲染 JSON 响应而非跳转。

#### 15.4 经验教训
- 前端 minified JS 中 `form action="..."` 的路径是表单提交，不是 API 调用。需要检查是 `fetch()` 还是 `<form>` 来判断响应格式。
- 前端期望 `equippedBadges` 包含完整的 badge 信息（id, imageUrl, name, rarity），而非仅数字 ID。
- 用户购买记录推荐使用 `prisma.$transaction` 保证原子性。
- Frame 的 `imageUrl` 用 `VARCHAR(191)` 足够存路径，不需要 `@db.Text`。

