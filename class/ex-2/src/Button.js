import React from "react";

class Button extends React.Component {
  render() {
    console.log(this.props.text);
    return (
      <button style={{ background: "blue", color: "red", padding: "10px" }}>
        CLICK ME
      </button>
    );
  }
}

export default Button;
