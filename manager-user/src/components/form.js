import React, { Components } from "react";

class Form extends React.Component {
  constructor(props, editForm) {
    super();
    this.state = { newUser: {}, editUser: {} };
  }
  handleAdd = (e) => {
    const listUser = this.props.data;
    if (!this.props.isEdit) {
      const newuser = {};
      if (listUser.length == 0) {
        newuser.id = 1;
      } else {
        newuser.id = listUser[listUser.length - 1].id + 1;
      }
      newuser[e.target.name] = e.target.value;
      this.setState({ newUser: { ...this.state.newUser, ...newuser } });
    } else {
      const edituser = {
        id: this.props.editForm.id,
      };
      edituser[e.target.name] = e.target.value;
      this.setState({ editUser: { ...this.state.editUser, ...edituser } });

      // console.log(this.state.editUser);
    }
  };
  AddNewUser = (e) => {
    // console.log(this.props);
    e.preventDefault();
    if (!this.props.isEdit) {
      this.props.onAddUser(this.state.newUser);
    } else {
      const listUser = this.props.data;
      listUser.forEach((user, index) => {
        if (user.id === this.state.editUser.id) {
          listUser[index] = { ...user, ...this.state.editUser };
          // console.log(user);
        }
      });
      // console.log(listUser);
      this.props.onEditUser(listUser);
      const status = false;
      this.props.onChangeIsEdit(status);
    }
    //đóng form khi submit
    const status = false;
    this.props.closeForm(status);
  };
  render() {
    // console.log(this.props.editForm);
    return (
      <div className="col-5 grid-margin">
        {this.props.status && (
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Thông tin sinh viên</h3>
              <form className="form-sample">
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Mã sinh viên
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="code"
                      onChange={this.handleAdd}
                      defaultValue={
                        this.props.isEdit ? this.props.editForm.code : ""
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Tên sinh viên
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={this.handleAdd}
                      defaultValue={
                        this.props.isEdit ? this.props.editForm.name : ""
                      }
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
                      onChange={this.handleAdd}
                      defaultValue={
                        this.props.isEdit ? this.props.editForm.age : ""
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Giới tính</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="gender"
                      onChange={this.handleAdd}
                      defaultValue={
                        this.props.isEdit ? this.props.editForm.gender : ""
                      }
                    >
                      <option>Nam</option>
                      <option>Nữ</option>
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
                      onChange={this.handleAdd}
                      defaultValue={
                        this.props.isEdit ? this.props.editForm.birth : ""
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Nơi sinh</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="hometown"
                      onChange={this.handleAdd}
                      defaultValue={
                        this.props.isEdit ? this.props.editForm.hometown : ""
                      }
                    >
                      <option>Hà Nội</option>
                      <option>TP. Hồ Chí Minh</option>
                      <option>Đà Nẵng</option>
                      <option>Quảng Ninh</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Địa chỉ</label>
                  <div className="col-sm-9">
                    <textarea
                      className="form-control"
                      defaultValue={
                        this.props.isEdit ? this.props.editForm.address : ""
                      }
                      name="address"
                      onChange={this.handleAdd}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary me-2"
                  onClick={this.AddNewUser}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Form;
