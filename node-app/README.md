# 📚 HỆ THỐNG QUẢN LÝ STUDENTSREG

## 📌 Giới thiệu dự án
Đây là hệ thống quản lý sinh viên được xây dựng bằng **Node.js (Express)** và **MySQL (MariaDB)**.

Hệ thống hỗ trợ quản lý:
- Giảng viên (Tutor)
- Sinh viên (Student)
- Môn học (Modules)
- Đăng ký môn học (Student Enrollment)
- Chủ đề (Topics)
- Sở thích học tập (Learning Preference)

Hệ thống hỗ trợ đầy đủ chức năng **CRUD (Create - Read - Update - Delete)**.

---

## ⚙️ Công nghệ sử dụng
- Node.js
- Express.js
- MySQL / MariaDB
- RESTful API
- Thunder Client / Postman để test API

---

## 🗄️ Cơ sở dữ liệu

Tên database:

STUDENTSREG


### Các bảng trong hệ thống:
- TUTOR (Giảng viên)
- STUDENT (Sinh viên)
- MODULES (Môn học)
- STUDENT_ENROLEMENT (Đăng ký môn học)
- TOPICS (Chủ đề)
- LEARN_PREFERENCE (Sở thích học tập)

---

## 🔗 Mối quan hệ dữ liệu

- Một giảng viên có thể quản lý nhiều sinh viên
- Mỗi sinh viên thuộc một giảng viên
- Sinh viên có thể đăng ký nhiều môn học
- Mỗi môn học có nhiều chủ đề
- Sở thích học tập gắn với từng sinh viên

---

##  Hướng dẫn cài đặt

### 1. Clone dự án
```bash
git clone <link-repo>
cd CROWN-CO_Luxury

2. Cài đặt thư viện
npm install

3. Cài đặt database

Đăng nhập MySQL:

sudo mysql

Tạo database:

CREATE DATABASE STUDENTSREG;
USE STUDENTSREG;

Import dữ liệu:

sudo mysql -u root STUDENTSREG < node-app/setup.sql

4. Chạy dự án
npm start

hoặc:

node index.js
 API Hệ Thống
 Student API
Method	Endpoint	Chức năng
GET	/students	Lấy danh sách sinh viên
GET	/students/:id	Lấy sinh viên theo ID
POST	/students	Thêm sinh viên mới
PUT	/students/:id	Cập nhật sinh viên
DELETE	/students/:id	Xóa sinh viên
 Tutor API
Method	Endpoint	Chức năng
GET	/tutors	Lấy danh sách giảng viên
GET	/tutors/:id	Lấy giảng viên theo ID
POST	/tutors	Thêm giảng viên
PUT	/tutors/:id	Cập nhật giảng viên
DELETE	/tutors/:id	Xóa giảng viên
 Modules API
GET /modules
POST /modules
PUT /modules/:id
DELETE /modules/:id
 Kiểm thử API

Sử dụng:

Thunder Client (VS Code)
Postman

Ví dụ request:

POST /students
Content-Type: application/json

{
  "SID": "1001",
  "SNAME": "Nguyễn Văn A",
  "EMAIL": "a@gmail.com",
  "Tutor_Id": "1000"
}

 Luồng CRUD
 Thêm sinh viên
Bắt đầu
↓
Nhận dữ liệu
↓
Kiểm tra dữ liệu
↓
Lưu vào database
↓
Trả kết quả
↓
Kết thúc


 Xóa sinh viên

Bắt đầu
↓
Nhận ID
↓
Kiểm tra tồn tại
↓
Xóa dữ liệu
↓
Trả kết quả
↓
Kết thúc


🎯 Mục tiêu
Thiết kế cơ sở dữ liệu quan hệ
Xây dựng RESTful API
Thực hiện CRUD đầy đủ
Kết nối Node.js với MySQL

📌 Ghi chú
Cần chạy MySQL trước khi chạy project
Database phải import đầy đủ trước khi chạy API
Kiểm tra bảng bằng: SHOW TABLES;