import React, { useState, useEffect } from "react";
import ListStudent from "./listStudent";

function Form(props) {
  const [newUser, setNewUser] = useState({});
  const [editUser, setEditUser] = useState({});
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    age: "",
    gender: "",
    birth: "",
    home: "",
    address: "",
  });

  //Nhận giá trị ô input
  const inputValue = (e) => {
    if (!props.isEditForm) {
      const addUser = {};
      addUser[e.target.name] = e.target.value;
      setNewUser({ ...newUser, ...addUser });
      setFormData({ ...newUser, ...addUser });
    } else {
      const EditedUser = {};
      EditedUser[e.target.name] = e.target.value;
      setEditUser({ ...editUser, ...EditedUser });
      setFormData({ ...editUser, ...EditedUser });
    }
  };

  //Submit
  const handleSubmitForm = (e) => {
    let id;
    e.preventDefault();
    if (!props.isEditForm) {
      if (props.getListStudent.length === 0) {
        id = 0;
      } else {
        id = props.getListStudent[props.getListStudent.length - 1].id + 1;
      }
      newUser.id = id;
      setNewUser({ newUser });
      props.AddDataStudent(newUser);
    } else {
      editUser.id = props.editUser.id;
      setEditUser({ editUser });
      const listStudent = props.getListStudent;
      listStudent.forEach((user, index) => {
        if (user.id === editUser.id) {
          listStudent[index] = { ...user, ...editUser };
        }
      });

      props.listStudentEdit(listStudent);
    }
    props.setIsEdit();
    props.closeForm();
    props.removeEdit(null);
  };

  //Tạo giá trị cho ô input khi Edit
  useEffect(() => {
    if (props.editUser) {
      setFormData({
        id: props.editUser.id,
        code: props.editUser.code,
        name: props.editUser.name,
        age: props.editUser.age,
        gender: props.editUser.gender,
        birth: props.editUser.birth,
        home: props.editUser.home,
        address: props.editUser.address,
      });
    }
  }, [props.editUser]);
  return (
    <div className="col-5 grid-margin">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample" onSubmit={handleSubmitForm}>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="code"
                  value={formData.code}
                  onChange={inputValue}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={inputValue}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="age"
                  value={formData.age}
                  onChange={inputValue}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="gender"
                  onChange={inputValue}
                  value={formData.gender}
                >
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  placeholder="dd/mm/yyyy"
                  name="birth"
                  onChange={inputValue}
                  value={formData.birth}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="home"
                  onChange={inputValue}
                  value={formData.home}
                >
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="Quảng Ninh">Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={inputValue}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
