# Deobfuscate all JS files in frontend0605 using prettier
$sourceDir = "E:\PersonalFile\openplace-main\frontend0605"
$outputDir = "E:\PersonalFile\openplace-main\frontend0605_deobfuscated"

# Get all JS files
$files = Get-ChildItem -Recurse -Filter *.js -Path $sourceDir
$total = $files.Count
$count = 0

Write-Host "Found $total JS files to process..."

foreach ($file in $files) {
    $count++
    $relativePath = $file.FullName.Substring($sourceDir.Length).TrimStart('\')
    $outputPath = Join-Path $outputDir $relativePath
    
    # Create output directory
    $outputFileDir = Split-Path $outputPath -Parent
    if (-not (Test-Path $outputFileDir)) {
        New-Item -ItemType Directory -Path $outputFileDir -Force | Out-Null
    }
    
    Write-Host "[$count/$total] Processing: $relativePath"
    
    # Run prettier and redirect stdout to output file
    $result = prettier $file.FullName --parser babel 2>&1
    $exitCode = $LASTEXITCODE
    
    if ($exitCode -eq 0) {
        $result | Out-File -FilePath $outputPath -Encoding utf8
        Write-Host "  -> Done" -ForegroundColor Green
    } else {
        Write-Host "  -> Failed with babel parser, trying acorn..." -ForegroundColor Yellow
        $result2 = prettier $file.FullName --parser acorn 2>&1
        if ($LASTEXITCODE -eq 0) {
            $result2 | Out-File -FilePath $outputPath -Encoding utf8
            Write-Host "  -> Done (acorn)" -ForegroundColor Green
        } else {
            Write-Host "  -> Failed" -ForegroundColor Red
        }
    }
}

Write-Host "`nAll done! Processed $count files." -ForegroundColor Green
Write-Host "Output directory: $outputDir"
