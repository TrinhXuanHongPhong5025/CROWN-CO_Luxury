# Hướng Dẫn Nộp Bài - NestJS Midterm Project

## 📋 Yêu Cầu Nộp Bài

Sinh viên cần chuẩn bị **3 phần chính**:

### 1️⃣ Repo Có Code Đầy Đủ
- ✅ Đã có folder `src/` với tất cả module
- ✅ File `package.json` với tất cả dependencies
- ✅ Build thành công: `npm run build`
- ✅ Commit lên GitHub

**Cấu trúc hoàn chỉnh:**
```
cookie-demo/
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   ├── auth.guard.ts
│   │   └── constants.ts
│   ├── users/
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── users.module.ts
│   │   ├── entities/user.entity.ts
│   │   └── dto/create-user.dto.ts
│   ├── cookie/
│   │   └── cookie.controller.ts
│   ├── session/
│   │   └── session.controller.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   └── main.ts
├── package.json
├── tsconfig.json
└── API_GUIDE.md
```

---

### 2️⃣ Ảnh Chụp Màn Hình API Test (Postman/cURL)

**Chạy server:**
```bash
cd /workspaces/CROWN-CO_Luxury/cookie-demo
npm run start:dev
```

**Test các API này và chụp ảnh kết quả:**

#### A. COOKIES API
```
GET http://localhost:3000/cookie/set
```
Ảnh chụp kết quả: `{"message": "Cookie created"}`

---

#### B. SESSION API
```
GET http://localhost:3000/session
```
Ảnh chụp kết quả: `{"visits": 1}` (gọi lần thứ nhất)

---

#### C. USER REGISTRATION (Yêu cầu 3)
```
POST http://localhost:3000/users/register
Content-Type: application/json

{
  "username": "admin",
  "password": "123456"
}
```

Ảnh chụp kết quả (chỉ hiện username, password đã được mã hóa):
```json
{
  "id": 1,
  "username": "admin"
}
```

---

#### D. JWT LOGIN (Yêu cầu 4 - Part 1)
```
POST http://localhost:3000/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "123456"
}
```

Ảnh chụp kết quả (access_token):
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**⚠️ Quan trọng:** Sao chép token này để dùng cho bước tiếp theo

---

#### E. JWT PROTECTED ROUTE (Yêu cầu 4 - Part 2)
```
GET http://localhost:3000/auth/profile
Authorization: Bearer <paste_token_here>
```

Ảnh chụp kết quả (payload từ JWT):
```json
{
  "sub": 1,
  "username": "admin",
  "iat": 1719129600,
  "exp": 1719216000
}
```

---

### 3️⃣ Ảnh Chụp Dữ Liệu CSDL

**Dữ liệu được lưu trong memory (UsersService):**

Vì dự án này sử dụng in-memory storage (không dùng database thực), cần chụp ảnh của:

**Option 1: Dùng DevTools (F12)**
1. Mở Postman
2. Gửi request đăng ký: `POST /users/register`
3. Console log hiển thị user đã lưu (có id, username)
4. Chụp ảnh response
5. Chứng minh username được lưu (có `"id": 1, "username": "admin"`)

**Option 2: Thêm endpoint để xem tất cả users**
Nếu muốn thêm endpoint để hiển thị dữ liệu, sửa file `users.service.ts`:

```typescript
// Thêm method này
getAllUsers(): Omit<User, 'password'>[] {
  return this.users.map(u => {
    const { password, ...result } = u;
    return result;
  });
}
```

Sau đó thêm vào `users.controller.ts`:

```typescript
@Get()
getAllUsers() {
  return this.usersService.getAllUsers();
}
```

Rồi test:
```
GET http://localhost:3000/users
```

Ảnh chụp kết quả:
```json
[
  {source c
    "id": 1,
    "username": "admin"
  },
  {
    "id": 2,
    "username": "john"
  }
]
```

---

## 🎯 Tóm Tắt Nộp Bài

| Yêu Cầu | Chứng Minh |
|---------|-----------|
| **Yêu Cầu 1: Cookies** | Ảnh API GET /cookie/set thành công |
| **Yêu Cầu 2: Session** | Ảnh API GET /session (visits tăng lên) |
| **Yêu Cầu 3: User + Hash** | Ảnh POST /users/register (password mã hóa) |
| **Yêu Cầu 4: JWT Auth** | Ảnh POST /auth/login (access_token) + GET /auth/profile (có token) |
| **Dữ liệu CSDL** | Ảnh response hiển thị user đã lưu |
| **Code** | Repo GitHub có tất cả ode |

---

## 📸 Cách Chụp Ảnh Trong Postman

1. **Mở Postman** (hoặc dùng cURL)
2. **Nhập URL**: `http://localhost:3000/users/register`
3. **Chọn Method**: `POST`
4. **Header**: `Content-Type: application/json`
5. **Body** (JSON):
   ```json
   {
     "username": "admin",
     "password": "123456"
   }
   ```
6. **Click Send**
7. **Chụp ảnh**: 
   - Response code (200 OK)
   - Response body
   - Timestamp (chứng minh thực hiện)

---

## ✅ Checklist Nộp Bài

- [ ] Code đã commit lên GitHub
- [ ] `npm run build` chạy thành công (không lỗi)
- [ ] Có ảnh API Cookies thành công
- [ ] Có ảnh API Session thành công
- [ ] Có ảnh API Register User thành công (password mã hóa)
- [ ] Có ảnh API Login (JWT token)
- [ ] Có ảnh API Protected Route (dùng JWT token)
- [ ] Có ảnh dữ liệu user trong CSDL/response
- [ ] Gửi link GitHub repo

---

## 🔧 Troubleshooting

**Nếu server không chạy được:**
```bash
cd /workspaces/CROWN-CO_Luxury/cookie-demo
npm install
npm run start:dev
```

**Nếu lỗi port 3000 đã dùng:**
```bash
lsof -ti:3000 | xargs kill -9
npm run start:dev
```

**Nếu cần rebuild:**
```bash
npm run build
```

---

**Chúc bạn nộp bài thành công! 🎉**
