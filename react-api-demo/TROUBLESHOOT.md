# 🔧 Sửa lỗi - Bảng dữ liệu trống

## ❌ Vấn đề: Bảng hiển thị "Không có dữ liệu"

Đây là hướng dẫn sửa lỗi khi bảng người dùng không hiển thị dữ liệu.

---

## ✅ Checklist sửa lỗi

### 1️⃣ Kiểm tra JSON Server

**Bước 1**: Mở Terminal và chạy lệnh này:

```bash
curl http://localhost:3001/users
```

**Kết quả mong đợi**: Hiển thị danh sách 5 users

**Nếu lỗi**:
```bash
curl: (7) Failed to connect to localhost port 3001: Connection refused
```

**→ Giải pháp**: JSON Server chưa chạy!

```bash
# Mở terminal mới (Terminal 1)
cd /workspaces/CROWN-CO_Luxury/react-api-demo
json-server --watch db.json --port 3001
```

Giữ terminal này mở!

---

### 2️⃣ Kiểm tra React App

**Bước 2**: Kiểm tra React app có lỗi không

1. Mở trình duyệt (hoặc reload page)
2. Nhấn **F12** để mở DevTools
3. Chọn tab **Console**
4. Tìm **lỗi đỏ** (errors)

**Lỗi phổ biến**:

#### A. "Cannot read property 'get' of undefined"
→ axios chưa import

```javascript
// Sửa: Thêm dòng này ở đầu Content.js
import axios from "axios";
```

#### B. "ReferenceError: axios is not defined"
→ axios chưa cài đặt

```bash
npm install axios
```

#### C. "Cannot GET /users"
→ JSON Server không chạy (xem bước 1)

#### D. "Network failed"
→ Port hoặc URL sai

```javascript
// Kiểm tra URL đúng:
// http://localhost:3001/users ✅ Đúng
// http://localhost:3000/users ❌ Sai (đó là port React)
// http://127.0.0.1:3001/users ✅ Cũng được
```

---

### 3️⃣ Kiểm tra dữ liệu

**Bước 3**: Xem dữ liệu API trả về

1. Trong DevTools, chọn tab **Network**
2. Reload page (F5)
3. Tìm request đến `http://localhost:3001/users`
4. Xem Response

**Response mong đợi**:
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

---

### 4️⃣ Reload React App

**Bước 4**: Reload ứng dụng

1. Nhấn **Ctrl+R** hoặc **Cmd+R** để reload page
2. Hoặc đóng Terminal React (Ctrl+C) rồi chạy lại:

```bash
npm start
```

---

## 🎯 Quy trình đầy đủ (từ đầu)

Nếu bạn chưa bắt đầu, làm theo các bước này:

### Terminal 1 - JSON Server

```bash
cd /workspaces/CROWN-CO_Luxury/react-api-demo
json-server --watch db.json --port 3001
```

**Đợi cho đến khi thấy**:
```
  ✓ Server running at http://localhost:3001
```

**Giữ terminal này MỞ!**

### Terminal 2 - React App (MỞ TERMINAL MỚI)

```bash
cd /workspaces/CROWN-CO_Luxury/react-api-demo
npm start
```

**Đợi cho đến khi thấy**:
```
  ✓ Compiled successfully!
  ✓ Local: http://localhost:3000
```

Trình duyệt sẽ tự động mở `http://localhost:3000`

---

## 🚨 Nếu vẫn không hoạt động

### Step 1: Kiểm tra cả 2 terminal có chạy không

```
Terminal 1: json-server ✅ PHẢI MỞ
Terminal 2: npm start ✅ PHẢI MỞ
Terminal 3: (nếu cần, kiểm tra logs)
```

### Step 2: Xóa cache trình duyệt

1. Nhấn **Ctrl+Shift+Delete** (Windows/Linux) hoặc **Cmd+Shift+Delete** (Mac)
2. Chọn "All time"
3. Chọn "Cookies and cached images"
4. Nhấn "Clear browsing data"
5. Reload trang

### Step 3: Kiểm tra db.json có dữ liệu không

```bash
cat /workspaces/CROWN-CO_Luxury/react-api-demo/db.json
```

Phải thấy dữ liệu, không phải file rỗng.

### Step 4: Kiểm tra port không bị chiếm

```bash
# Check port 3000
lsof -i :3000

# Check port 3001
lsof -i :3001
```

Nếu có process, kill nó:
```bash
kill -9 <PID>
```

---

## 📊 Chẩn đoán nâng cao

### Test 1: Gọi API trực tiếp

```bash
# Lấy tất cả users
curl http://localhost:3001/users

# Lấy user ID 1
curl http://localhost:3001/users/1

# Kiểm tra CORS headers
curl -i http://localhost:3001/users
```

### Test 2: Kiểm tra React Component

Mở DevTools → Console, chạy:

```javascript
// Kiểm tra axios
console.log(typeof axios); // Phải là "object"

// Thử fetch manual
axios.get('http://localhost:3001/users')
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
```

### Test 3: Kiểm tra db.json format

File `db.json` phải có format đúng:

```json
{
  "users": [
    {
      "id": 1,
      "name": "...",
      "email": "...",
      "department": "...",
      "status": "Active"
    }
  ]
}
```

Không được có:
- ❌ Dấu phẩy thừa `,}`
- ❌ Quotes không khớp
- ❌ Dòng cuối không có dữ liệu

---

## 💻 Dùng Postman (nâng cao)

Nếu có Postman, test API:

1. Mở Postman
2. Tạo request mới → GET
3. URL: `http://localhost:3001/users`
4. Nhấn "Send"
5. Xem Response

**Response mong đợi**: 200 OK với dữ liệu JSON

---

## 🔄 Restart từ đầu

Nếu không hoạt động, thử từ đầu:

```bash
# Bước 1: Tắt cả terminal
# Ctrl+C để tắt json-server (Terminal 1)
# Ctrl+C để tắt React app (Terminal 2)

# Bước 2: Xóa node_modules
cd /workspaces/CROWN-CO_Luxury/react-api-demo
rm -rf node_modules
rm package-lock.json

# Bước 3: Cài đặt lại
npm install

# Bước 4: Kiểm tra db.json
cat db.json  # Phải có dữ liệu

# Bước 5: Chạy lại (Terminal 1)
json-server --watch db.json --port 3001

# Bước 6: Chạy lại (Terminal 2)
npm start
```

---

## ✅ Biết bạn đã sửa xong khi

- ✅ DevTools Console không có lỗi đỏ
- ✅ Network tab: `http://localhost:3001/users` có Response 200
- ✅ Bảng hiển thị 5 rows dữ liệu
- ✅ Status badges hiển thị (xanh/đỏ)
- ✅ Có thể reload page và vẫn hoạt động

---

## 📞 Cần thêm giúp?

1. **Xem console error**: F12 → Console
2. **Kiểm tra Network**: F12 → Network → reload
3. **Google search**: Cái error message
4. **Hỏi giáo viên/mentor**

---

## 🎬 Video guide (tóm tắt)

1. **Terminal 1**: `json-server --watch db.json --port 3001`
2. **Terminal 2**: `npm start`
3. **Browser**: Reload page
4. **DevTools**: Kiểm tra lỗi
5. **Xong!**

---

**Chúc bạn sửa lỗi thành công! 🚀**
