"use strict";

const TENNIS_SCORES = ["0", "15", "30", "40", "A"]

const TENNIS_RULES = {
  score: function(currScore){
    switch(currScore.scorer){
      default:
        return {scorer: TENNIS_SCORES[TENNIS_SCORES.indexOf(currScore.scorer) + 1],
                opponent: currScore.opponent};
      case "40":
        switch(currScore.opponent){
          case "A":
            return {scorer: "40", opponent: "40"};
          case "40":
            return {scorer: "A", opponent: "40"};
          default:
        }
        case "A":
          return {scorer: "0", opponent: "0", winner: true};
    }
  },
  scorePlayer: function(args){
    args.player1 = args.player1 || "0";
    args.player2 = args.player2 || "0";
    if(args.scorer){
      const scorerName = args.scorer,
            opponentName = args.scorer === "player1" ? "player2" : "player1",
            score = TENNIS_RULES.score({scorer: args[scorerName], opponent: args[opponentName]}),
            result = {[scorerName]:  score.scorer, [opponentName]: score.opponent};
      if(score.winner){ result.winner = scorerName; }
      return result;
    }
    return args;
  },
  cleanScores: function(score){
    function cleanScore(num){
      return TENNIS_SCORES.indexOf(num) > -1 ? num : TENNIS_SCORES[0];
    }
    const P1 = cleanScore(score.player1),
          P2 = cleanScore(score.player2);
    return Object.assign({}, score, {player1: P1, player2: P2});
  }
};

module.exports = TENNIS_RULES;
