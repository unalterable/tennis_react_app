"use strict";

const app = require('./app/routes');

app.listen(3000, function(){
  console.log("Express server listening on port %d", 3000);
});
