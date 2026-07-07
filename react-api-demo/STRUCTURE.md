# 📂 Cấu trúc dự án React API Demo

## 📋 Tổng quan

```
react-api-demo/
├── 📄 package.json                 # Dependencies & scripts
├── 📄 package-lock.json            # Lock file
├── 📄 db.json                      # Mock API data
├── 📄 README.md                    # Main documentation
├── 📄 QUICKSTART.md                # Quick start guide
├── 📄 INSTALLATION.md              # Installation guide
├── 📄 STRUCTURE.md                 # File này
├── 🔧 start-dev.sh                 # Startup script (Linux/Mac)
├── 🔧 start-dev.bat                # Startup script (Windows)
│
├── 📁 node_modules/                # Dependencies (auto generated)
│
├── 📁 public/
│   ├── 📄 index.html               # HTML template
│   ├── 📄 manifest.json            # PWA manifest
│   └── 📄 robots.txt               # SEO robots
│
└── 📁 src/
    ├── 📄 index.js                 # Entry point
    ├── 📄 index.css                # Global styles
    ├── 📄 App.js                   # Main component
    ├── 📄 App.test.js              # Tests
    ├── 📄 reportWebVitals.js       # Performance metrics
    ├── 📄 setupTests.js            # Test configuration
    │
    └── 📁 components/
        ├── 📄 Header.js            # Navbar component
        ├── 📄 Banner.js            # Carousel component
        ├── 📄 Content.js           # Table component
        └── 📄 Footer.js            # Footer component
```

## 🔍 Chi tiết các file quan trọng

### 📄 `package.json`

Cấu hình dự án và dependencies:

```json
{
  "name": "react-api-demo",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^19.2.7",
    "react-bootstrap": "^2.10.10",
    "bootstrap": "^5.3.8",
    "axios": "^1.18.1",
    "react-icons": "^5.7.0"
  },
  "scripts": {
    "start": "react-scripts start",    // npm start
    "build": "react-scripts build",    // npm run build
    "test": "react-scripts test",      // npm test
    "eject": "react-scripts eject"     // npm run eject
  }
}
```

**Các dependencies chính:**
- `react`: Framework giao diện
- `react-bootstrap`: Components UI
- `bootstrap`: CSS framework
- `axios`: HTTP client
- `react-icons`: Icon library

### 📄 `db.json`

Mock API data:

```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@gmail.com",
      "department": "IT",
      "status": "Active"
    },
    // ... 4 users khác
  ]
}
```

**Mục đích**: Cung cấp dữ liệu cho API endpoints (json-server)

### 📄 `public/index.html`

HTML template chính:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>React API Demo</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

**Lưu ý**: React sẽ render vào `<div id="root"></div>`

### 📄 `src/index.js`

Entry point ứng dụng:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

**Nhiệm vụ**:
1. Import Bootstrap CSS
2. Render App component vào DOM
3. Khởi động ứng dụng

### 📄 `src/index.css`

Global styles:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f8f9fa;
}

#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

footer {
  margin-top: auto;
}
```

**Lợi ích**:
- Reset CSS mặc định
- Định dạng layout
- Footer dính dưới cùng

### 📄 `src/App.js`

Main component:

```javascript
function App() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <Content />
      </main>
      <Footer />
    </>
  );
}
```

**Cấu trúc**:
- Header (sticky navbar)
- Banner (carousel)
- Main (content area)
- Footer (dính dưới)

## 🎯 Components

### 📄 `src/components/Header.js`

**Nhiệm vụ**: Navbar navigation

**Tính năng**:
- Sticky top
- Primary color (blue)
- Menu items: Home, Link, Options
- Icons từ react-icons

**Sử dụng**: React Bootstrap `Navbar`, `Nav`, `NavDropdown`

### 📄 `src/components/Banner.js`

**Nhiệm vụ**: Carousel banner

**Tính năng**:
- 3 slide hình ảnh
- Auto-rotate 5 giây
- Caption text
- Action buttons

**Sử dụng**: React Bootstrap `Carousel`

### 📄 `src/components/Content.js`

**Nhiệm vụ**: Bảng dữ liệu

**Tính năng**:
- Fetch từ API (axios)
- Loading spinner
- Error handling
- Bảng responsive
- Status badge
- Icons

**React Hooks**:
```javascript
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => { 
  // Fetch API 
}, []);
```

**Sử dụng**: React Bootstrap `Table`, `Spinner`, `Alert`

### 📄 `src/components/Footer.js`

**Nhiệm vụ**: Footer

**Tính năng**:
- Thông tin dự án
- Social media links
- Copyright
- Dark theme

**Sử dụng**: React Bootstrap `Container`, `Row`, `Col`

## 🔄 Luồng dữ liệu

```
db.json (Mock data)
    ↓
