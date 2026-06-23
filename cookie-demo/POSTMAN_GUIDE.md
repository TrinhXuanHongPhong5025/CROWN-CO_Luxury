# 📮 HƯỚNG DẪN TEST POSTMAN - Đầy Đủ & Chi Tiết

**Postman** là cách dễ nhất để test API mà không cần dùng command line!

---

## 🚀 Bước 1: Cài Đặt Postman

### Tải Postman
- **Website**: https://www.postman.com/downloads/
- **Hỗ trợ**: Windows, Mac, Linux
- Chọn phiên bản **Postman for Web** hoặc **Desktop App**

### Cài Đặt
1. Download file
2. Cài đặt như bình thường
3. Mở Postman
4. Tạo tài khoản (hoặc skip)

---

## 📋 Bước 2: Tạo New Collection

**Collection** = Nhóm các requests API

### Bước tạo Collection

1. **Mở Postman** → Click **File** → **New**
2. Chọn **Collection**
3. Đặt tên: **NestJS Midterm APIs**
4. Click **Create**

---

## 🔧 Bước 3: Tạo Requests cho 4 Requirements

### REQUEST 1️⃣: Cookie Set

1. **Click** `+ New` → Chọn **Request**
2. **Đặt tên**: `1. Cookie - Set` 
3. **Thêm vào**: Collection `NestJS Midterm APIs`

**Cấu hình Request**:
- **Method**: `GET`
- **URL**: `http://localhost:3000/cookie/set`
- **Click Send** (nút xanh bên phải)

**Expected Response**:
```json
{
  "message": "Cookie created"
}
```

---

### REQUEST 2️⃣: Cookie Get

1. **Click** `+ New` → Chọn **Request**
2. **Đặt tên**: `2. Cookie - Get All`
3. **Cấu hình**:
   - **Method**: `GET`
   - **URL**: `http://localhost:3000/cookie/get`

---

### REQUEST 3️⃣: Session Counter (2 requests)

#### Request 3A: Session - First Visit

1. **Click** `+ New` → Chọn **Request**
2. **Đặt tên**: `3A. Session - First Visit`
3. **Cấu hình**:
   - **Method**: `GET`
   - **URL**: `http://localhost:3000/session`
   - **Tab Cookies**: Sẽ tự lưu cookies từ session

**Expected Response**: 
```json
{
  "visits": 1
}
```

#### Request 3B: Session - Second Visit

1. **Click** `+ New` → Chọn **Request**
2. **Đặt tên**: `3B. Session - Second Visit`
3. **Cấu hình**:
   - **Method**: `GET`
   - **URL**: `http://localhost:3000/session`

**Expected Response**:
```json
{
  "visits": 2
}
```

**Lưu ý**: Postman sẽ tự động lưu cookies từ request 3A, nên request 3B sẽ nhận session ID cũ → counter tăng!

---

### REQUEST 4️⃣: User Registration

1. **Click** `+ New` → Chọn **Request**
2. **Đặt tên**: `4. User Registration`
3. **Cấu hình**:

#### URL & Method
- **Method**: `POST`
- **URL**: `http://localhost:3000/users/register`

#### Headers
- Click **Headers** tab
- **Key**: `Content-Type`
- **Value**: `application/json`

#### Body
- Click **Body** tab
- Chọn **raw**
- Chọn format **JSON** (dropdown bên phải)
- Copy-paste:

```json
{
  "username": "admin",
  "password": "123456"
}
```

**Click Send**

**Expected Response**:
```json
{
  "id": 1,
  "username": "admin"
}
```

**⚠️ Quan trọng**: Password **không** xuất hiện trong response vì đã hash!

---

### REQUEST 5️⃣: Login (Get JWT Token)

1. **Click** `+ New` → Chọn **Request**
2. **Đặt tên**: `5. Auth - Login`
3. **Cấu hình**:

#### URL & Method
- **Method**: `POST`
- **URL**: `http://localhost:3000/auth/login`

#### Headers
- **Key**: `Content-Type`
- **Value**: `application/json`

#### Body
- Chọn **raw** → **JSON**
- Copy-paste:

```json
{
  "username": "admin",
  "password": "123456"
}
```

**Click Send**

