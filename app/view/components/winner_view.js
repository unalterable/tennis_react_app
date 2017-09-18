import React from "react";

export default class Winner extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.winner + " Won!"} </div>
      </div>
    );
  }
}
