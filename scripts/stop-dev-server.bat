@echo off
REM Wrapper to run PowerShell stop script.
REM Usage: stop-dev-server.bat [node]

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0stop-dev-server.ps1" %*

pause



























pause
nendlocal)  echo Stopped %KILLED% process(es).) else (  )    echo To force kill all node processes, run: %~nx0 node  ) else (    taskkill /IM node.exe /F    echo Killing all node.exe processes...  if /I "%~1"=="node" (  echo No processes found listening on common dev ports.
nif %KILLED% equ 0 ()  )    )      echo Failed to stop PID %%a    ) else (      set /a KILLED+=1      echo Stopped PID %%a    if !errorlevel! equ 0 (    taskkill /PID %%a /F >nul 2>&1    echo Found process %%a listening on port %%P  for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":%%P " ^| findstr /i "LISTENING"') do (for %%P in (%PORTS%) do (necho Checking common dev ports: %PORTS%