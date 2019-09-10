// our dependencies for this app to give server functionality
var express = require('express');
var path = require('path');

// configuring express server
var app = express();
var PORT = process.env.PORT || 3000;

// sets up express to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// handles our server routing when requesting or sending data
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// starts the server 
app.listen(PORT, function () {
    console.log("App listening on port " + PORT);
});