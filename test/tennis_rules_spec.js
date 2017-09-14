"use-strict";

require('mocha');
const expect = require('chai').expect;
const sut = require('../src/tennis_rules')

describe("Tennis Scoring", function(){
  it("Scoring works ", function(){
    expect(sut.score({scorer: "0", opponent: "0"})).to.eql({scorer: "15", opponent:"0"});
  })
})
