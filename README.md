# CROWN-CO Shop Luxury

## Nhóm thực hiện: Cơn Gió Mùa Xuân

### Thành viên

| MSSV     | Họ và tên             |
| -------- | --------------------- |
| 24100279 | Trịnh Xuân Hồng Phong |
| 24100426 | Nguyễn Kim Tiến       |

# STUDENTSREG CRUD Application

## Giới thiệu

Dự án này minh họa việc thực hiện các thao tác CRUD (Create, Read, Update, Delete) bằng:

* Node.js
* Express.js
* MariaDB
* Postman để kiểm thử API

Cơ sở dữ liệu sử dụng là **STUDENTSREG**, lưu trữ thông tin về sinh viên, giảng viên hướng dẫn, học phần, đăng ký học phần, chủ đề học tập và sở thích học tập.

---

## Yêu cầu hệ thống

Trước khi chạy dự án, cần cài đặt:

* Node.js
* npm
* MariaDB

Cài đặt các thư viện cần thiết:

```bash
npm install express mysql2
```

---

## Cài đặt cơ sở dữ liệu

Tạo cơ sở dữ liệu:

```sql
CREATE DATABASE STUDENTSREG;
USE STUDENTSREG;
```

Sau đó chạy toàn bộ tập lệnh SQL đã được cung cấp để tạo các bảng và dữ liệu mẫu.

---

## Cấu trúc thư mục dự án

```text
project/
│
├── app.js
├── package.json
├── README.md
└── database.sql
```

---

## Chạy ứng dụng

Khởi động server:

```bash
node app.js
```

Kết quả mong đợi:

```text
Server chạy tại http://localhost:3000
Đã kết nối MariaDB
```

---

## Các API được xây dựng

### Thêm sinh viên mới (Create)

**POST**

```http
/students
```

Dữ liệu gửi lên:

```json
{
  "SID": "1013",
  "SNAME": "Nguyen Van A",
  "EMAIL": "nva@gmail.com",
  "Tutor_Id": "1000"
}
```

---

### Lấy danh sách tất cả sinh viên (Read)

**GET**

```http
/students
```

---

### Lấy thông tin sinh viên theo mã (Read)

**GET**

```http
/students/:id
```

Ví dụ:

```http
/students/1013
```

---

### Cập nhật thông tin sinh viên (Update)

**PUT**

```http
/students/:id
```

Dữ liệu cập nhật:

```json
{
  "SNAME": "Nguyen Van B",
  "EMAIL": "updated@gmail.com",
  "Tutor_Id": "1001"
}
```

---

### Xóa sinh viên (Delete)

**DELETE**

```http
/students/:id
```

Ví dụ:

```http
/students/1013
```

---

## Kiểm thử bằng Postman

1. Mở Postman.
2. Tạo các request tương ứng với các phương thức POST, GET, PUT và DELETE.
3. Sử dụng URL của Codespaces hoặc localhost.
4. Kiểm tra kết quả trả về và xác nhận dữ liệu trong cơ sở dữ liệu đã được thay đổi đúng theo yêu cầu.

---

## Các thao tác CRUD đã thực hiện

| Thao tác | Mô tả                                        |
| -------- | -------------------------------------------- |
| Create   | Thêm mới một bản ghi sinh viên               |
| Read     | Đọc và hiển thị thông tin sinh viên          |
| Update   | Cập nhật thông tin sinh viên đã tồn tại      |
| Delete   | Xóa một bản ghi sinh viên khỏi cơ sở dữ liệu |

---

## Kết luận

Dự án đã xây dựng thành công một hệ thống CRUD cơ bản sử dụng Node.js, Express và MariaDB. Thông qua các API đã triển khai, người dùng có thể thêm, xem, sửa và xóa dữ liệu sinh viên một cách thuận tiện. Việc kiểm thử bằng Postman giúp xác nhận các chức năng hoạt động chính xác và đảm bảo kết nối giữa ứng dụng và cơ sở dữ liệu.
