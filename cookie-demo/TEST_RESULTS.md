# 🎯 KẾT QUẢ TEST API - NestJS Midterm Project

**Ngày Test**: 06/23/2026, 7:40 AM  
**Server Status**: ✅ Running on http://localhost:3000  
**Kết quả**: ✅ **All 4 Requirements PASSED**

---

## 📋 Chi tiết Test Từng API

### ✅ Requirement 1: COOKIES

**Endpoint**: `GET http://localhost:3000/cookie/set`

```bash
curl http://localhost:3000/cookie/set
```

**Response**:
```json
{
  "message": "Cookie created"
}
```

**Status**: ✅ HTTP 200 OK

---

### ✅ Requirement 2: SESSION

**Endpoint**: `GET http://localhost:3000/session`

**Test 1 - Lần truy cập đầu tiên**:
```bash
curl -c /tmp/cookies.txt http://localhost:3000/session
```

**Response**:
```json
{
  "visits": 1
}
```

**Test 2 - Lần truy cập thứ hai**:
```bash
curl -b /tmp/cookies.txt http://localhost:3000/session
```

**Response**:
```json
{
  "visits": 2
}
```

**Status**: ✅ HTTP 200 OK - Session counter hoạt động chính xác

---

### ✅ Requirement 3: USER REGISTRATION (Password Hashing)

**Endpoint**: `POST http://localhost:3000/users/register`

```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"123456"}'
```

**Response**:
```json
{
  "id": 1,
  "username": "admin"
}
```

**Note**: Password được hash bằng bcrypt với 10 salt rounds và không trả về trong response.

**Status**: ✅ HTTP 201 Created

---

### ✅ Requirement 4: JWT AUTHENTICATION

#### **Part A: Login**

**Endpoint**: `POST http://localhost:3000/auth/login`

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"123456"}'
```

**Response**:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3ODIyMDA0OTQsImV4cCI6MTc4MjI4Njg5NH0.XvU4TAL8LpXHySMCgdu7KZv7cD3E5YWUFCMZhypV6gI"
}
```

**Token Details**:
- **Algorithm**: HS256
- **Expiration**: 1 day (86400 seconds)
- **Payload**: `{ sub: 1, username: "admin", iat: 1782200494, exp: 1782286894 }`

**Status**: ✅ HTTP 200 OK

#### **Part B: Protected Route**

**Endpoint**: `GET http://localhost:3000/auth/profile` (Protected with JwtAuthGuard)

```bash
curl http://localhost:3000/auth/profile \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3ODIyMDA0OTQsImV4cCI6MTc4MjI4Njg5NH0.XvU4TAL8LpXHySMCgdu7KZv7cD3E5YWUFCMZhypV6gI"
```

**Response**:
```json
{
  "sub": 1,
  "username": "admin",
  "iat": 1782200494,
  "exp": 1782286894
}
```

**Status**: ✅ HTTP 200 OK - JWT validation thành công

---

## 📊 Tóm tắt Kết quả

| Requirement | Tính năng | Status |
|---|---|---|
| 1️⃣ | Cookies Management | ✅ PASSED |
| 2️⃣ | Session Management | ✅ PASSED |
| 3️⃣ | User Registration + Password Hashing (bcrypt) | ✅ PASSED |
| 4️⃣ | JWT Authentication (Login + Protected Route) | ✅ PASSED |

---

## 🚀 Cách Chạy Server

```bash
cd /workspaces/CROWN-CO_Luxury/cookie-demo
npm run start:dev
```

Server sẽ chạy trên **http://localhost:3000**

---

## 📝 Ghi chú Công nghệ

- **Framework**: NestJS 11.0.1
- **TypeScript**: 5.7.3
- **Password Hashing**: bcrypt (10 salt rounds)
- **JWT Library**: @nestjs/jwt 11.0.2
- **Session Middleware**: express-session 1.19.0
- **Cookie Parser**: cookie-parser 1.4.7

---

## ✅ Tất cả 4 Requirements đều hoàn thành!

Sẵn sàng để submission! 🎉
