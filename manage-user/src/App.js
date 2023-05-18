import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import ListStudent from "./components/listStudent";
import Controler from "./components/control";
import Form from "./components/form";
import React, { useState, useEffect } from "react";

function App() {
  const [statusForm, setStatusForm] = useState(false);
  const [dataStudents, setDataStudent] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editUser, setEditUser] = useState({});
  const [searchStudent, setSearchStudent] = useState(null);
  //Mở Form khi bấm nút Thêm mới
  const changeStatusForm = () => {
    setStatusForm(true);
  };

  //Thêm học viên mới
  const AddDataStudent = (user) => {
    setDataStudent((prev) => [...prev, user]);
  };

  //Đóng form khi submit form
  const handleCloseForm = () => {
    setStatusForm(false);
  };

  //Xoá Student
  const handleRemove = (user, index) => {
    // console.log(user);
    const newData = dataStudents.filter((student) => student.id !== user.id);
    setDataStudent(newData);
  };

  //Edit Student
  const handleSetIsEdit = () => {
    setIsEdit(false);
  };

  const handleEdit = (user) => {
    setIsEdit(true);
    setEditUser(user);
  };

  const getListEditStudent = (users) => {
    setDataStudent(users);
  };

  const removeEditStudent = (user) => {
    setEditUser(user);
  };

  //FUNCTION SEARCH
  const handleSeach = (value) => {
    const searchData = dataStudents.filter((student) =>
      student.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(
          value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        )
    );
    setSearchStudent([...searchData]);
  };

  //FUNCTION SORT
  const handleSort = (users) => {
    setDataStudent([...users]);
  };

  return (
    <div className="row p-5">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          <Controler
            statusForm={changeStatusForm}
            searchData={handleSeach}
            sortData={handleSort}
            studentData={dataStudents}
          />
          <ListStudent
            getListStudent={dataStudents}
            remove={handleRemove}
            edit={handleEdit}
            statusForm={changeStatusForm}
            searchData={searchStudent}
          />
        </div>
      </div>
      {statusForm && (
        <Form
          AddDataStudent={AddDataStudent}
          closeForm={handleCloseForm}
          isEditForm={isEdit}
          getListStudent={dataStudents}
          editUser={editUser}
          setIsEdit={handleSetIsEdit}
          listStudentEdit={getListEditStudent}
          removeEdit={removeEditStudent}
        />
      )}
    </div>
  );
}

export default App;
