# ![openplace](banner.png "openplace banner")

# openplace 2.0

openplace 2.0 是一套可自行部署的像素画布服务（wplace 的反向工程开源后端），
让你为自己、朋友或社区搭建私有的像素画布站点。

本仓库包含三个部分：

| 目录 | 说明 | 技术栈 |
| --- | --- | --- |
| `src/` | 后端主程序，提供全部 API、像素渲染与静态资源托管 | TypeScript + tinyhttp + Prisma（MariaDB / MySQL） |
| `frontend/` | 原版 wplace 前端（Git 子模块），负责画布、公会、排行榜、商城等 | SvelteKit 静态构建，由后端 sirv 托管 |
| `frontend2/` | 新前端，负责登录 / 注册以及新增功能页面 | Nuxt 3 (Vue 3) + PrimeVue + MapLibre GL |

后端监听 `BACKEND_PORT`（默认 `3000`），并把 `/login`、`/beta`、`/admin/*`、
`/flags/*`、`/_nuxt/*` 等请求反向代理到新前端 `FRONTEND_HOST:FRONTEND_PORT`
（默认 `localhost:3001`），其余请求由 `frontend/` 静态文件响应。

> 站点仅支持 HTTPS。通过 HTTP 访问会返回 400。

## 目录

- [一、环境要求](#一环境要求)
- [二、数据库准备（网盘下载）](#二数据库准备网盘下载)
- [三、部署方式一：Docker Compose（推荐）](#三部署方式一docker-compose推荐)
- [四、部署方式二：手动部署（Node.js + PM2）](#四部署方式二手动部署nodejs--pm2)
- [五、环境变量说明](#五环境变量说明)
- [六、常用命令](#六常用命令)
- [七、更新与维护](#七更新与维护)
- [八、HTTPS 与访问](#八https-与访问)
- [九、常见问题](#九常见问题)

## 一、环境要求

- **Node.js ≥ 22**
- **pnpm ≥ 10**（本项目管理器，请勿使用 npm / yarn 安装依赖）
- **MariaDB 12+ 或 MySQL 8+**
- 部署工具二选一：
  - **Docker + Docker Compose**（推荐，无需手动装 Node / 数据库）
  - 或自行安装 Node.js、pnpm、MariaDB，并使用 **PM2** 常驻进程（可选）

## 二、数据库准备（网盘下载）

数据库已打包上传到网盘，下载地址：

> 网盘链接：https://alist.1515810.xyz/@s/NSxN92Xf?pwd=eSHrW
> 提取密码：`eSHrW`

包内是 **2026 年 9 月之前的注册用户与历史绘画数据**，格式为 MariaDB 12.3.2 的物理备份。

**如果你不需要这部分历史数据**，可以跳过本节，直接新建一个空库 `openplace` 并自行初始化：

```bash
pnpm install
pnpm db:generate
pnpm db:push        # 或 pnpm db:deploy 应用迁移
pnpm setup          # 初始化系统账号、地区数据等基础数据
```

需要历史数据时，按下述步骤恢复。

### 1. 解压

压缩包为 zstd 格式，需要先安装 `zstd`：

```bash
sudo apt install zstd            # Debian / Ubuntu
mkdir -p /srv/openplace-restore && cd /srv/openplace-restore
tar -I 'zstd -d -T0' -xf openplace-db-20261011.tar.zst
```

解压后得到（约 89 GiB，请预留足够空间）：

```
mysql-live/            数据库数据目录
ssd/                   外部表空间目录
docker-compose.yml     随包提供的 compose 文件
```

### 2. 挂载路径（先确认）

包内约定的挂载关系是固定的：

| 包内目录 | 容器内路径 | 说明 | 大小 |
| --- | --- | --- | --- |
| `mysql-live/` | `/var/lib/mysql` | 数据库数据目录 | 11 GiB |
| `ssd/` | `/mnt/ssd` | 外部表空间目录 | 78 GiB |

包内 `docker-compose.yml` 的结构大致如下（服务名以实际文件为准）：

```yaml
services:
  db:
    image: mariadb:12.3.2
    ports:
      - "3306:3306"
    environment:
      - MARIADB_ROOT_PASSWORD=password
    volumes:
      - ./mysql-live:/var/lib/mysql   # 宿主机路径 : 容器内路径
      - ./ssd:/mnt/ssd
```

> 两个目录**必须成对挂载**。`openplace.Pixel` 用 `DATA DIRECTORY` 建表，表空间放在数据目录之外，
> `mysql-live/openplace/Pixel.isl` 里记录的是**绝对路径** `/mnt/ssd/openplace/Pixel.ibd`。
> 只挂 `mysql-live/` 会在启动时报找不到表空间。

### 3. 自行修改挂载路径

- **只想换宿主机上的存放位置**：只改冒号**左边**的宿主机路径，容器内路径保持不动。例如把数据放到 `/data/openplace`：

```yaml
    volumes:
      - /data/openplace/mysql-live:/var/lib/mysql
      - /data/openplace/ssd:/mnt/ssd
```

- **容器内路径建议不要改**：
  - `/var/lib/mysql` 是 MariaDB 的标准数据目录，改了还要额外改镜像配置；
  - `/mnt/ssd` 被写死在 `Pixel.isl` 里。如果一定要改容器内路径，必须同时把
    `mysql-live/openplace/Pixel.isl` 里的 `/mnt/ssd/openplace/Pixel.ibd` 改成新路径，否则启动会失败。

- 不用 compose 也可以用 `docker run`，两个 `-v` 指向同样两个目录即可：

```bash
docker run -d --name mariadb-openplace -p 3306:3306 \
  -v /srv/openplace-restore/mysql-live:/var/lib/mysql \
  -v /srv/openplace-restore/ssd:/mnt/ssd \
  -e MARIADB_ROOT_PASSWORD=password \
  mariadb:12.3.2
```

### 4. 修正属主

数据文件属主需与容器内的 `mysql` 用户一致（uid 999）：

```bash
sudo chown -R 999:999 mysql-live ssd
```

### 5. 启动

```bash
docker compose up -d
```

### 6. 版本要求

镜像必须用 **mariadb:12.3.x**（建议 12.3.2）。更低版本会拒绝启动，更高版本会触发数据字典升级。
同一份数据目录不要同时挂给两个实例。

### 7. 验证

```bash
docker exec mariadb-openplace mariadb -uroot -ppassword -e "SHOW DATABASES;"
docker exec mariadb-openplace mariadb -uroot -ppassword -e "SHOW TABLE STATUS FROM openplace;"
```

> 用 compose 启动时，把容器名换成实际服务名，例如
> `docker compose exec db mariadb -uroot -ppassword -e "SHOW DATABASES;"`。
> root 默认密码是 `password`，恢复后建议修改：
> `ALTER USER 'root'@'localhost' IDENTIFIED BY '新密码';`

### 8. 校准表结构

恢复完成后，用当前代码的 schema 对齐数据库结构：

```bash
pnpm install
pnpm db:generate
pnpm db:push
```

## 三、部署方式一：Docker Compose（推荐）

`docker-compose.yml` 会自动启动三个服务：数据库 `db`、后端 `app`、新前端 `frontend2`。

### 1. 获取代码

```bash
git clone <本仓库地址> openplace
cd openplace
```

### 2. 准备数据库

两种方式二选一：

- **使用网盘备份**（含 2026 年 9 月前的注册用户与历史绘画数据）：按[第二节](#二数据库准备网盘下载)
  解压并恢复，用包内的 `docker-compose.yml` 启动。它会把 `mysql-live/` 挂到
  `/var/lib/mysql`、`ssd/` 挂到 `/mnt/ssd`。
- **全新数据库**：跳过第二节，直接用仓库自带的 `docker-compose.yml`，
  数据目录为项目根目录的 `./mysql-data`。

### 3. 配置环境变量

```bash
cp .env.example .env
```

编辑 `.env`，至少修改以下项：

- `JWT_SECRET`：改成随机长字符串
- `DATABASE_URL`：Docker 部署时主机名用服务名 `db`，例如
  `mysql://root:password@db/openplace`
- `EXTERNAL_URL`：站点对外访问地址
- 若 `db` 用非默认口令，同步修改 `docker-compose.yml` 中的
  `MARIADB_ROOT_PASSWORD`

> Docker 中 `app` 与 `frontend2` 属于不同容器，反向代理需要能互相访问。
> 请在 `.env` 里设置 `FRONTEND_HOST=frontend2`、`FRONTEND_PORT=3000`。

### 4. 启动

```bash
docker compose up -d
```

后端容器启动时会自动执行：安装依赖、`prisma migrate deploy`、`prisma generate`、
`prisma db push`，然后运行 `tsx src`。新前端则执行 `pnpm install`、`pnpm build`
并启动 `.output/server/index.mjs`。

查看日志与状态：

```bash
docker compose ps
docker compose logs -f app
docker compose logs -f frontend2
```

### 5. 访问

默认：

- 数据库：`3306`
- 后端：容器内 `3000`
- 新前端：`127.0.0.1:3001`

生产环境请在容器前再挂一层反向代理（Nginx / Caddy）并配置 HTTPS 证书。

## 四、部署方式二：手动部署（Node.js + PM2）

不使用 Docker 时，需要自行准备 Node.js、pnpm 与数据库。

### 1. 获取代码与前端子模块

```bash
git clone --recurse-submodules <本仓库地址> openplace
cd openplace
# 若克隆时未拉取子模块：
git submodule update --init --recursive
```

### 2. 安装依赖

```bash
# 后端
pnpm install

# 新前端
cd frontend2
pnpm install
pnpm build
cd ..
```

### 3. 配置环境变量

```bash
cp .env.example .env
```

编辑 `.env`，数据库指向本机：

```env
DATABASE_URL="mysql://root:password@localhost/openplace"
```

> 后端读取的是 `BACKEND_PORT`，而 `.env.example` 中只写了 `PORT`。
> 请确保 `BACKEND_PORT` 与 `PORT` 一致，否则端口对不上。

### 4. 初始化数据库

先按[第二节](#二数据库准备网盘下载)导入网盘数据，然后：

```bash
pnpm db:generate
pnpm db:push        # 或 pnpm db:deploy 应用迁移
```

如需初始化基础数据（系统账号、地区数据等），可运行向导：

```bash
pnpm setup
```

### 5. 启动后端

开发调试：

```bash
pnpm dev
```

生产常驻（PM2）：

```bash
pm2 start ecosystem.config.cjs
pm2 save
```

### 6. 启动新前端

`frontend2` 构建后启动生产服务：

```bash
cd frontend2
node .output/server/index.mjs
```

确保它监听的地址端口与后端 `.env` 中的 `FRONTEND_HOST` / `FRONTEND_PORT` 一致。

## 五、环境变量说明

完整选项见 [`.env.example`](.env.example)，常用字段：

| 变量 | 说明 |
| --- | --- |
| `BACKEND_PORT` / `PORT` | 后端监听端口，二者需保持一致 |
| `FRONTEND_HOST` / `FRONTEND_PORT` | 后端反向代理到新前端的地址 |
| `EXTERNAL_URL` | 站点对外访问地址 |
| `DATABASE_URL` | 数据库连接串；代码会自动追加连接数与时区参数 |
| `SHADOW_DATABASE_URL` | 仅开发迁移使用 |
| `JWT_SECRET` | 会话签名密钥，务必改用随机值 |
| `REGISTRATION_CODE` | 注册邀请码，留空则不需要 |
| `SMTP_*` | 邮件发送（注册验证码、找回密码等）配置 |
| `DISCORD_*` | Discord 登录 / 机器人集成（可选） |
| `COOLDOWN_MS` 等 | 像素冷却与等级、奖励规则 |
| `ALLOW_*` | 规则开关（多账号、冒犯内容、涂改行为等） |

> 数据库连接串中的口令如含特殊字符，需做
> [百分号编码](https://developer.mozilla.org/zh-CN/docs/Glossary/Percent-encoding)。

## 六、常用命令

```bash
# 开发
pnpm dev                     # 后端：tsx watch src
cd frontend2 && pnpm dev     # 新前端：Nuxt dev server

# 构建与检查
pnpm build                   # 后端 TypeScript 编译
pnpm lint                    # tsc --noEmit && eslint

# 数据库（Prisma）
pnpm db:push                 # 直接把 schema 推送到数据库
pnpm db:generate             # 重新生成 Prisma Client
pnpm db:deploy               # 应用迁移
pnpm db:dev                  # 创建并应用新迁移

# 脚本
pnpm setup                   # 首次初始化向导
pnpm clear-pixels            # 清空像素数据
pnpm export-user-pixels      # 导出用户像素数据
pnpm send-system-notification

# Docker
docker compose up -d         # 启动整栈
docker compose down          # 停止
```

## 七、更新与维护

- **同步代码后**，若数据库表结构有变化，执行：

```bash
pnpm db:push
```

- **前端子模块更新**：

```bash
git submodule update --remote --merge
```

- **仓库内置自动部署**：`.github/workflows/deploy-backend.yml` 在推送 `v2.0`
  分支（涉及 `src/`、`prisma/` 等路径）时，会把 `src/` 同步到 Linux 服务器并
  重启 `openplace-app-1` 容器。使用前需在仓库 Secrets 中配置
  `SSH_HOST`、`SSH_USERNAME`、`SSH_PRIVATE_KEY`、`SSH_PORT`、`SERVER_PATH`。

## 八、HTTPS 与访问

- 站点仅通过 HTTPS 提供服务，请配置 SSL 证书（如 Caddy 自动签发，或 Nginx + 证书）。
- 仅自己与朋友使用时，也可以直接访问 `https://{服务器IP}:端口`。
- 生产环境建议：Nginx / Caddy 终止 TLS → 转发到后端端口 → 后端托管静态前端并代理新前端。

## 九、常见问题

- **HTTP 400**：用 HTTP 访问了站点，改用 HTTPS。
- **前端登录页 502**：后端连不上新前端，检查 `FRONTEND_HOST` / `FRONTEND_PORT` 是否正确、新前端是否已启动。
- **连不上数据库**：核对 `DATABASE_URL` 主机名（Docker 用服务名 `db`，手动部署用 `localhost`）、口令与端口。
- **导入后报字段缺失**：执行 `pnpm db:generate && pnpm db:push` 对齐 schema。

## 许可

本项目基于 Apache License 2.0 发布，详见 [LICENSE.md](LICENSE.md)。

### 致谢

地区数据来自 [GeoNames Gazetteer](https://download.geonames.org/export/dump/)，
遵循 [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/)。
该数据按“原样”提供，不附带任何准确性、时效性或完整性的保证。
