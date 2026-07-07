#!/bin/bash

# React API Demo - Startup Script
# Chạy json-server và React app cùng một lúc

echo "🚀 React API Demo - Startup Script"
echo "=================================="
echo ""

# Kiểm tra xem json-server đã được cài đặt không
if ! command -v json-server &> /dev/null; then
    echo "❌ json-server chưa được cài đặt"
    echo "Cài đặt: npm install -g json-server"
    exit 1
fi

# Kiểm tra xem db.json có tồn tại không
if [ ! -f "db.json" ]; then
    echo "❌ File db.json không tìm thấy"
    echo "Đảm bảo bạn đang trong thư mục react-api-demo"
    exit 1
fi

# Cài đặt dependencies nếu node_modules chưa tồn tại
if [ ! -d "node_modules" ]; then
    echo "📦 Cài đặt dependencies..."
    npm install
    echo ""
fi

echo "✅ Tất cả điều kiện được thỏa mãn"
echo ""
echo "🎯 Bắt đầu ứng dụng..."
echo ""
echo "📝 Ghi chú:"
echo "  - JSON Server sẽ chạy trên port 3001"
echo "  - React App sẽ chạy trên port 3000"
echo "  - Nhấn Ctrl+C để dừng"
echo ""

# Chạy json-server ở background
echo "▶️  Khởi động JSON Server..."
json-server --watch db.json --port 3001 &
JSON_SERVER_PID=$!

# Chờ một chút để json-server khởi động
sleep 2

# Chạy React app
echo "▶️  Khởi động React App..."
echo ""

# Catch Ctrl+C để kill cả hai process
trap "kill $JSON_SERVER_PID; exit" INT

npm start

# Kill json-server khi React app được đóng
kill $JSON_SERVER_PID
