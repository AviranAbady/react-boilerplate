var express = require('express');
var passport = require('passport');
var router = express.Router();

var User = require("../models/user");

router.post("/", function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username}, function (err, user) {
        if (err) {
            return next(err);
        }
        if (user) {
            return res.status(400).send({success: false, message: 'registration failed'});
        }
        var newUser = new User({
            username: username,
            password: password
        });
        newUser.save();
        return res.send({success: true, message: 'registration success'});
    });
});

module.exports = router;