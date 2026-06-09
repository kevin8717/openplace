/**
 * 反混淆 frontend0605-raw：复制所有文件（含非 JS 资源），再 prettier 格式化所有 .js
 *
 * 用法: node scripts/deobfuscate-raw.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const SRC = "E:\\PersonalFile\\openplace-main\\frontend0605-raw";
const DST = "E:\\PersonalFile\\openplace-main\\frontend0605-raw_deobfuscated";

function getAllFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllFiles(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

// 1. Clean and copy all files
console.log("[1/3] 复制全部文件...");
if (fs.existsSync(DST)) fs.rmSync(DST, { recursive: true });

const allSrcFiles = getAllFiles(SRC);
for (const src of allSrcFiles) {
  const rel = path.relative(SRC, src);
  const dest = path.join(DST, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

const allDestFiles = getAllFiles(DST);
const jsFiles = allDestFiles.filter((f) => f.endsWith(".js"));
const nonJsFiles = allDestFiles.filter((f) => !f.endsWith(".js"));
console.log(`  复制完成: 共 ${allDestFiles.length} 个文件`);
console.log(`    JS:      ${jsFiles.length} 个`);
console.log(`    非 JS:   ${nonJsFiles.length} 个（原样保留）`);

// 2. Run prettier on all JS files
console.log("\n[2/3] 反混淆 JS 文件...");
let ok = 0,
  fail = 0;

for (const file of jsFiles) {
  const rel = path.relative(DST, file);
  try {
    execSync(`prettier --parser babel --write "${file}"`, { stdio: "pipe" });
    ok++;
    process.stdout.write(`  ✔ ${rel}\n`);
  } catch {
    try {
      execSync(`prettier --parser acorn --write "${file}"`, { stdio: "pipe" });
      ok++;
      process.stdout.write(`  ✔ ${rel} (acorn)\n`);
    } catch {
      fail++;
      process.stdout.write(`  ✘ ${rel} — 解析失败\n`);
    }
  }
}

// 3. Summary
console.log("\n[3/3] 完成!");
console.log(`  ───────────────────────────`);
console.log(`  总文件:  ${allDestFiles.length}`);
console.log(`  JS 成功: ${ok}`);
console.log(`  JS 失败: ${fail}`);
console.log(`  非 JS:   ${nonJsFiles.length}`);
console.log(`  输出目录: ${DST}`);
