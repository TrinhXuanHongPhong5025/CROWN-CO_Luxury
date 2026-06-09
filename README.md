# CROWN-CO Shop Luxury

## Nhóm thực hiện: Gió

### Thành viên

| MSSV     | Họ và tên             |
| -------- | --------------------- |
| 24100279 | Trịnh Xuân Hồng Phong |
| 24100426 | Nguyễn Kim Tiến       |

## Đề tài

**CROWN-CO Shop Luxury** – Hệ thống website kinh doanh và quản lý các sản phẩm xa xỉ phẩm cao cấp.

## Mô tả dự án

CROWN-CO Shop Luxury là một website thương mại điện tử chuyên cung cấp các mặt hàng xa xỉ phẩm như đồng hồ, trang sức, túi xách và các sản phẩm thời trang cao cấp. Hệ thống hỗ trợ quản lý sản phẩm, đơn hàng và dữ liệu khách hàng thông qua kiến trúc phân lớp (Layered Architecture).

## Công nghệ sử dụng

* Backend: Node.js, ExpressJS
* Database: MySQL
* Kiến trúc: Layered Architecture (Routes → Controllers → Services → Repositories → Database)
* Công cụ phát triển: Visual Studio Code, Git, GitHub

## Chức năng chính

* Quản lý sản phẩm
* Quản lý đơn hàng
* Thêm, sửa, xóa dữ liệu
* Kết nối cơ sở dữ liệu MySQL
* Xây dựng API RESTful

## Cấu trúc dự án

```text
routes/
controllers/
services/
repositories/
public/
db.js
server.js
```

## Hướng dẫn chạy dự án

### Cài đặt thư viện

```bash
npm install
```

### Khởi động server

```bash
node server.js
```

Hoặc

```bash
npm start
```

### Truy cập

```text
http://localhost:3000
```
