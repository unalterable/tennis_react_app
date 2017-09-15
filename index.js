"use strict";
const express = require('express');
const app = express();
const mustache = require('mustache');
const tennis_rules = require('./app/model/tennis_rules');
const indexView = require('./app/view/index');
const port = 3000;

app.use(express.static('build'));

module.exports = app.listen(port);
