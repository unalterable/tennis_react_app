import React from "react";

export default class Winner extends React.Component {
  render() {
    return (
      <div className="row m-2 p-3 text-center">
        <div className="col">{this.props.winner + " Won!"}</div>
      </div> );
  }
}
