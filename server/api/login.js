var express = require("express");
var passport = require('passport');

var router = express.Router();

router.post('/',
    function (req, res, next) {
        passport.authenticate('login', function (err, user, info) {
            if (err) {
                return next(err); // will generate error 500
            }
            if (!user) {
                return res.status(401).send({message: 'authentication failed'});
            }
            req.login(user, function (err) {
                if (err) {
                    return next(err);
                }

                return res.send({id: user._id, username: user.username });
            });
        })(req, res, next);
    });

module.exports = router;