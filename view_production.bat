@echo off
title Muhammad Ali Gafurov - Portfolio Production
cd /d "%~dp0"
echo ========================================================
echo   Muhammad Ali Gafurov - Production Build Preview
echo   Ishga tushirilmoqda... http://localhost:4173
echo ========================================================

start "" http://localhost:4173
call npm run preview -- --port 4173
