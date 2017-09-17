"use strict";

require('mocha');
require('co-mocha');
const expect = require('chai').expect;
const Browser = require('./browser-helper');
const app = require("../app/routes.js");
let server, browser, dom;

describe("Tennis Scoring", function(){
  this.timeout(30*1000);
  before('Start server', function*(){
    server = app.listen(3000);
  });
  describe("Total Feature", function(){
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
    it('Player 2 Wins - Game Resets', function*(){
      yield browser.click('#player2Scores');
      yield browser.click('#player2Scores');
      yield browser.click('#player2Scores');
      dom = yield browser.getDom()
      expect(dom).to.have.string('<div>Player 1</div><div>0</div>');
      expect(dom).to.have.string('<div>Player 2</div><div>0</div>');
      expect(dom).to.have.string('Player 2 Won!');
    });
    it('Player 1 Scores 40', function*(){
      yield browser.click('#player1Scores');
      yield browser.click('#player1Scores');
      yield browser.click('#player1Scores');
      dom = yield browser.getDom()
      expect(dom).to.have.string('<div>Player 1</div><div>40</div>');
      expect(dom).to.have.string('<div>Player 2</div><div>0</div>');
    });
    it('Player 2 Gets to Duece', function*(){
      yield browser.click('#player2Scores');
      yield browser.click('#player2Scores');
      yield browser.click('#player2Scores');
      dom = yield browser.getDom()
      expect(dom).to.have.string('<div>Player 1</div><div>40</div>');
      expect(dom).to.have.string('<div>Player 2</div><div>40</div>');
    });
    it('Player 2 Scores Advantage', function*(){
      yield browser.click('#player2Scores');
      dom = yield browser.getDom()
      expect(dom).to.have.string('<div>Player 1</div><div>40</div>');
      expect(dom).to.have.string('<div>Player 2</div><div>A</div>');
    });
    it('Player 1 Wins - Game Resets', function*(){
      yield browser.click('#player1Scores');
      yield browser.click('#player1Scores');
      yield browser.click('#player1Scores');
      dom = yield browser.getDom()
      expect(dom).to.have.string('<div>Player 1</div><div>0</div>');
      expect(dom).to.have.string('<div>Player 2</div><div>0</div>');
      expect(dom).to.have.string('Player 1 Won!');
    });
    it('Game Reset Button works', function*(){
      yield browser.click('#player1Scores');
      dom = yield browser.getDom()
      expect(dom).to.have.string('<div>Player 1</div><div>15</div>');
      expect(dom).to.have.string('<div>Player 2</div><div>0</div>');
      yield browser.click('#resetGame');
      dom = yield browser.getDom()
      expect(dom).to.have.string('<div>Player 1</div><div>0</div>');
      expect(dom).to.have.string('<div>Player 2</div><div>0</div>');
    });
    after('Quit Browser', function*(){
      yield browser.quit();
    });
  });
  after('Stop server', function*(){
    server.close();
  });
});
