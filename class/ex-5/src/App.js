import logo from "./logo.svg";
import "./App.css";
import React from "react";
let value;
class App extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  handleChange = (e) => {
    value = e.target.value;
    return value;
  };
  handleSubmitForm = (event) => {
    event.preventDefault();
    this.setState({
      value: value,
    });
    document.querySelector("input").value = "";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <input
            placeholder="Enter Text"
            name="input-text"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
          <p>Hiển thị dãy đã nhập: {this.state.value}</p>
        </form>
      </div>
    );
  }
}

export default App;
