"use-strict";

require('mocha');
const expect = require('chai').expect;
const sut = require('../src/tennis_rules')

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
