# Deobfuscate frontend0605-raw: copy ALL files, then prettier JS files
$src = "E:\PersonalFile\openplace-main\frontend0605-raw"
$dst = "E:\PersonalFile\openplace-main\frontend0605-raw_deobfuscated"

Write-Host "=== Deobfuscate frontend0605-raw ===" -ForegroundColor Cyan

# 1. Remove existing output
if (Test-Path $dst) { Remove-Item -Recurse -Force $dst }

# 2. Copy EVERYTHING (including non-JS resources)
Write-Host "[1/3] Copying all files..." -ForegroundColor Yellow
Copy-Item -Path $src -Destination $dst -Recurse -Force

$total = (Get-ChildItem -Recurse $dst).Count
$jsCount = (Get-ChildItem -Recurse -Filter *.js $dst).Count
$nonJs = $total - $jsCount
Write-Host "  Copied $total files (JS: $jsCount, Non-JS: $nonJs)"

# 3. Prettier all JS files
Write-Host "[2/3] Deobfuscating JS files with prettier..." -ForegroundColor Yellow
$count = 0
$success = 0
$fail = 0

Get-ChildItem -Recurse -Filter *.js $dst | ForEach-Object {
    $count++
    Write-Progress -Activity "Deobfuscating JS" -Status "$count / $jsCount" -CurrentOperation $_.Name
    prettier --parser babel --write $_.FullName 2>$null
    if ($LASTEXITCODE -eq 0) {
        $success++
    } else {
        prettier --parser acorn --write $_.FullName 2>$null
        if ($LASTEXITCODE -eq 0) {
            $success++
        } else {
            $fail++
            Write-Host "  FAILED: $($_.Name)" -ForegroundColor Red
        }
    }
}

Write-Host "[3/3] Complete!" -ForegroundColor Yellow
Write-Host "  Processed: $count JS files"
Write-Host "  Success:   $success"
if ($fail -gt 0) { Write-Host "  Failed:    $fail" -ForegroundColor Red }
Write-Host "  Non-JS:    $nonJs files (copied as-is)"
Write-Host "  Output:    $dst"
Write-Host "=== Done ===" -ForegroundColor Green