**Expected Response**:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3ODIyMDA0OTQsImV4cCI6MTc4MjI4Njg5NH0.XvU4TAL8LpXHySMCgdu7KZv7cD3E5YWUFCMZhypV6gI"
}
```

**💾 Lưu Token**:
- **Bước 1**: Select và copy token từ response (phần trong quotes)
- **Bước 2**: Lưu vào nơi safe (notepad hoặc ghi nhớ)
- **Bước 3**: Dùng token này cho request 6

---

### REQUEST 6️⃣: Protected Profile (Với JWT Token)

1. **Click** `+ New` → Chọn **Request**
2. **Đặt tên**: `6. Auth - Protected Profile`
3. **Cấu hình**:

#### URL & Method
- **Method**: `GET`
- **URL**: `http://localhost:3000/auth/profile`

#### Headers
**Bước 1**: Click **Headers** tab

**Bước 2**: Thêm header:
- **Key**: `Authorization`
- **Value**: `Bearer <PASTE_TOKEN_HERE>`

**Ví dụ đầy đủ**:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3ODIyMDA0OTQsImV4cCI6MTc4MjI4Njg5NH0.XvU4TAL8LpXHySMCgdu7KZv7cD3E5YWUFCMZhypV6gI
```

**Click Send**

**Expected Response**:
```json
{
  "sub": 1,
  "username": "admin",
  "iat": 1782200494,
  "exp": 1782286894
}
```

**💡 Tip**: Nếu response là `401 Unauthorized`, nghĩa là:
- Token sai hoặc thiếu
- Kiểm tra header `Authorization` đã đúng chưa

---

## 📊 Toàn bộ Collection

Sau khi tạo xong, Collection của bạn sẽ có 6 requests:

```
📁 NestJS Midterm APIs
├── 1️⃣ 1. Cookie - Set                    (GET)
├── 2️⃣ 2. Cookie - Get All               (GET)
├── 3️⃣ 3A. Session - First Visit         (GET)
├── 4️⃣ 3B. Session - Second Visit        (GET)
├── 5️⃣ 4. User Registration              (POST)
├── 6️⃣ 5. Auth - Login                   (POST)
└── 7️⃣ 6. Auth - Protected Profile       (GET + Bearer Token)
```

---

## 🔄 Run All Requests in Order (Recommended)

Postman có tính năng chạy tất cả requests theo thứ tự!

### Bước 1: Open Collection Runner
- Click **Collections** (bên trái)
- Right-click collection `NestJS Midterm APIs`
- Chọn **Run Collection**

### Bước 2: Configure Runner
- **Select All Requests** (tất cả đều được chọn)
- **Delay between requests**: `500` ms (tránh quá nhanh)
- Click **Run NestJS Midterm APIs** (nút chạy)

### Bước 3: Xem Results
- Xanh ✅ = Pass (2xx status)
- Đỏ ❌ = Fail
- Xem chi tiết từng request

---

## 📸 Capture Screenshots cho Submission

### Cách 1: Screenshot Response (Dễ nhất)

**Mỗi request**:
1. Click **Send**
2. Xem Response tab
3. **Ctrl+Print Screen** (hoặc Cmd+Shift+5 trên Mac)
4. Crop phần response
5. Lưu ảnh

**Cần capture cụ thể**:

#### Screenshot 1: Cookie Set
- URL: `http://localhost:3000/cookie/set`
- Status: `200 OK`
- Response: `{"message": "Cookie created"}`

#### Screenshot 2: Session Request 1
- URL: `http://localhost:3000/session`
- Status: `200 OK`
- Response: `{"visits": 1}`

#### Screenshot 3: Session Request 2
- URL: `http://localhost:3000/session`
- Status: `200 OK`
- Response: `{"visits": 2}`
- **Lưu ý**: Chỉ khác ở response visits tăng từ 1 → 2

#### Screenshot 4: User Registration
- URL: `http://localhost:3000/users/register`
- Method: `POST`
- Body: `{"username":"admin","password":"123456"}`
- Status: `201 Created` (hoặc `200 OK`)
- Response: `{"id": 1, "username": "admin"}`

#### Screenshot 5: Login (Get Token)
- URL: `http://localhost:3000/auth/login`
- Method: `POST`
- Status: `200 OK`
- Response: `{"access_token": "..."}`

#### Screenshot 6: Protected Profile
- URL: `http://localhost:3000/auth/profile`
- Headers: `Authorization: Bearer <token>`
- Status: `200 OK`
- Response: `{"sub": 1, "username": "admin", ...}`

