"use strict";

module.exports = `
<div>Player 1</div><div><%=player1%></div>
<div>Player 2</div><div><%=player2%></div>

<% if(locals.winner){ %>
  <div>
    <% if(winner === 'player1'){ %>
      <%='Player 1 Won!' %>
    <% } else if(winner === 'player2'){  %>
      <%='Player 2 Won!' %>
    <% } %>
  </div>
<% } %>

<button id="player1Scores" onclick="window.location='/?player1=<%=player1%>&player2=<%=player2%>&scorer=player1';">Player 1 scored</button>
<button id="player2Scores" onclick="window.location='/?player1=<%=player1%>&player2=<%=player2%>&scorer=player2';">Player 2 scored</button>

<button id="resetGame" onclick="window.location='/?player1=0&player2=0';">Reset Game</button>
`;
