## Hướng dẫn Test API

### 1. COOKIES

**Tạo cookie:**
```bash
curl -X GET http://localhost:3000/cookie/set
```

Kết quả:
```json
{
  "message": "Cookie created"
}
```

**Lấy tất cả cookies:**
```bash
curl -X GET http://localhost:3000/cookie/get
```

**Lấy cookie cụ thể:**
```bash
curl -X GET http://localhost:3000/cookie/username
```

**Xóa cookie:**
```bash
curl -X GET http://localhost:3000/cookie/delete
```

---

### 2. SESSION

**Truy cập session (tăng bộ đếm):**
```bash
curl -X GET http://localhost:3000/session
```

Lần đầu: `{"visits": 1}`
Lần hai: `{"visits": 2}`
Lần ba: `{"visits": 3}`

---

### 3. ĐĂNG KÝ & HASH PASSWORD

**Đăng ký user mới:**
```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"123456"}'
```

Kết quả:
```json
{
  "id": 1,
  "username": "admin"
}
```

Password đã được mã hóa bằng bcrypt (không lưu plaintext).

---

### 4. JWT AUTHENTICATION/AUTHORIZATION

**Đăng nhập (lấy JWT token):**
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"123456"}'
```

Kết quả:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Truy cập API được bảo vệ (cần token):**
```bash
curl -X GET http://localhost:3000/auth/profile \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

Kết quả:
```json
{
  "sub": 1,
  "username": "admin",
  "iat": 1719129600,
  "exp": 1719216000
}
```

---

### Cấu trúc dự án hoàn chỉnh:

```
src/
├── app.controller.ts
├── app.module.ts
├── main.ts
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.module.ts
│   ├── auth.guard.ts
│   └── constants.ts
├── users/
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── users.module.ts
│   ├── entities/
│   │   └── user.entity.ts
│   └── dto/
│       └── create-user.dto.ts
├── cookie/
│   └── cookie.controller.ts
└── session/
    └── session.controller.ts
```

### Chạy dự án:

```bash
npm run start:dev
```

Dự án sẽ chạy ở: `http://localhost:3000`
