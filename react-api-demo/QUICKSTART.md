# 🚀 Hướng dẫn nhanh - Chạy React API Demo

## Yêu cầu trước tiên

- Node.js (v14+)
- npm (v6+)
- json-server (được cài đặt globally)

## 📋 Các bước chạy ứng dụng

### Bước 1: Cài đặt dependencies

```bash
cd /workspaces/CROWN-CO_Luxury/react-api-demo
npm install
```

### Bước 2: Chạy JSON Server (Terminal 1)

```bash
json-server --watch db.json --port 3001
```

**Kết quả mong đợi:**
```
  ✓ Server running at http://localhost:3001
```

Giữ terminal này mở.

### Bước 3: Chạy React App (Terminal 2 - Mới)

```bash
cd /workspaces/CROWN-CO_Luxury/react-api-demo
npm start
```

**Kết quả mong đợi:**
- Trình duyệt tự động mở `http://localhost:3000`
- Ứng dụng hiển thị với Header, Banner, Content (bảng dữ liệu), Footer

## 🎯 Chứng năng chính

### Header (Navbar)
- Màu xanh lam (primary color)
- Menu Home, Link, Options
- Sticky top (dính phía trên khi scroll)

### Banner (Carousel)
- 3 slide hình ảnh
- Tự động chuyển mỗi 5 giây
- Nút hành động trên mỗi slide

### Content (Bảng dữ liệu)
- Fetch dữ liệu từ `http://localhost:3001/users`
- Loading spinner khi tải dữ liệu
- Hiển thị 5 người dùng trong bảng
- Status badge (xanh: Active, đỏ: Inactive)
- Icons cho các cột

### Footer
- Thông tin dự án
- Social media links
- Copyright năm hiện tại

## 🔍 Kiểm tra dữ liệu API

Truy cập trong trình duyệt hoặc terminal:

```bash
# Lấy tất cả users
curl http://localhost:3001/users

# Lấy user theo ID
curl http://localhost:3001/users/1
```

**Dữ liệu mẫu:**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@gmail.com",
  "department": "IT",
  "status": "Active"
}
```

## 🛠️ Công nghệ sử dụng

| Công nghệ | Phiên bản | Mục đích |
|----------|---------|---------|
| React | 19.2.7 | UI Framework |
| React Bootstrap | 2.10.10 | Components |
| Bootstrap | 5.3.8 | CSS Framework |
| axios | 1.18.1 | HTTP Client |
| react-icons | - | Icons (Bootstrap) |
| json-server | - | Mock API Server |

## 🐛 Xử lý sự cố

### Lỗi: "Cannot GET /users"

**Nguyên nhân**: json-server chưa chạy
**Giải pháp**: Chạy lệnh ở Bước 2

```bash
json-server --watch db.json --port 3001
```

### Lỗi: "Port 3000 already in use"

**Nguyên nhân**: Port 3000 đã được sử dụng
**Giải pháp**: Thay đổi port hoặc kill process

```bash
# Tìm process sử dụng port 3000
lsof -i :3000

# Hoặc chạy trên port khác
PORT=3002 npm start
```

### Lỗi: "Module not found: react-icons"

**Nguyên nhân**: Dependencies chưa được cài đặt
**Giải pháp**: Chạy lệnh ở Bước 1

```bash
npm install
```

### Bảng dữ liệu không hiển thị

**Giải pháp**:
1. Mở DevTools (F12)
2. Kiểm tra Console tab có lỗi không
3. Kiểm tra Network tab
4. Đảm bảo json-server đang chạy trên port 3001
5. Đảm bảo file `db.json` tồn tại

## 📚 React Hooks được sử dụng

### `useState`

```javascript
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

### `useEffect`

```javascript
useEffect(() => {
  // Chạy effect này khi component mount
  fetchUsers();
}, []); // Dependency array rỗng = chỉ chạy 1 lần
```

## 🎓 Bài học

Qua bài tập này bạn sẽ học:

✅ React Hooks (useState, useEffect)
✅ Async/await và Promises
✅ Error handling trong API
✅ React Bootstrap components
✅ Bootstrap icons
✅ Layout responsive
✅ Cách organize components

## 📞 Liên hệ hỗ trợ

Nếu gặp vấn đề:
1. Kiểm tra lại các bước trên
2. Xem lỗi trong DevTools Console
3. Kiểm tra file `db.json` có format JSON đúng không
4. Cập nhật npm: `npm update`

---

**Chúc bạn thành công! 🎉**

Xem thêm chi tiết tại [README.md](./README.md)
