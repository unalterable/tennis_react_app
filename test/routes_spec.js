"use strict";

require('mocha');
require('co-mocha');
const expect = require('chai').expect;
const fetch = require('node-fetch');
const app = require("../app/routes.js");
let server;

const call = function*(player1, player2, scorer){
  let url = `http://localhost:3000/tennis_rules?player1=${player1}&player2=${player2}`
  if(scorer){url = url + `&scorer=${scorer}`};
  const response = yield fetch(url);
  return response.json();
}

describe("API (served through routes.js)", function(){
  before('Start server', function*(){
    server = app.listen(3000);
  });
  it("Response can parse as JSON", function*(){
    const response = yield call(0, 0, false);
  });
  it("Init Values", function*(){
    const response = yield call(undefined, undefined, false);
    expect(response.player1).to.eql("0");
    expect(response.player2).to.eql("0");
  });
  it("Scoring works", function*(){
    const response = yield call(0, 0, 'player1');
    expect(response.player1).to.eql("15");
    expect(response.player2).to.eql("0");
  });
  it("Winning works", function*(){
    const response = yield call(0, 40, 'player2');
    expect(response.player1).to.eql("0");
    expect(response.player2).to.eql("0");
    expect(response.winner).to.eql("player2");
  });
  after('Stop server', function*(){
    server.close();
  });
});
