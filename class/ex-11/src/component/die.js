import React from "react";

class Die extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    console.log(this.props.data);
    return (
      <div className="list-xucsac">
        <span className="xucsac1 xucsac">
          <i
            className={this.props.data.dice1 + " " + this.props.data.className}
          ></i>
        </span>
        <span className="xucsac2 xucsac">
          <i
            className={this.props.data.dice2 + " " + this.props.data.className}
          ></i>
        </span>
      </div>
    );
  }
}

export default Die;
