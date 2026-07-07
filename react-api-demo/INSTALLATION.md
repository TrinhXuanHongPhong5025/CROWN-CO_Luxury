# 📦 Hướng dẫn cài đặt - React API Demo

## 📋 Yêu cầu hệ thống

- **Node.js**: v14.0.0 trở lên
- **npm**: v6.0.0 trở lên
- **OS**: Windows, macOS, hoặc Linux
- **Trình duyệt**: Chrome, Firefox, Safari, Edge (bất kỳ phiên bản hiện đại)

## 🔍 Kiểm tra phiên bản

```bash
node --version
npm --version
```

Nếu chưa cài đặt, tải từ [nodejs.org](https://nodejs.org/)

## 📥 Cài đặt toàn bộ hệ thống

### 1️⃣ Cài đặt json-server globally

```bash
npm install -g json-server
```

**Kiểm tra cài đặt:**
```bash
json-server --version
```

### 2️⃣ Cài đặt project dependencies

```bash
cd /workspaces/CROWN-CO_Luxury/react-api-demo
npm install
```

**Lợi ích:**
- Cài đặt React, React Bootstrap, axios, react-icons
- Thiết lập build tools
- Chuẩn bị môi trường development

**Thời gian**: ~3-5 phút (phụ thuộc tốc độ mạng)

**Kết quả mong đợi:**
```
added 1352 packages in 4.2s

273 packages are looking for funding
run `npm fund` for details
```

## 🚀 Chạy ứng dụng

### Cách 1: Sử dụng Script (Khuyến nghị)

#### Trên macOS/Linux:
```bash
cd /workspaces/CROWN-CO_Luxury/react-api-demo
bash start-dev.sh
```

#### Trên Windows:
```bash
cd /workspaces/CROWN-CO_Luxury/react-api-demo
start-dev.bat
```

### Cách 2: Chạy thủ công (2 Terminal)

#### Terminal 1 - JSON Server:
```bash
cd /workspaces/CROWN-CO_Luxury/react-api-demo
json-server --watch db.json --port 3001
```

**Kết quả mong đợi:**
```
  ✓ JSON Server started at http://localhost:3001
  ✓ Watching db.json...
```

#### Terminal 2 - React App:
```bash
cd /workspaces/CROWN-CO_Luxury/react-api-demo
npm start
```

**Kết quả mong đợi:**
```
  > react-api-demo@0.1.0 start
  > react-scripts start

  On Your Network:  http://192.168.x.x:3000
  
  Compiled successfully!
```

## ✅ Kiểm tra cài đặt

### 1. Kiểm tra JSON Server
```bash
curl http://localhost:3001/users
```

**Kết quả:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@gmail.com",
    "department": "IT",
    "status": "Active"
  },
  ...
]
```

### 2. Kiểm tra React App
- Mở `http://localhost:3000` trong trình duyệt
- Bạn sẽ thấy:
  - ✅ Header (navbar xanh)
  - ✅ Banner (carousel)
  - ✅ Bảng dữ liệu users
  - ✅ Footer

### 3. Kiểm tra Console
- Nhấn **F12** để mở DevTools
- Không nên có lỗi đỏ (error)

## 📁 Cấu trúc thư mục sau cài đặt

```
react-api-demo/
├── node_modules/          ← Dependencies (không commit)
├── public/                ← Static files
├── src/
│   ├── components/        ← React components
│   │   ├── Header.js
│   │   ├── Banner.js
│   │   ├── Content.js
│   │   └── Footer.js
│   ├── App.js             ← Main app component
│   ├── index.js           ← Entry point
│   └── index.css          ← Global styles
├── db.json                ← Mock API data
├── package.json           ← Dependencies config
├── start-dev.sh           ← Startup script (Linux/Mac)
├── start-dev.bat          ← Startup script (Windows)
├── README.md              ← Documentation
├── QUICKSTART.md          ← Quick start guide
└── INSTALLATION.md        ← File này
```

## 🐛 Xử lý sự cố

### Lỗi: "npm: command not found"

**Nguyên nhân**: Node.js chưa cài đặt
**Giải pháp**:
1. Cài đặt Node.js từ [nodejs.org](https://nodejs.org/)
2. Khởi động lại terminal
3. Kiểm tra: `npm --version`

### Lỗi: "json-server: command not found"

**Nguyên nhân**: json-server chưa cài đặt globally
**Giải pháp**:
```bash
npm install -g json-server
```

### Lỗi: "Port 3000 already in use"

**Nguyên nhân**: Có ứng dụng khác đang sử dụng port 3000
**Giải pháp**:
```bash
# Cách 1: Tìm process
lsof -i :3000  # macOS/Linux
netstat -ano | findstr :3000  # Windows

# Cách 2: Kill process
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows

# Cách 3: Sử dụng port khác
PORT=3002 npm start
```

### Lỗi: "Cannot GET /users"

**Nguyên nhân**: JSON Server không chạy
**Giải pháp**: Kiểm tra Terminal 1 đang chạy json-server không

### Lỗi: "node_modules not found"

**Nguyên nhân**: Dependencies chưa cài đặt
**Giải pháp**:
```bash
npm install
```

### Lỗi: "Cannot find module 'react-icons'"

**Nguyên nhân**: react-icons chưa cài đặt
**Giải pháp**:
```bash
npm install react-icons
```

### Bảng dữ liệu trống

**Nguyên nhân**: API request thất bại
**Giải pháp**:
1. Mở DevTools (F12)
2. Kiểm tra Console tab
3. Kiểm tra Network tab
4. Xác nhân JSON Server đang chạy
5. Kiểm tra db.json có dữ liệu không

## 🔄 Cập nhật dependencies

```bash
# Cập nhật tất cả
npm update

# Cập nhật package cụ thể
npm install react-icons@latest

# Kiểm tra outdated packages
npm outdated
```

## 🧹 Dọn dẹp

```bash
# Xóa node_modules
rm -rf node_modules  # macOS/Linux
rmdir /s node_modules  # Windows

# Xóa package-lock.json
rm package-lock.json  # macOS/Linux
del package-lock.json  # Windows

# Cài đặt lại
npm install
```

## 📊 Dung lượng

Kích thước cài đặt:
- `node_modules`: ~400-500 MB
- `package.json` + `package-lock.json`: ~1 MB
- Mã nguồn: ~100 KB

**Tổng**: ~500 MB

## ✨ Sau cài đặt

1. ✅ Kiểm tra tất cả lỗi từ xử lý sự cố trên
2. ✅ Mở [QUICKSTART.md](./QUICKSTART.md) để bắt đầu
3. ✅ Đọc [README.md](./README.md) để hiểu thêm
4. ✅ Explore code và thử sửa đổi

## 🎓 Tiếp theo

- Tìm hiểu React Hooks
- Tìm hiểu axios và API calls
- Tìm hiểu React Bootstrap
- Tìm hiểu Bootstrap Icons

## 🤝 Cần giúp đỡ?

1. Kiểm tra [QUICKSTART.md](./QUICKSTART.md)
2. Kiểm tra [README.md](./README.md)
3. Kiểm tra file `.gitignore` để không commit `node_modules`

---

**Happy Coding! 🎉**
