import React, { useState, useEffect } from "react";

function ListStudent(props) {
  const listUser = props.getListStudent;
  //Xoá
  const handleRemove = (elem, id) => {
    const DelUser = listUser.find((user) => user.id === id);
    // console.log(DelUser);
    props.remove(DelUser);
  };

  //Lấy dữ liệu user edit truyền về Component Cha
  const handleEdit = (elem, id) => {
    const chooseUser = listUser.find((user) => user.id === id);
    props.statusForm();
    props.edit(chooseUser);
  };

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
            {!props.searchData
              ? listUser.map((user) => (
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
                        >
                          Xem
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-icon-text"
                          onClick={() => handleEdit(this, user.id)}
                        >
                          Sửa
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-icon-text"
                          onClick={() => handleRemove(this, user.id)}
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              : props.searchData.map((user) => (
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
                        >
                          Xem
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-icon-text"
                          onClick={() => handleEdit(this, user.id)}
                        >
                          Sửa
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-icon-text"
                          onClick={() => handleRemove(this, user.id)}
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListStudent;
