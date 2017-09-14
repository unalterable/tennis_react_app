"use strict";

// require('mocha');
require('co-mocha');
const expect = require('chai').expect;
const fetch = require('node-fetch');
const server = require('../app/server');

describe("Tennis Scoring", function(){
  before('start server', function(){
    server.listen(3000);
  });
  it("Page Loads", function*(){
    const responseBody = yield (yield fetch('http://localhost:3000')).text();
    expect(responseBody).to.have.string('<div>Player 1</div><div>0</div>');
    expect(responseBody).to.have.string('<div>Player 2</div><div>0</div>');
  });
  it("Score rises", function*(){
    const responseBody = yield (yield fetch('http://localhost:3000/?player1=15&player2=0&scorer=player2')).text();
    expect(responseBody).to.have.string('<div>Player 1</div><div>15</div>');
    expect(responseBody).to.have.string('<div>Player 2</div><div>15</div>');
  });
  it("Player Wins", function*(){
    const responseBody = yield (yield fetch('http://localhost:3000/?player1=15&player2=40&scorer=player2')).text();
    expect(responseBody).to.have.string('<div>Player 1</div><div>0</div>');
    expect(responseBody).to.have.string('<div>Player 2</div><div>0</div>');
    expect(responseBody).to.have.string('Player 2 Won!');
  });
  it("Other Player Wins", function*(){
    const responseBody = yield (yield fetch('http://localhost:3000/?player1=A&player2=40&scorer=player1')).text();
    expect(responseBody).to.have.string('<div>Player 1</div><div>0</div>');
    expect(responseBody).to.have.string('<div>Player 2</div><div>0</div>');
    expect(responseBody).to.have.string('Player 1 Won!');
  });
  it("No Change", function*(){
    const responseBody = yield (yield fetch('http://localhost:3000/?player1=15&player2=0')).text();
    expect(responseBody).to.have.string('<div>Player 1</div><div>15</div>');
    expect(responseBody).to.have.string('<div>Player 2</div><div>0</div>');
  });
  after('stop server', function(){
    server.close();
  });
});
