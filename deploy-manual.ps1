# Manual deployment script for GitHub Pages
# SAFETY: This script will only modify the gh-pages branch, never main

Write-Host "Starting manual deployment..." -ForegroundColor Cyan

# Safety check: Ensure we're on main branch before starting
$currentBranch = git rev-parse --abbrev-ref HEAD
if ($currentBranch -ne "main") {
    Write-Host "ERROR: Must be on 'main' branch to deploy. Currently on: $currentBranch" -ForegroundColor Red
    Write-Host "Please switch to main branch first: git checkout main" -ForegroundColor Yellow
    exit 1
}

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

# Verify build output exists
if (-not (Test-Path "out")) {
    Write-Host "ERROR: Build output directory 'out' not found!" -ForegroundColor Red
    Set-Location ..
    exit 1
}

Write-Host "Build successful. Output found in frontend/out" -ForegroundColor Green

# Go back to root
Set-Location ..

# Create .nojekyll file to prevent Jekyll processing
New-Item -ItemType File -Path "frontend/out/.nojekyll" -Force | Out-Null

# Stash any uncommitted changes to avoid conflicts
$hasChanges = git diff-index --quiet HEAD
if (-not $hasChanges) {
    Write-Host "Stashing uncommitted changes..." -ForegroundColor Yellow
    git stash push -m "Stashed before deployment $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
}

# Check if gh-pages branch exists remotely
Write-Host "Checking for gh-pages branch..." -ForegroundColor Yellow
$branchCheck = git ls-remote --heads origin gh-pages 2>&1

if ($branchCheck -match "gh-pages") {
    Write-Host "gh-pages branch exists, checking it out..." -ForegroundColor Yellow
    
    # Check if local gh-pages exists
    $localBranchExists = git show-ref --verify --quiet refs/heads/gh-pages
    if ($localBranchExists) {
        git checkout gh-pages
        git reset --hard origin/gh-pages
    } else {
        git checkout -b gh-pages origin/gh-pages
    }
} else {
    Write-Host "Creating new gh-pages branch..." -ForegroundColor Yellow
    git checkout --orphan gh-pages
    git rm -rf . 2>&1 | Out-Null
}

# SAFETY CHECK: Verify we're on gh-pages branch before doing anything destructive
$currentBranch = git rev-parse --abbrev-ref HEAD
if ($currentBranch -ne "gh-pages") {
    Write-Host "CRITICAL ERROR: Failed to switch to gh-pages branch. Currently on: $currentBranch" -ForegroundColor Red
    Write-Host "Switching back to main branch for safety..." -ForegroundColor Yellow
    git checkout main
    exit 1
}

Write-Host "Confirmed on gh-pages branch. Proceeding with deployment..." -ForegroundColor Green

# Clean up any existing files (except .git) - SAFE because we verified we're on gh-pages
Write-Host "Cleaning up existing files on gh-pages..." -ForegroundColor Yellow
Get-ChildItem -Path "." -Exclude ".git" | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

# Verify build output still exists before copying
if (-not (Test-Path "frontend/out")) {
    Write-Host "ERROR: Build output 'frontend/out' not found!" -ForegroundColor Red
    Write-Host "Switching back to main branch..." -ForegroundColor Yellow
    git checkout main
    exit 1
}

# Copy built files
Write-Host "Copying built files..." -ForegroundColor Yellow
Get-ChildItem -Path "frontend/out" | Copy-Item -Destination "." -Recurse -Force

# Add all files
git add .
git commit -m "Deploy to GitHub Pages - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# Push to gh-pages branch
Write-Host "Pushing to gh-pages branch..." -ForegroundColor Yellow
git push origin gh-pages --force

# Switch back to main branch
Write-Host "Switching back to main branch..." -ForegroundColor Yellow
git checkout main

# Restore stashed changes if any
$stashList = git stash list
if ($stashList) {
    Write-Host "Restoring stashed changes..." -ForegroundColor Yellow
    git stash pop
}

Write-Host "Deployment complete!" -ForegroundColor Green
Write-Host "Your site should be live at: https://shedreamswithais.github.io/Planning-for-job-portal/" -ForegroundColor Cyan
