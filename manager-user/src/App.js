import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import ListStudent from "./components/listStudent";
import Controler from "./components/control";
import Form from "./components/form";
import React, { Components } from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      statusForm: false,
      editUser: {},
      isEdit: false,
    };
  }
  AddNewUser = (dataUser) => {
    this.setState({ users: [...this.state.users, dataUser] });
    // console.log(this.state.users);
  };
  //Tạo hiệ ứng click thêm mới thì hiện form
  handleChangeStatusForm = (status) => {
    this.setState({
      statusForm: status,
    });
  };
  handleChangeIsEdit = (status) => {
    this.setState({
      isEdit: status,
    });
  };
  //Tạo chức năng đóng form sau khi thêm thành công
  handleCloseform = (status) => {
    this.setState({
      statusForm: status,
    });
  };
  //Tạo chức năng xoá
  handleRemoveUser = (user) => {
    const users = this.state.users;
    console.log(users);
    users.forEach((item, index) => {
      if (item.id == user.id) {
        users.splice(index, 1);
      }
    });
    console.log(users);
    this.setState({
      users: users,
    });
  };
  //Tạo Function khi Edit
  handleEditUser = (user) => {
    this.setState({
      editUser: user,
    });
  };
  EditOldUser = (users) => {
    this.setState({
      users: users,
    });
  };

  render() {
    console.log(this.state.users);
    return (
      <div className="row p-5">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <Controler onchangeFormStatus={this.handleChangeStatusForm} />
            <ListStudent
              data={this.state.users}
              removeUser={this.handleRemoveUser}
              editUser={this.handleEditUser}
              status={this.state.statusForm}
              onchangeFormStatus={this.handleChangeStatusForm}
              onChangeEditId={this.handleChangeEditId}
              onChangeIsEdit={this.handleChangeIsEdit}
            />
          </div>
        </div>
        <Form
          onAddUser={this.AddNewUser}
          onEditUser={this.EditOldUser}
          data={this.state.users}
          status={this.state.statusForm}
          closeForm={this.handleCloseform}
          editForm={this.state.editUser}
          editId={this.state.editUser.id}
          isEdit={this.state.isEdit}
          onChangeIsEdit={this.handleChangeIsEdit}
        />
      </div>
    );
  }
}

export default App;
