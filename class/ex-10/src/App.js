import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Coin from "./component/Coin";
const random = [true, false];
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isHead: true,
      imgUrl:
        "https://i.pcgs.com/s3/cu-pcgs/Photograde/500/GoldDollar1-68o.jpg",
      countTail: 0,
      countHead: 0,
    };
  }
  handleFlip = () => {
    this.setState({
      isHead: random[Math.floor(Math.random() * random.length)],
    });
    this.state.isHead
      ? this.setState({
          imgUrl:
            "https://i.pcgs.com/s3/cu-pcgs/Photograde/500/GoldDollar1-68o.jpg",
          countHead: this.state.countHead + 1,
        })
      : this.setState({
          imgUrl:
            "https://i.pcgs.com/s3/cu-pcgs/Photograde/500/GoldDollar1-66r.jpg",
          countTail: this.state.countTail + 1,
        });
  };

  render() {
    return (
      <div className="wrapper-flip">
        <Coin imgUrl={this.state.imgUrl} />
        <button onClick={this.handleFlip}>Flip Me</button>
        <p>
          <b>
            <span style={{ color: "red" }} className="head-coin">
              {this.state.countHead}
            </span>
            Head and
            <span style={{ color: "blue" }} className="tail-coin">
              {this.state.countTail}
            </span>{" "}
            Tail
          </b>
        </p>
      </div>
    );
  }
}

export default App;