---

## 🎯 Quick Test Checklist (Postman)

Chạy trong order này:

- [ ] **1. Cookie - Set** → 200 OK
- [ ] **2. Cookie - Get All** → 200 OK
- [ ] **3A. Session - First Visit** → 200 OK, visits: 1
- [ ] **3B. Session - Second Visit** → 200 OK, visits: 2
- [ ] **4. User Registration** → 201 OK, id: 1, username: admin
- [ ] **5. Auth - Login** → 200 OK, access_token returned
- [ ] **6. Auth - Protected Profile** → 200 OK, user payload returned

✅ **Nếu tất cả pass → Ready to submit!**

---

## 💾 Lưu Collection (Export)

Muốn lưu collection để dùng lại hoặc chia sẻ:

### Bước 1: Export Collection
- Right-click collection
- Chọn **Export**
- Chọn format **Collection v2.1**
- Click **Export**
- Lưu file (tên: `NestJS_Midterm_APIs.json`)

### Bước 2: Share hoặc Import lại
- Gửi file `.json` cho teammates
- Họ import: **File** → **Import** → chọn file

---

## 🔐 Environment Variables (Optional)

Nếu muốn dynamic tokens (không copy-paste):

### Bước 1: Create Environment
- Click **Environments** (trái)
- Click **+** → New Environment
- **Name**: `Midterm Dev`
- **Variable**:
  - **Key**: `token`
  - **Value**: (để trống)
- **Save**

### Bước 2: Use in Requests
- Thay vì paste full token: `Bearer {{token}}`
- Sau khi login, copy token
- Click **Environments** → **Midterm Dev** → paste vào `token` value

### Bước 3: Use Token
- Requests khác set header: `Authorization: Bearer {{token}}`
- Postman sẽ auto replace `{{token}}`

---

## ⚙️ Troubleshooting Postman

### ❌ "Cannot GET /..."
**Nguyên nhân**: Server không chạy
**Fix**: 
```bash
cd /workspaces/CROWN-CO_Luxury/cookie-demo
npm run start:dev
```

### ❌ "Connection refused"
**Nguyên nhân**: Port 3000 không open
**Fix**:
```bash
lsof -ti:3000 | xargs kill -9
npm run start:dev
```

### ❌ "401 Unauthorized"
**Nguyên nhân**: Token sai hoặc thiếu
**Fix**:
- Check header: `Authorization: Bearer <TOKEN>` (có Bearer không?)
- Token hết hạn? Chạy login lại
- Check token không bị cắt ngắn

### ❌ "Session cookie không lưu"
**Nguyên nhân**: Postman cookie setting
**Fix**:
- **Preferences** → **Cookies** → Enable `Allow reading cookies`
- Hoặc manually add cookie từ request 3A vào request 3B

---

## 📋 Expected All Responses Summary

| Request | Status | Response |
|---|---|---|
| 1. Cookie Set | 200 | `{"message": "Cookie created"}` |
| 2. Cookie Get | 200 | `{"username": "admin"}` |
| 3A. Session 1 | 200 | `{"visits": 1}` |
| 3B. Session 2 | 200 | `{"visits": 2}` |
| 4. Register | 201 | `{"id": 1, "username": "admin"}` |
| 5. Login | 200 | `{"access_token": "..."}` |
| 6. Profile | 200 | `{"sub": 1, "username": "admin", ...}` |

---

## ✨ Tips for Better Testing

1. **Test theo thứ tự**: Cookie → Session → Register → Login → Profile
2. **Lưu token**: Copy token từ Login để dùng cho Profile
3. **Screenshot cẩn thận**: 
   - Capture cả URL
   - Capture cả status code
   - Capture cả response body
4. **Test lỗi** (optional): 
   - Thử login với password sai
   - Thử access profile không có token
5. **Save requests**: Postman tự động lưu

---

## 🎉 Done!

**Bạn đã tạo xong Postman Collection!**

- ✅ 6 requests configured
- ✅ Ready to test all 4 requirements
- ✅ Ready to capture screenshots
- ✅ Ready to submit

**Next**: 
1. Run tất cả requests
2. Capture 5-6 screenshots
3. Lưu vào folder `screenshots/`
4. Submit cùng GitHub link

**Good luck! 🚀**