json-server (Port 3001)
    ↓
axios.get("http://localhost:3001/users")
    ↓
Content.js (useEffect)
    ↓
setUsers(data)
    ↓
Render Table
```

## 🎨 Styling

### Bootstrap Classes
- `bg-primary`, `bg-dark`: Background colors
- `text-light`, `text-muted`: Text colors
- `table`, `table-striped`: Tables
- `badge`, `badge-success`: Badges
- `spinner-border`: Loading spinners
- `alert`: Alert boxes

### Custom CSS (index.css)
- Flexbox layout
- Responsive design
- Hover effects
- Mobile optimization

## 📱 Responsive Design

### Desktop (> 768px)
- Full-size table
- Side-by-side layout
- Normal font sizes

### Mobile (< 768px)
- Smaller table font
- Stack layout vertically
- Reduced padding

## 🔌 API Endpoints

**Base URL**: `http://localhost:3001`

| Method | Endpoint | Mô tả |
|--------|----------|--------|
| GET | `/users` | Lấy tất cả users |
| GET | `/users/:id` | Lấy user theo ID |
| POST | `/users` | Tạo user mới |
| PUT | `/users/:id` | Cập nhật user |
| DELETE | `/users/:id` | Xóa user |

## 📦 Technologies Stack

| Công nghệ | Phiên bản | Mục đích |
|-----------|----------|---------|
| React | 19.2.7 | UI Framework |
| React DOM | 19.2.7 | DOM Rendering |
| React Bootstrap | 2.10.10 | UI Components |
| Bootstrap | 5.3.8 | CSS Framework |
| axios | 1.18.1 | HTTP Client |
| react-icons | 5.7.0 | Icons |
| json-server | latest | Mock API |
| react-scripts | 5.0.1 | Build tools |

## 🔍 Phát triển

### Thêm component mới

1. Tạo file `src/components/NewComponent.js`
2. Viết component
3. Import trong `App.js`
4. Render trong layout

### Thêm style

1. Tạo file `src/components/NewComponent.css`
2. Import trong component
3. Sử dụng className

### Thêm page mới

1. Cài đặt React Router: `npm install react-router-dom`
2. Setup routes trong `App.js`
3. Tạo page components

### Thêm API endpoint

1. Thêm dữ liệu vào `db.json`
2. Restart json-server
3. Fetch từ component

## 🚀 Build & Deploy

### Build production

```bash
npm run build
```

**Output**: `build/` folder

### Deploy

Các tùy chọn:
- Netlify (drag & drop)
- Vercel (git integration)
- GitHub Pages
- AWS S3
- Docker

## 📚 Tài liệu tham khảo

- [React Documentation](https://react.dev)
- [React Bootstrap Docs](https://react-bootstrap.github.io/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [axios Documentation](https://axios-http.com/)
- [json-server](https://github.com/typicode/json-server)

## 🐛 Debugging

### DevTools
- F12: Mở DevTools
- Console: Xem lỗi
- Network: Kiểm tra API requests
- Elements: Kiểm tra DOM

### React DevTools
- Install extension: "React Developer Tools"
- Kiểm tra component tree
- Xem state/props

### 🏁 Kết luận

Dự án này cung cấp một mẫu hoàn chỉnh để học React với:
- ✅ Component-based architecture
- ✅ React Hooks (useState, useEffect)
- ✅ API integration (axios)
- ✅ Bootstrap UI
- ✅ Responsive design

Hãy explore, modify, và extend dự án này!

---

**Happy Learning! 🎉**
