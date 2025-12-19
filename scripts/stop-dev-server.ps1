param([string]$mode)

# Common dev ports to check
$ports = @(5173,3000,8080,5174,3001)
$found = $false

foreach ($p in $ports) {
    $conns = Get-NetTCPConnection -LocalPort $p -State Listen -ErrorAction SilentlyContinue
    if ($conns) {
        $found = $true
        $pids = $conns | Select-Object -Unique -ExpandProperty OwningProcess
        foreach ($pid in $pids) {
            try {
                Stop-Process -Id $pid -Force -ErrorAction Stop
                Write-Host "Stopped PID $pid on port $p" -ForegroundColor Green
            } catch {
                Write-Host "Failed to stop PID $pid on port $p: $_" -ForegroundColor Yellow
            }
        }
    }
}

if (-not $found) {
    Write-Host "No processes found listening on common dev ports." -ForegroundColor Cyan
    if ($mode -eq 'node') {
        Write-Host "Killing all node.exe processes..." -ForegroundColor Cyan
        Get-Process -Name node -ErrorAction SilentlyContinue | ForEach-Object {
            try { Stop-Process -Id $_.Id -Force; Write-Host "Stopped node PID $($_.Id)" -ForegroundColor Green } catch { Write-Host "Failed to stop node PID $($_.Id): $_" -ForegroundColor Yellow }
        }
    } else {
        Write-Host "To force kill all node processes, run: .\stop-dev-server.bat node" -ForegroundColor Cyan
    }
}