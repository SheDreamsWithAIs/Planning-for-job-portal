@echo off
REM Simple deployment script for GitHub Pages
echo Starting deployment...

REM Build the site
cd frontend
call npm run export
if errorlevel 1 (
    echo Build failed!
    cd ..
    exit /b 1
)
cd ..

REM Create .nojekyll
echo. > frontend\out\.nojekyll

REM Checkout gh-pages
echo Checking out gh-pages branch...
git checkout gh-pages 2>nul || git checkout --orphan gh-pages

REM Clean and copy files
echo Cleaning and copying files...
if exist .git (
    for /f %%i in ('dir /b /a-d') do @del /f /q "%%i" 2>nul
    for /d %%i in (*) do @if not "%%i"==".git" @rmdir /s /q "%%i" 2>nul
)
xcopy /E /I /Y frontend\out\* .

REM Commit and push
echo Committing and pushing...
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force

REM Switch back to main
git checkout main

echo Deployment complete!
echo Your site should be live at: https://shedreamswithais.github.io/Planning-for-job-portal/

