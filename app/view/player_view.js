import React from "react";
import tennis_rules from '../model/tennis_rules';

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
