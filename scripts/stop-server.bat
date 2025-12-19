@echo off
REM Wrapper to run PowerShell stop script (clean copy).
REM Usage: stop-server.bat [node]

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0stop-dev-server.ps1" %*

pause
