# Backend Setup - CROWN-CO Luxury

## 📋 Tổng quan dự án

Backend được xây dựng với:
- **Framework**: Express.js v5
- **Language**: TypeScript
- **Database**: MySQL 2 (Promise-based)
- **Development**: ts-node, Nodemon
- **Validation**: Joi
- **Linting**: ESLint + TypeScript
- **Formatting**: Prettier

## 📁 Cấu trúc thư mục

```
src/
├── index.ts           # Entry point
├── db.ts              # Database connection & initialization
├── routes/            # API routes
│   └── userRoutes.ts
├── controllers/       # Business logic
│   └── userController.ts
├── middleware/        # Express middleware
│   ├── errorHandler.ts
│   ├── validationMiddleware.ts
│   ├── corsMiddleware.ts
│   └── asyncHandler.ts
├── models/            # TypeScript types
│   └── User.ts
└── utils/             # Utility functions
    ├── logger.ts
    ├── responseHandler.ts
    └── validators.ts
```

## 🚀 Getting Started

### 1. Cấu hình Environment

```bash
cp .env.example .env
```

Cập nhật `.env` với thông tin MySQL của bạn:

```env
NODE_ENV=development
PORT=9000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_NAME=crown_co

CORS_ORIGINS=http://localhost:3000,http://localhost:3001
```

### 2. Cài đặt Dependencies

```bash
npm install
```

### 3. Tạo Database

```bash
mysql -u root -p
```

```sql
CREATE DATABASE IF NOT EXISTS crown_co;
```

### 4. Chạy Development Server

```bash
npm run dev
```

Server sẽ chạy tại `http://localhost:9000`

## 📚 API Documentation

### Health Check
```
GET /health
```
Response:
```json
{
  "status": true,
  "message": "Server is running",
  "timestamp": "2026-06-10T10:00:00.000Z",
  "environment": "development"
}
```

### User Endpoints

#### Get All Users (với pagination)
```
GET /api/users?page=1&limit=10
```

Response:
```json
{
  "status": true,
  "code": "SUCCESS",
  "message": "Users retrieved successfully",
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2026-06-10T10:00:00.000Z"
    }
  ],
  "pagination": {
    "total": 100,
    "page": 1,
    "limit": 10
  }
}
```

#### Get User by ID
```
GET /api/users/:id
```

#### Create User
```
POST /api/users
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

#### Update User
```
PUT /api/users/:id
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane.smith@example.com"
}
```

#### Delete User
```
DELETE /api/users/:id
```

## 🔧 Available Scripts

```bash
# Development server (với hot reload)
npm run dev

# Build TypeScript
npm run build

# Start production server
npm start

# ESLint checking
npm run lint

# Format code with Prettier
npm run format
```

## 🗄️ Database Schema

### users table
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔐 Error Handling

Hệ thống sử dụng centralized error handler:

```json
{
  "status": false,
  "code": "ERROR_CODE",
  "message": "Error description",
  "errors": null
}
```

### Error Codes
- `VALIDATION_ERROR`: Lỗi validate dữ liệu
- `NOT_FOUND`: Resource không tìm thấy
- `UNAUTHORIZED`: Chưa được phép truy cập
- `FETCH_ERROR`: Lỗi lấy dữ liệu
- `CREATE_ERROR`: Lỗi tạo mới
- `UPDATE_ERROR`: Lỗi cập nhật
- `DELETE_ERROR`: Lỗi xóa

## 📝 Middleware & Features

### CORS Middleware
- Cấu hình origin từ biến `CORS_ORIGINS`
- Support credentials
- Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS

### Validation Middleware
- Sử dụng Joi schema validation
- Request body stripping
- Chi tiết error messages

### Error Handler
- Global error catching
- Consistent response format
- Stack trace in development mode

### Async Handler
- Wrapper cho async route handlers
- Automatic error propagation

### Logger
- Info, Error, Warn, Debug levels
- Timestamp cho mỗi log
- Development mode debugging

## 🧪 Testing API

### Using cURL
```bash
# Get users
curl http://localhost:9000/api/users

# Create user
curl -X POST http://localhost:9000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@test.com"}'
```

### Using Postman
Import collection từ `/docs/postman_collection.json` (nếu có)

## 🛠️ Troubleshooting

### MySQL Connection Error
- Kiểm tra MySQL service đang chạy
- Verify credentials trong `.env`
- Kiểm tra port 3306 available

### Type Errors
```bash
npx tsc --noEmit  # Check TypeScript errors
```

### Port Already in Use
```bash
lsof -i :9000  # Find process using port 9000
kill -9 <PID>   # Kill process
```

## 📦 Dependencies Overview

- **express**: Web framework
- **mysql2**: MySQL client with promises
- **dotenv**: Environment variables
- **joi**: Data validation
- **cors**: CORS middleware
- **typescript**: Type safety
- **nodemon**: Development reloader
- **ts-node**: TypeScript execution
- **eslint**: Code linting
- **prettier**: Code formatting

## 🚢 Production Deployment

### Build
```bash
npm run build
npm run lint
npm run format
```

### Start
```bash
NODE_ENV=production npm start
```

### Docker Support (Optional)
Có thể thêm Dockerfile cho deployment

## 📖 Additional Resources

- [Express Documentation](https://expressjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Joi Validation](https://joi.dev/)

## 👨‍💻 Development Tips

1. Sử dụng TypeScript types cho type safety
2. Luôn validate input với Joi
3. Wrap async handlers với `asyncHandler`
4. Sử dụng consistent response format
5. Log quan trọng operations
6. Handle errors properly

## 📄 License

ISC

---

**Khởi tạo**: 2026-06-10
**Status**: ✅ Development Ready
