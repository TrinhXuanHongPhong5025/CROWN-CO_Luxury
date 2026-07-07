@echo off
REM React API Demo - Startup Script for Windows
REM Chạy json-server và React app cùng một lúc

echo 🚀 React API Demo - Startup Script
echo ==================================
echo.

REM Kiểm tra xem json-server đã được cài đặt không
where json-server >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ json-server chưa được cài đặt
    echo Cài đặt: npm install -g json-server
    exit /b 1
)

REM Kiểm tra xem db.json có tồn tại không
if not exist "db.json" (
    echo ❌ File db.json không tìm thấy
    echo Đảm bảo bạn đang trong thư mục react-api-demo
    exit /b 1
)

REM Cài đặt dependencies nếu node_modules chưa tồn tại
if not exist "node_modules" (
    echo 📦 Cài đặt dependencies...
    call npm install
    echo.
)

echo ✅ Tất cả điều kiện được thỏa mãn
echo.
echo 🎯 Bắt đầu ứng dụng...
echo.
echo 📝 Ghi chú:
echo   - JSON Server sẽ chạy trên port 3001
echo   - React App sẽ chạy trên port 3000
echo   - Nhấn Ctrl+C để dừng
echo.

echo ▶️  Khởi động JSON Server...
start "JSON Server" cmd /k json-server --watch db.json --port 3001

timeout /t 2 /nobreak

echo ▶️  Khởi động React App...
echo.

call npm start

pause
