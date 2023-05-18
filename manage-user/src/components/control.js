import React, { useState, useEffect } from "react";

function Controler(props) {
  const handleOpenForm = () => {
    props.statusForm();
  };

  //Search
  const inputSearch = (e) => {
    const value = e.target.value;
    props.searchData(value);
  };

  //Sort
  const handleSort = (e) => {
    const user = props.studentData;
    if (e.target.value === "a-z") {
      user.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      user.sort((a, b) => b.name.localeCompare(a.name));
    }
    console.log(user);
    console.log(props.sortData(user));
    props.sortData(user);
  };

  return (
    <div className="card-header">
      <div className="row">
        <div className="col-3">
          <button
            type="button"
            className="btn btn-primary btn-icon-text"
            onClick={handleOpenForm}
          >
            Thêm mới sinh viên
          </button>
        </div>
        <div className="col-6">
          <form className="search-form" action="#">
            <i className="icon-search" />
            <input
              type="search"
              className="form-control"
              placeholder="Search Here"
              title="Search here"
              onChange={inputSearch}
            />
            <button className="btn btn-primary btn-icon-text">Tìm kiếm</button>
          </form>
        </div>
        <div className="col-3 d-flex align-items-center">
          <select className="form-control" onChange={handleSort}>
            <option value="">Sắp xếp</option>
            <option value="a-z">Sắp theo tên A-Z</option>
            <option value="z-a">Sắp theo tên A-Z</option>
            {/* <option value="">ABC def</option> */}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Controler;
