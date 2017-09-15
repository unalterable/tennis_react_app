"use strict";

module.exports = `
<html>
<head></head>
<body>
<div id="app"></div>
<script src='/view/app.js'></script>

<div>Player 1</div><div>{{player1}}</div>
<div>Player 2</div><div>{{player2}}</div>

{{ #winner }}
  <div>
    {{winner}} Won!
  </div>
{{ /winner }}

<button id="player1Scores" onclick="window.location='/?player1={{player1}}&player2={{player2}}&scorer=player1';">Player 1 scored</button>
<button id="player2Scores" onclick="window.location='/?player1={{player1}}&player2={{player2}}&scorer=player2';">Player 2 scored</button>

<button id="resetGame" onclick="window.location='/?player1=0&player2=0';">Reset Game</button>
</body>
</html>
`;
