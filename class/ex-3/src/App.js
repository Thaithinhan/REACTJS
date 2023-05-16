import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  //Khỏi tạo giá trị đếm ban đầu
  constructor() {
    super();
    this.state = { count: 0 };
  }
  handleCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <p>
          Số Lần bấm của bạn là:{" "}
          <span style={{ fontWeight: "700", color: "red" }}>
            {this.state.count}
          </span>
        </p>
        <button onClick={this.handleCount}>Click</button>
      </div>
    );
  }
}

export default App;
