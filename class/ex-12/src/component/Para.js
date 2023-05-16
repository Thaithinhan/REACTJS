import React from "react";

class Para extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.para);
    return (
      <div>
        <p>{this.props.para}</p>
      </div>
    );
  }
}
export default Para;
