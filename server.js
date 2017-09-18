"use strict";
const routes = require('./app/routes');
const port = 3000;

const app = routes();

app.listen(port, function(){
  console.log("Express server listening on port %d", 3000);
});
