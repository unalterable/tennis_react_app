import React from "react";


export default class Player extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.player}</div>
        <div>{this.props.score}</div>
      </div>
    );
  }
}
