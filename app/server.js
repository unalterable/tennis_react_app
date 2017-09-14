"use strict";
const http = require('http');
const url = require('url');
const ejs = require('ejs');
const tennis_rules = require('./model/tennis_rules');
const indexView = require('./view/index');

const SERVER = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query,
        data = tennis_rules.scorePlayer(queryObject);
  res.end(ejs.render(indexView, data));
});

module.exports = SERVER;
