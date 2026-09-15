@echo off
title Muhammad Ali Gafurov - Portfolio
cd /d "%~dp0"
echo ========================================================
echo   Muhammad Ali Gafurov - Full-Stack Portfolio
echo   Ishga tushirilmoqda...
echo ========================================================

start "" http://localhost:5173
call npm run dev
