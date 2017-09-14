"use-strict";

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
  }
};

module.exports = TENNIS_RULES;
