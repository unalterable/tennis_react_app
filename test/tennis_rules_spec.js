"use strict";

require('mocha');
const expect = require('chai').expect;
const sut = require('../app/model/tennis_rules');

describe("Tennis Scoring", function(){
  it("Basic scoring works correctly", function(){
    expect(sut.score({scorer: "0", opponent: "0"})).to.eql({scorer: "15", opponent:"0"});
    expect(sut.score({scorer: "15", opponent: "0"})).to.eql({scorer: "30", opponent:"0"});
    expect(sut.score({scorer: "15", opponent: "15"})).to.eql({scorer: "30", opponent:"15"});
    expect(sut.score({scorer: "30", opponent: "0"})).to.eql({scorer: "40", opponent:"0"});
    expect(sut.score({scorer: "30", opponent: "40"})).to.eql({scorer: "40", opponent:"40"});
  });
  it("Winning game", function(){
    expect(sut.score({scorer: "40", opponent: "0"})).to.eql({scorer: "0", opponent:"0", winner: true});
    expect(sut.score({scorer: "40", opponent: "15"})).to.eql({scorer: "0", opponent:"0", winner: true});
    expect(sut.score({scorer: "40", opponent: "30"})).to.eql({scorer: "0", opponent:"0", winner: true});
  });
  it("Advantage", function(){
    expect(sut.score({scorer: "40", opponent: "40"})).to.eql({scorer: "A", opponent:"40"});
    expect(sut.score({scorer: "40", opponent: "40"}).winner).to.not.exist;
  });
  it("Back to deuce", function(){
    expect(sut.score({scorer: "40", opponent: "A"})).to.eql({scorer: "40", opponent:"40"});
    expect(sut.score({scorer: "40", opponent: "A"}).winner).to.not.exist;
  });
  it("Winning from advantage", function(){
    expect(sut.score({scorer: "A", opponent: "40"})).to.eql({scorer: "0", opponent:"0", winner: true});
  });
});

describe("ScorePlayer function", function(){
  it("No Scorer? No Change", function(){
    expect(sut.scorePlayer({player1: "0", player2: "0"})).to.eql({player1: "0", player2: "0"});
    expect(sut.scorePlayer({player1: "40", player2: "0"})).to.eql({player1: "40", player2: "0"});
    expect(sut.scorePlayer({player1: "0", player2: "30"})).to.eql({player1: "0", player2: "30"});
  });
  it("Basic scoring works correctly", function(){
    expect(sut.scorePlayer({player1: "0", player2: "0", scorer: "player2"})).to.eql({player1: "0", player2: "15"});
    expect(sut.scorePlayer({player1: "30", player2: "40", scorer: "player1"})).to.eql({player1: "40", player2: "40"});
    expect(sut.scorePlayer({player1: "40", player2: "30", scorer: "player1"})).to.eql({player1: "0", player2: "0", winner: "player1"});
    expect(sut.scorePlayer({player1: "40", player2: "A", scorer: "player2"})).to.eql({player1: "0", player2: "0", winner: "player2"});
  });
  it("Undefined gives 0", function(){
    expect(sut.scorePlayer({player1: undefined, player2: "0"})).to.eql({player1: "0", player2: "0"});
    expect(sut.scorePlayer({player1: undefined, player2: undefined})).to.eql({player1: "0", player2: "0"});
    expect(sut.scorePlayer({player1: undefined, player2: "40", scorer: "player1"})).to.eql({player1: "15", player2: "40"});
    expect(sut.scorePlayer({player1: "40", player2: undefined, scorer: "player1"})).to.eql({player1: "0", player2: "0", winner: "player1"});
    expect(sut.scorePlayer({player1: "40", player2: undefined, scorer: "player2"})).to.eql({player1: "40", player2: "15"});
  });
});
describe("Clean Score Function", function(){
  it("Everything bad becomes 0", function(){
    expect(sut.cleanScores({player1: 0, player2: "0"})).to.eql({player1: "0", player2: "0"});
    expect(sut.cleanScores({player1: 1, player2: "undefined"})).to.eql({player1: "0", player2: "0"});
    expect(sut.cleanScores({player1: undefined, player2: "21",})).to.eql({player1: "0", player2: "0"});
    expect(sut.cleanScores({player1: {}, player2: null})).to.eql({player1: "0", player2: "0"});
    expect(sut.cleanScores({player1: "40", player2: 15})).to.eql({player1: "40", player2: "0"});
    expect(sut.cleanScores({player1: 10, player2: 0})).to.eql({player1: "0", player2: "0"});
  });
  it("Everything good remains", function(){
    expect(sut.cleanScores({player1: "0", player2: "0"})).to.eql({player1: "0", player2: "0"});
    expect(sut.cleanScores({player1: "40", player2: "15"})).to.eql({player1: "40", player2: "15"});
    expect(sut.cleanScores({player1: "A", player2: "40"})).to.eql({player1: "A", player2: "40"});
  });
  it("Everything else remains untouched", function(){
    expect(sut.cleanScores({player1: "0", player2: "0", bob: 7})).to.eql({player1: "0", player2: "0", bob: 7});
    expect(sut.cleanScores({player1: "40", player2: "undefined", scorer: 'player1'})).to.eql({player1: "40", player2: "0", scorer: 'player1'});
    expect(sut.cleanScores({player1: "A", player2: "40", player3: null})).to.eql({player1: "A", player2: "40", player3: null});
  });
});
