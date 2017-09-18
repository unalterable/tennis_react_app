"use strict";

require('mocha');
require('co-mocha');
const expect = require('chai').expect;
const Browser = require('./browser-helper');
const routes = require("../app/routes.js");
let server, browser;


describe("Tennis Scoring", function(){
  this.timeout(30*1000);
  before('Start server', function*(){
    const slowingMiddleware = (req, res, next)=>{ setTimeout(next, 100) }
    server = routes(slowingMiddleware).listen(3000);
  });
  describe("Total Feature", function(){
    before('Start Browser', function*(){
      browser = Browser();
      yield browser.visit("http://localhost:3000/");
    });
    it('Player 1 Scores', function*(){
      yield browser.click('#player1Scores');
      yield browser.waitFor("#players_section");
      const text = yield browser.getText("#tennis_game");
      expect(text).to.have.string('Player 1\n15');
      expect(text).to.have.string('Player 2\n0');
    });
    it('Player 2 Scores', function*(){
      yield browser.click('#player2Scores');
      yield browser.waitFor("#players_section");
      const text = yield browser.getText("#tennis_game");
      expect(text).to.have.string('Player 1\n15');
      expect(text).to.have.string('Player 2\n15');
    });
    it('Player 2 Wins - Game Resets', function*(){
      yield browser.click('#player2Scores');
      yield browser.click('#player2Scores');
      yield browser.click('#player2Scores');
      yield browser.waitFor("#players_section");
      const text = yield browser.getText("#tennis_game");
      expect(text).to.have.string('Player 1\n0');
      expect(text).to.have.string('Player 2\n0');
      expect(text).to.have.string('Player 2 Won!');
    });
    it('Player 1 Scores 40', function*(){
      yield browser.click('#player1Scores');
      yield browser.click('#player1Scores');
      yield browser.click('#player1Scores');
      yield browser.waitFor("#players_section");
      const text = yield browser.getText("#tennis_game");
      expect(text).to.have.string('Player 1\n40');
      expect(text).to.have.string('Player 2\n0');
    });
    it('Player 2 Gets to Duece', function*(){
      yield browser.click('#player2Scores');
      yield browser.click('#player2Scores');
      yield browser.click('#player2Scores');
      yield browser.waitFor("#players_section");
      const text = yield browser.getText("#tennis_game");
      expect(text).to.have.string('Player 1\n40');
      expect(text).to.have.string('Player 2\n40');
    });
    it('Player 2 Scores Advantage', function*(){
      yield browser.click('#player2Scores');
      yield browser.waitFor("#players_section");
      const text = yield browser.getText("#tennis_game");
      expect(text).to.have.string('Player 1\n40');
      expect(text).to.have.string('Player 2\nA');
    });
    it('Player 1 Wins - Game Resets', function*(){
      yield browser.click('#player1Scores');
      yield browser.click('#player1Scores');
      yield browser.click('#player1Scores');
      yield browser.waitFor("#players_section");
      const text = yield browser.getText("#tennis_game");
      expect(text).to.have.string('Player 1\n0');
      expect(text).to.have.string('Player 2\n0');
      expect(text).to.have.string('Player 1 Won!');
    });
    it('Game Reset Button works', function*(){
      yield browser.click('#player1Scores');
      yield browser.waitFor("#players_section");
      const text = yield browser.getText("#tennis_game");
      expect(text).to.have.string('Player 1\n15');
      expect(text).to.have.string('Player 2\n0');
      yield browser.click('#resetGame');
      yield browser.waitFor("#players_section");
      const text2 = yield browser.getText("#tennis_game");
      expect(text2).to.have.string('Player 1\n0');
      expect(text2).to.have.string('Player 2\n0');
    });
    after('Quit Browser', function*(){
      yield browser.quit();
    });
  });
  after('Stop server', function*(){
    server.close();
  });
});
