var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var passport = require("passport");

var app = express();
require("./passport")();

mongoose.connect("mongodb://localhost:27017/test");

app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: "very important secret",
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));
app.use('/signup', require('./api/signup'));
app.use('/login', require('./api/login'));

app.listen(app.get("port"), function () {
  console.log("Server started on port " + app.get("port"));
});