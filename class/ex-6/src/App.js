import logo from "./logo.svg";
import "./App.css";
import React from "react";

const listNumber = [];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputNumber: "",
      listNumber: listNumber,
      total: 0,
    };
  }
  handleAddNumber = (event) => {
    this.setState({
      inputNumber: event.target.value,
    });
  };

  handleTotal = (event) => {
    event.preventDefault();
    this.setState({
      listNumber: listNumber.push(this.state.inputNumber), //Hỏi lại chỗ này
      total: this.state.total + Number(this.state.inputNumber),
      // this.state.listNumber.reduce((sub, item) => {
      //   return sub + Number(item);
      // }, 0),
    });
    document.querySelector("input").value = "";
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <form onSubmit={this.handleTotal}>
          <input
            type="number"
            placeholder="Enter Number"
            onChange={this.handleAddNumber}
          />
          <button type="submit">Add</button>
        </form>
        <div>
          <b>Kết quả</b>
          {listNumber.length > 0 ? (
            <div>{listNumber.join("+") + "=" + " " + this.state.total}</div>
          ) : (
            <div>0</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
