import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { BsCheckCircle, BsXCircle, BsPersonCircle, BsEnvelope, BsBriefcase } from "react-icons/bs";

function Content() {
  // Dữ liệu người dùng - lưu trữ cục bộ, không cần fetch API
  const usersData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      department: "IT",
      status: "Active"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@gmail.com",
      department: "Marketing",
      status: "Inactive"
    },
    {
      id: 3,
      name: "David Brown",
      email: "david@gmail.com",
      department: "Finance",
      status: "Active"
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@gmail.com",
      department: "HR",
      status: "Active"
    },
    {
      id: 5,
      name: "Michael Lee",
      email: "michael@gmail.com",
      department: "Sales",
      status: "Inactive"
    }
  ];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Đặt dữ liệu cục bộ vào state
    setUsers(usersData);
  }, []);

  return (
    <Container className="my-5">
      <div className="mb-4">
        <h2 className="text-primary mb-3">
          <BsPersonCircle className="me-2" />
          Danh sách người dùng
        </h2>
        <hr />
      </div>

      {users.length > 0 && (
        <div className="table-responsive">
          <Table striped bordered hover className="align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>
                  <BsPersonCircle className="me-1" />
                  Tên
                </th>
                <th>
                  <BsEnvelope className="me-1" />
                  Email
                </th>
                <th>
                  <BsBriefcase className="me-1" />
                  Phòng ban
                </th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="fw-bold">{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.department}</td>
                  <td className="text-center">
                    <span
                      className={
                        user.status === "Active"
                          ? "badge bg-success"
                          : "badge bg-danger"
                      }
                    >
                      {user.status === "Active" ? (
                        <BsCheckCircle className="me-1" />
                      ) : (
                        <BsXCircle className="me-1" />
                      )}
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      {users.length > 0 && (
        <div className="text-muted text-center mt-3 small">
          Tổng cộng: <strong>{users.length}</strong> người dùng
        </div>
      )}
    </Container>
  );
}

export default Content;