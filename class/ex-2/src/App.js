import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Button from "./Button";

class App extends React.Component {
  render() {
    return (
      <div>
        <Button text="Click me" color="red" background="blue" />
      </div>
    );
  }
}
export default App;
