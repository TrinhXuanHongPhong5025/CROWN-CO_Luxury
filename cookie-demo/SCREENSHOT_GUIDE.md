# 📸 HƯỚNG DẪN CAPTURE SCREENSHOTS - SUBMISSION

**Mục đích**: Cung cấp screenshots của tất cả 4 requirements để đơn vị chấm điểm verify.

---

## 🎯 5 Screenshots Bắt Buộc

### Screenshot 1: Cookie Creation ✅

**API**: `GET http://localhost:3000/cookie/set`

**Command**:
```bash
curl -v http://localhost:3000/cookie/set
```

**Cần capture**:
- [ ] Request URL: `http://localhost:3000/cookie/set`
- [ ] HTTP Method: `GET`
- [ ] Response Status: `200 OK`
- [ ] Response Body: `{"message": "Cookie created"}`
- [ ] Response Header có `Set-Cookie` 

**Tool gợi ý**: Postman, Insomnia, hoặc cURL output

---

### Screenshot 2: Session Counter ✅

**API**: `GET http://localhost:3000/session`

**Command**:
```bash
curl -c /tmp/cookies.txt http://localhost:3000/session
curl -b /tmp/cookies.txt http://localhost:3000/session
```

**Cần capture**:
- [ ] Request 1 Response: `{"visits": 1}`
- [ ] Request 2 Response: `{"visits": 2}`
- [ ] HTTP Status: `200 OK`
- [ ] Response Header có `Set-Cookie` (session ID)

**Nên capture**: 2 requests để thấy counter tăng

---

### Screenshot 3: User Registration ✅

**API**: `POST http://localhost:3000/users/register`

**Command**:
```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"123456"}'
```

**Cần capture**:
- [ ] Request URL: `http://localhost:3000/users/register`
- [ ] HTTP Method: `POST`
- [ ] Request Body: `{"username":"admin","password":"123456"}`
- [ ] Response Status: `200/201 OK`
- [ ] Response Body: `{"id": 1, "username": "admin"}`
- [ ] **Quan trọng**: Password không xuất hiện trong response (đã hash)

---

### Screenshot 4: JWT Login ✅

**API**: `POST http://localhost:3000/auth/login`

**Command**:
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"123456"}'
```

**Cần capture**:
- [ ] Request URL: `http://localhost:3000/auth/login`
- [ ] HTTP Method: `POST`
- [ ] Request Body: `{"username":"admin","password":"123456"}`
- [ ] Response Status: `200 OK`
- [ ] Response Body có `access_token` field
- [ ] Token format: JWT (3 phần cách dấu `.`)

**Ví dụ token**:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3ODIyMDA0OTQsImV4cCI6MTc4MjI4Njg5NH0.XvU4TAL8LpXHySMCgdu7KZv7cD3E5YWUFCMZhypV6gI
```

---

### Screenshot 5: Protected Route with JWT ✅

**API**: `GET http://localhost:3000/auth/profile` (Protected)

**Command**:
```bash
curl http://localhost:3000/auth/profile \
  -H "Authorization: Bearer <TOKEN>"
```

**Cần capture**:
- [ ] Request URL: `http://localhost:3000/auth/profile`
- [ ] HTTP Method: `GET`
- [ ] Request Header: `Authorization: Bearer <JWT_TOKEN>`
- [ ] Response Status: `200 OK`
- [ ] Response Body: `{"sub": 1, "username": "admin", "iat": ..., "exp": ...}`
- [ ] **Quan trọng**: Chỉ có quyền truy cập với valid JWT token

**Test lỗi** (nếu có):
```bash
curl http://localhost:3000/auth/profile
# Response: 401 Unauthorized (không có token)
```

---

## 📚 Step-by-Step Capture Guide

### Cách 1: Dùng Postman (Recommended)

1. Mở Postman
2. Tạo 5 requests:
   - **Request 1**: GET `http://localhost:3000/cookie/set`
   - **Request 2**: GET `http://localhost:3000/session` (chạy 2 lần)
   - **Request 3**: POST `http://localhost:3000/users/register`
   - **Request 4**: POST `http://localhost:3000/auth/login`
   - **Request 5**: GET `http://localhost:3000/auth/profile`

3. Chạy từng request, screenshot response
4. Lưu toàn bộ vào folder `screenshots/`

### Cách 2: Dùng cURL + Terminal

1. Chạy commands ở file này
2. Screenshot output của terminal
3. Lưu file markdown với kết quả

### Cách 3: Dùng Insomnia

Tương tự Postman, import requests và chạy

---

## 🗂️ Cấu trúc Folder Submission

```
CROWN-CO_Luxury/
├── cookie-demo/
│   ├── src/
│   ├── package.json
│   ├── README.md
│   ├── TEST_RESULTS.md          ← Chi tiết kết quả
│   └── SCREENSHOT_GUIDE.md      ← File này
└── screenshots/
    ├── 1-cookies.png
    ├── 2-session-1.png
    ├── 2-session-2.png
    ├── 3-registration.png
    ├── 4-login.png
    └── 5-protected-profile.png
```

---

## ✅ Checklist Trước Submit

- [ ] Server đang chạy (`npm run start:dev`)
- [ ] Test được tất cả 5 API thành công
- [ ] Capture được 5 screenshots (hoặc 6 nếu count request 2)
- [ ] Lưu screenshots vào folder `screenshots/`
- [ ] Điền tên, MSSV vào README.md
- [ ] Commit code vào GitHub
- [ ] Gửi link GitHub + screenshots cho giáo viên

---

## 🔧 Troubleshooting

### Port 3000 bị dùng
```bash
lsof -ti:3000 | xargs kill -9
```

### Build lỗi
```bash
cd /workspaces/CROWN-CO_Luxury/cookie-demo
npm install
npm run build
```

### Token hết hạn
- JWT token có expiration 1 day
- Nếu test sau 1 ngày, phải login lại để lấy token mới

### 401 Unauthorized
- Kiểm tra header: `Authorization: Bearer <TOKEN>`
- Không ghi nhầm thành `Token <TOKEN>` hoặc `Authorization <TOKEN>`
- Token phải được copy đầy đủ (3 phần)

---

## 📧 Thông tin cần gửi kèm

1. **GitHub Link**: Repository URL
2. **Screenshots**: Folder chứa 5-6 ảnh PNG
3. **TEST_RESULTS.md**: Chi tiết từng API
4. **Tên & MSSV**: Ở README.md của cookie-demo

---

**Good luck! 🚀**
