import React from "react";

class Coin extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="coin-img">
        <h3>Let's Flip a coin</h3>
        <img width={200} src={this.props.imgUrl} alt="ảnh coin"></img>
      </div>
    );
  }
}

export default Coin;
