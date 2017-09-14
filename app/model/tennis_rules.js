"use strict";

const TENNIS_SCORES = ["0", "15", "30", "40"]

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
  }
};

module.exports = TENNIS_RULES;
