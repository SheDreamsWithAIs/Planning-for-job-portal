# Deployment Instructions

## Option 1: GitHub Actions (Recommended - Automatic)

Just push to `main` branch and GitHub Actions will automatically deploy to GitHub Pages.

1. Make sure your changes are committed
2. Push to main: `git push origin main`
3. GitHub Actions will build and deploy automatically
4. Wait a few minutes, then check: https://shedreamswithais.github.io/Planning-for-job-portal/

## Option 2: Manual Deployment (Windows)

### Using Batch Script:
```cmd
deploy.bat
```

### Using Manual Commands:
```cmd
cd frontend
npm run export
cd ..
git checkout gh-pages
git rm -rf . 2>nul || echo "No files to remove"
xcopy /E /I /Y frontend\out\* .
echo. > .nojekyll
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force
git checkout main
```

## Option 3: Manual Deployment (PowerShell)

If you need to use PowerShell, run:
```powershell
powershell -ExecutionPolicy Bypass -File deploy-manual.ps1
```

Or set execution policy for current session:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
.\deploy-manual.ps1
```

