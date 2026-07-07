# React API Demo - Bài tập Front End

Ứng dụng demo React với API fetching sử dụng axios, React Hooks (useState, useEffect), React Bootstrap, và Bootstrap Icons.

## 🎯 Yêu cầu bài tập

- ✅ Bố cục trang: Header / Banner / Content / Footer
- ✅ Sử dụng React Hooks (useState, useEffect)
- ✅ Fetch API hoặc axios để lấy dữ liệu
- ✅ Sử dụng React Bootstrap cho components
- ✅ Sử dụng Bootstrap Icons cho giao diện

## 🚀 Hướng dẫn chạy ứng dụng

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy JSON Server (để phục vụ dữ liệu API)

Mở terminal thứ 1 và chạy:

```bash
json-server --watch db.json --port 3001
```

Điều này sẽ khởi động server tại `http://localhost:3001` và phục vụ dữ liệu từ file `db.json`.

### 3. Chạy React App (trong terminal khác)

Mở terminal thứ 2 và chạy:

```bash
npm start
```

Ứng dụng sẽ mở tại `http://localhost:3000`.

## 📦 Dependencies chính

- **React**: ^19.2.7 - Thư viện giao diện
- **React Bootstrap**: ^2.10.10 - Components UI Bootstrap
- **Bootstrap**: ^5.3.8 - Framework CSS
- **axios**: ^1.18.1 - HTTP client để fetch API
- **react-icons**: Thư viện icons Bootstrap/Font Awesome

## 📁 Cấu trúc dự án

```
src/
├── components/
│   ├── Header.js       - Navbar với icons và menu
│   ├── Banner.js       - Carousel banner với hình ảnh
│   ├── Content.js      - Bảng dữ liệu từ API (useState, useEffect)
│   └── Footer.js       - Footer với social links
├── App.js              - Component chính
└── index.js            - Entry point
```

## 💡 Những tính năng chính

### Content Component
- **Fetch dữ liệu**: Sử dụng axios để gọi API từ `http://localhost:3001/users`
- **Loading state**: Hiển thị spinner khi đang tải dữ liệu
- **Error handling**: Xử lý lỗi và hiển thị thông báo
- **React Bootstrap Table**: Bảng responsive với Bootstrap styling
- **Icons**: Sử dụng react-icons cho các icons trạng thái

### Dữ liệu mẫu (db.json)

Chứa danh sách users với các trường:
- `id`: ID người dùng
- `name`: Tên
- `email`: Email
- `department`: Phòng ban
- `status`: Trạng thái (Active/Inactive)

## 🎨 Công nghệ sử dụng

| Công nghệ | Mục đích |
|----------|---------|
| React Hooks | State management (useState, useEffect) |
| axios | HTTP requests |
| React Bootstrap | UI Components |
| Bootstrap 5 | CSS Framework |
| react-icons | Icons |

## 📝 React Hooks được sử dụng

### useState
```javascript
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

### useEffect
```javascript
useEffect(() => {
  // Fetch dữ liệu từ API
  const fetchUsers = async () => {
    // ... fetch logic
  };
  fetchUsers();
}, []); // Chạy 1 lần khi component mount
```

## 🔗 API Endpoints

Các endpoint có sẵn từ json-server:

- `GET http://localhost:3001/users` - Lấy danh sách tất cả users
- `GET http://localhost:3001/users/:id` - Lấy user theo ID
- `POST http://localhost:3001/users` - Tạo user mới
- `PUT http://localhost:3001/users/:id` - Cập nhật user
- `DELETE http://localhost:3001/users/:id` - Xóa user

## 🔗 Tài liệu tham khảo

- [React - useState Hook](https://react.dev/reference/react/useState)
- [React - useEffect Hook](https://react.dev/reference/react/useEffect)
- [React Bootstrap Documentation](https://react-bootstrap.github.io/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

## 🐛 Troubleshooting

### Lỗi: "Cannot GET /users"
- Đảm bảo json-server đang chạy trên port 3001
- Kiểm tra file `db.json` tồn tại trong thư mục gốc

### Lỗi: "CORS Error"
- axios đã được cấu hình để gọi `http://localhost:3001`
- Đảm bảo React app chạy trên `http://localhost:3000`

### Dữ liệu không hiển thị
- Mở DevTools (F12) để kiểm tra console errors
- Kiểm tra Network tab để xem yêu cầu API

## 📚 Bài học quan trọng

Qua bài tập này, sinh viên sẽ học được:

1. ✅ Cách sử dụng React Hooks (useState, useEffect)
2. ✅ Cách fetch dữ liệu từ API với axios
3. ✅ Cách quản lý state loading và error
4. ✅ Cách sử dụng React Bootstrap components
5. ✅ Cách tổ chức components trong React
6. ✅ Cách sử dụng icons từ react-icons

---

**Tác giả**: React API Demo  
**Năm**: 2026  
**Địa điểm**: Hanoi, Vietnam

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
