# 🔧 CURL COMMANDS - TEST ALL APIs

**Copy-paste các commands bên dưới để test toàn bộ API**

---

## 🚀 Requirement 1: COOKIES

### Command 1: Set Cookie
```bash
curl -v http://localhost:3000/cookie/set
```

### Command 2: Get Cookies
```bash
curl -b /tmp/cookies.txt http://localhost:3000/cookie/get
```

### Command 3: Get Specific Cookie
```bash
curl http://localhost:3000/cookie/username
```

### Command 4: Delete Cookie
```bash
curl http://localhost:3000/cookie/delete
```

---

## 🔄 Requirement 2: SESSION

### Command: Session Counter (Chạy 2 lần để thấy counter tăng)

**Lần 1**:
```bash
curl -c /tmp/cookies.txt http://localhost:3000/session
```

**Lần 2**:
```bash
curl -b /tmp/cookies.txt http://localhost:3000/session
```

**Output expected**:
```
Lần 1: {"visits": 1}
Lần 2: {"visits": 2}
```

---

## 👤 Requirement 3: USER REGISTRATION

### Command: Register User

```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"123456"}'
```

**Output expected**:
```json
{
  "id": 1,
  "username": "admin"
}
```

---

## 🔐 Requirement 4: JWT AUTHENTICATION

### Command 1: Login (Get Token)

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"123456"}'
```

**Output expected** (copy token từ đây):
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Command 2: Access Protected Route

**Bước 1**: Copy `access_token` từ login response

**Bước 2**: Chạy command này (thay `<TOKEN>` bằng token từ step 1):

```bash
curl http://localhost:3000/auth/profile \
  -H "Authorization: Bearer <TOKEN>"
```

**Ví dụ đầy đủ**:
```bash
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3ODIyMDA0OTQsImV4cCI6MTc4MjI4Njg5NH0.XvU4TAL8LpXHySMCgdu7KZv7cD3E5YWUFCMZhypV6gI"

curl http://localhost:3000/auth/profile \
  -H "Authorization: Bearer $TOKEN"
```

**Output expected**:
```json
{
  "sub": 1,
  "username": "admin",
  "iat": 1782200494,
  "exp": 1782286894
}
```

### Test: Protected Route Without Token (401 Error)

```bash
curl http://localhost:3000/auth/profile
```

**Output** (should error):
```json
{
  "message": "Unauthorized",
  "statusCode": 401
}
```

---

## 📋 ALL APIs Summary

| # | Method | Endpoint | Body | Status |
|---|--------|----------|------|--------|
| 1 | GET | `/cookie/set` | - | 200 ✅ |
| 2 | GET | `/cookie/get` | - | 200 ✅ |
| 3 | GET | `/cookie/username` | - | 200 ✅ |
| 4 | GET | `/cookie/delete` | - | 200 ✅ |
| 5 | GET | `/session` | - | 200 ✅ |
| 6 | POST | `/users/register` | {username, password} | 201 ✅ |
| 7 | POST | `/auth/login` | {username, password} | 200 ✅ |
| 8 | GET | `/auth/profile` | (Header: Authorization: Bearer TOKEN) | 200 ✅ |

---

## 🎯 Quick Test All (Copy-paste một phần)

```bash
#!/bin/bash

echo "=== 1. COOKIES ==="
curl -s http://localhost:3000/cookie/set | jq .
echo ""

echo "=== 2. SESSION (2 requests) ==="
curl -s -c /tmp/cookies.txt http://localhost:3000/session | jq .
curl -s -b /tmp/cookies.txt http://localhost:3000/session | jq .
echo ""

echo "=== 3. REGISTRATION ==="
curl -s -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"123456"}' | jq .
echo ""

echo "=== 4. LOGIN ==="
RESPONSE=$(curl -s -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"123456"}')
echo "$RESPONSE" | jq .
TOKEN=$(echo "$RESPONSE" | jq -r '.access_token')
echo ""

echo "=== 5. PROTECTED PROFILE ==="
curl -s http://localhost:3000/auth/profile \
  -H "Authorization: Bearer $TOKEN" | jq .
```

---

## 🛠️ Decode JWT Token (để verify content)

```bash
# Online: https://jwt.io
# Hoặc dùng jq:

TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3ODIyMDA0OTQsImV4cCI6MTc4MjI4Njg5NH0.XvU4TAL8LpXHySMCgdu7KZv7cD3E5YWUFCMZhypV6gI"

# Decode header
echo $TOKEN | cut -d. -f1 | base64 -d | jq .

# Decode payload
echo $TOKEN | cut -d. -f2 | base64 -d | jq .
```

---

**Tất cả commands đều sẵn sàng! Copy-paste vào terminal và test!** ✅
