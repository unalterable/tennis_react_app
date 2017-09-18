import React from "react";


export default class PlayerSection extends React.Component {
  render() {
    const Players = this.props.players.map(p=>(
      <div className="col-6">
        <div className="m-2 p-3 border rounded">
          <div className="font-weight-bold">{p.name}</div>
          <div>{p.score}</div>
        </div>
      </div>)
    );
    return (
      <div id="players_section" className="row p-3">
        {Players[0]}
        {Players[1]}
      </div>
    );
  }
}
