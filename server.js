var express = require("express");
var method = require("method-override");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

app.get('/', function (req,res) {
  res.render("./index.html")
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
