import React from "react";
import Die from "./die";

let random = [
  "fa-solid fa-dice-six",
  "fa-solid fa-dice-five",
  "fa-solid fa-dice-four",
  "fa-solid fa-dice-three",
  "fa-solid fa-dice-two",
  "fa-solid fa-dice-one",
];
class RollDie extends React.Component {
  constructor(props) {
    super();
    this.state = {
      className: "",
      dice1: "fa-solid fa-dice-one",
      dice2: "fa-solid fa-dice-six",
    };
  }
  handleRoll = () => {
    this.setState({
      className: "shaking",
      dice1: random[Math.floor(Math.random() * random.length)],
      dice2: random[Math.floor(Math.random() * random.length)],
    });
    setTimeout(() => {
      this.setState({
        className: "",
      });
    }, 1000);
  };

  render() {
    return (
      <div className="wrapper">
        <Die
          data={{
            className: this.state.className,
            dice1: this.state.dice1,
            dice2: this.state.dice2,
          }}
        />
        <button onClick={this.handleRoll}>Roll Dice</button>
      </div>
    );
  }
}
export default RollDie;
