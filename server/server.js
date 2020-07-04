// load up the express framework and body-parser helper
const express = require("express");
const bodyParser = require("body-parser");

// create an instance of express to serve our end points
const app = express();

// load up node's built in file system helper library here
// be using this to serve our JSON files
const fs = require("fs");

// configure express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable CORS
app.all("/*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

// this is where various routes are handled
const routes = require("./routes/routes.js")(app, fs);

// launch the server on port 3001.
const server = app.listen(3001, () => {
  console.log("listening on port %s...", server.address().port);
});
