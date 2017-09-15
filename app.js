const queryString = require('querystring');
const mustache = require('mustache');
const indexView = require('./app/view/index');

const tennis_rules = require('./app/model/tennis_rules');

const query = queryString.parse(window.location.search.substr(1));
const data = tennis_rules.scorePlayer(query);

document.getElementById("app").innerHTML = mustache.render(indexView, data);
