import React, { Components } from "react";

class ListStudent extends React.Component {
  constructor(props) {
    super();
  }
  //FUNCTION XOÁ USER
  handleDelete = (id) => {
    const users = this.props.data;
    const user = users.find((item) => item.id == id);
    // console.log(user);
    this.props.removeUser(user);
  };
  //Function Sửa User
  handleEdit = (id) => {
    //Hiển thị Form khi Edit
    const status = true;
    this.props.onchangeFormStatus(status);
    this.props.onChangeIsEdit(status);
    // console.log(id);
    //Đưa edit user vào hàm edit user trên app
    const users = this.props.data;
    const user = users.find((item) => item.id == id);
    this.props.editUser(user);
  };

  render() {
    const data = this.props.data;
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.code}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-danger btn-icon-text"
                          onClick={(e) => this.handleView(user.id)}
                        >
                          Xem
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-icon-text"
                          onClick={(e) => this.handleEdit(user.id)}
                        >
                          Sửa
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-icon-text"
                          onClick={(e) => this.handleDelete(user.id)}
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {/* <tr>
                <td>2</td>
                <td>SV002</td>
                <td>Nguyễn Văn B</td>
                <td>21</td>
                <td>Nữ</td>
                <td>
                  <div className="template-demo">
                    <button
                      type="button"
                      className="btn btn-danger btn-icon-text"
                    >
                      Xem
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-icon-text"
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-icon-text"
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>SV003</td>
                <td>Nguyễn Văn C</td>
                <td>19</td>
                <td>Nam</td>
                <td>
                  <div className="template-demo">
                    <button
                      type="button"
                      className="btn btn-danger btn-icon-text"
                    >
                      Xem
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-icon-text"
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-icon-text"
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ListStudent;
