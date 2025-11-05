# Manual deployment script for GitHub Pages
Write-Host "Starting manual deployment..." -ForegroundColor Cyan

# Navigate to frontend directory
Set-Location frontend

# Build the static site
Write-Host "Building static site..." -ForegroundColor Yellow
npm run export

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    Set-Location ..
    exit 1
}

# Go back to root
Set-Location ..

# Create .nojekyll file to prevent Jekyll processing
New-Item -ItemType File -Path "frontend/out/.nojekyll" -Force | Out-Null

# Check if gh-pages branch exists
Write-Host "Checking for gh-pages branch..." -ForegroundColor Yellow
$branchCheck = git ls-remote --heads origin gh-pages 2>&1
$branchExists = $branchCheck -match "gh-pages"

if ($branchExists) {
    Write-Host "gh-pages branch exists, checking it out..." -ForegroundColor Yellow
    git checkout gh-pages
    git pull origin gh-pages
} else {
    Write-Host "Creating gh-pages branch..." -ForegroundColor Yellow
    git checkout --orphan gh-pages
    git rm -rf . 2>$null
}

# Copy built files
Write-Host "Copying built files..." -ForegroundColor Yellow
Copy-Item -Path "frontend/out/*" -Destination "." -Recurse -Force

# Add all files
git add .
git commit -m "Deploy to GitHub Pages - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# Push to gh-pages branch
Write-Host "Pushing to gh-pages branch..." -ForegroundColor Yellow
git push origin gh-pages --force

# Switch back to main branch
git checkout main

Write-Host "Deployment complete!" -ForegroundColor Green
Write-Host "Your site should be live at: https://shedreamswithais.github.io/Planning-for-job-portal/" -ForegroundColor Cyan
