var module = require("module_name");
var express = require("express");

var app = express();
var server = app.listen(3000, () => {
  console.log("server is running on port", server.address().port);
});
