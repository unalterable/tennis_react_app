import React from "react";
import tennis_rules from '../model/tennis_rules';

export default class Winner extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.winner + " Won!"} </div>
      </div>
    );
  }
}
