"use strict";
const app = require('express')();
const ejs = require('ejs');
const tennis_rules = require('./app/model/tennis_rules');
const indexView = require('./app/view/index');
const port = 3000;

app.get('/', function(req, res){
  const data = tennis_rules.scorePlayer(req.query);
  res.end(ejs.render(indexView, data));
});

module.exports = app.listen(port);
