const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

// Kết nối MariaDB
const db = mysql.createConnection({
    host: 'localhost',
    user: 'GIO',
    password: '123456', // điền mật khẩu nếu có
    database: 'STUDENTSREG'
});

db.connect((err) => {
    if (err) {
        console.error('Lỗi kết nối DB:', err);
        return;
    }
    console.log('Đã kết nối MariaDB');
});

/* =====================
   CREATE
===================== */
app.post('/students', (req, res) => {
    const { SID, SNAME, EMAIL, Tutor_Id } = req.body;

    const sql =
        'INSERT INTO STUDENT (SID, SNAME, EMAIL, Tutor_Id) VALUES (?, ?, ?, ?)';

    db.query(
        sql,
        [SID, SNAME, EMAIL, Tutor_Id],
        (err, result) => {
            if (err) return res.status(500).json(err);

            res.json({
                message: 'Thêm sinh viên thành công',
                result
            });
        }
    );
});

/* =====================
   READ
===================== */
app.get('/students', (req, res) => {
    db.query(
        'SELECT * FROM STUDENT',
        (err, results) => {
            if (err) return res.status(500).json(err);

            res.json(results);
        }
    );
});

/* =====================
   READ BY ID
===================== */
app.get('/students/:id', (req, res) => {
    db.query(
        'SELECT * FROM STUDENT WHERE SID = ?',
        [req.params.id],
        (err, results) => {
            if (err) return res.status(500).json(err);

            res.json(results);
        }
    );
});

/* =====================
   UPDATE
===================== */
app.put('/students/:id', (req, res) => {
    const { SNAME, EMAIL, Tutor_Id } = req.body;

    const sql = `
        UPDATE STUDENT
        SET SNAME = ?, EMAIL = ?, Tutor_Id = ?
        WHERE SID = ?
    `;

    db.query(
        sql,
        [SNAME, EMAIL, Tutor_Id, req.params.id],
        (err, result) => {
            if (err) return res.status(500).json(err);

            res.json({
                message: 'Cập nhật thành công',
                result
            });
        }
    );
});

/* =====================
   DELETE
===================== */
app.delete('/students/:id', (req, res) => {
    db.query(
        'DELETE FROM STUDENT WHERE SID = ?',
        [req.params.id],
        (err, result) => {
            if (err) return res.status(500).json(err);

            res.json({
                message: 'Xóa thành công',
                result
            });
        }
    );
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server chạy tại http://localhost:${PORT}`);
});
 