"use strict";

require('mocha');
require('co-mocha');
const expect = require('chai').expect;
const fetch = require('node-fetch');
const Browser = require('./browser-helper');
let server;

describe("Tennis Scoring", function(){
  before('Start server', function(){
    server = require("../index.js");
  });
  describe("Total Feature", function(){
    this.timeout(30*1000);
    let browser, dom;
    before('Start Browser', function*(){
      browser = Browser();
      yield browser.visit("http://localhost:3000/");
    });
    it('Player 1 Scores', function*(){
      yield browser.click('#player1Scores');
      dom = yield browser.getDom()
      expect(dom).to.have.string('<div>Player 1</div><div>15</div>');
      expect(dom).to.have.string('<div>Player 2</div><div>0</div>');
    });
    it('Player 2 Scores', function*(){
      yield browser.click('#player2Scores');
      dom = yield browser.getDom()
      expect(dom).to.have.string('<div>Player 1</div><div>15</div>');
      expect(dom).to.have.string('<div>Player 2</div><div>15</div>');
    });
    it('Player 2 Wins', function*(){
      yield browser.click('#player2Scores');
      yield browser.click('#player2Scores');
      yield browser.click('#player2Scores');
      dom = yield browser.getDom()
      expect(dom).to.have.string('<div>Player 1</div><div>0</div>');
      expect(dom).to.have.string('<div>Player 2</div><div>0</div>');
      expect(dom).to.have.string('Player 2 Won!');
    });
    after('Quit Browser', function*(){
      yield browser.quit();
    });
  });
  it("Page Loads", function*(){
    const dom = yield (yield fetch('http://localhost:3000')).text();
    expect(dom).to.have.string('<div>Player 1</div><div>0</div>');
    expect(dom).to.have.string('<div>Player 2</div><div>0</div>');
  });
  it("Score rises", function*(){
    const dom = yield (yield fetch('http://localhost:3000/?player1=15&player2=0&scorer=player2')).text();
    expect(dom).to.have.string('<div>Player 1</div><div>15</div>');
    expect(dom).to.have.string('<div>Player 2</div><div>15</div>');
  });
  it("Player Wins", function*(){
    const dom = yield (yield fetch('http://localhost:3000/?player1=15&player2=40&scorer=player2')).text();
    expect(dom).to.have.string('<div>Player 1</div><div>0</div>');
    expect(dom).to.have.string('<div>Player 2</div><div>0</div>');
    expect(dom).to.have.string('Player 2 Won!');
  });
  it("Other Player Wins", function*(){
    const dom = yield (yield fetch('http://localhost:3000/?player1=A&player2=40&scorer=player1')).text();
    expect(dom).to.have.string('<div>Player 1</div><div>0</div>');
    expect(dom).to.have.string('<div>Player 2</div><div>0</div>');
    expect(dom).to.have.string('Player 1 Won!');
  });
  it("No Change", function*(){
    const dom = yield (yield fetch('http://localhost:3000/?player1=15&player2=0')).text();
    expect(dom).to.have.string('<div>Player 1</div><div>15</div>');
    expect(dom).to.have.string('<div>Player 2</div><div>0</div>');
  });
  after('Stop server', function(){
    server.close();
  });
});
