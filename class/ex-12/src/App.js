import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Para from "./component/Para";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isChange: true,
      para1: "This is first Paragraph",
      para2: "This is Second Paragraph",
    };
  }

  changeParra = () => {
    // this.setState({
    //   isChange: !this.state.isChange,
    // });
    if (this.state.isChange) {
      this.setState({
        isChange: false,
      });
    } else {
      this.setState({
        isChange: true,
      });
    }
    console.log(this.state.isChange);
  };
  render() {
    return (
      <div>
        <Para
          para={this.state.isChange ? this.state.para1 : this.state.para2}
        />
        <button onClick={this.changeParra}>
          Click here to change paragraph
        </button>
      </div>
    );
  }
}

export default App;
