/**
 * User model
 */

var mongoose = require("mongoose");
var bcrtypt = require("bcrypt-nodejs")

var userSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    displayName: String
});

var SALT_FACTOR = 10;

userSchema.pre("save", function (done) {
    var user = this;
    if (!user.isModified("password")) {
        return done();
    }

    bcrtypt.genSalt(SALT_FACTOR, function (error, salt) {
        if (error) {
            return done(error);
        }
        bcrtypt.hash(user.password, salt, null, function (error, passwordHash) {
            if (error) {
                return done(error);
            }
            user.password = passwordHash;
            done();
        });
    })
})

userSchema.methods.validatePassword = function (inputPassword, done) {
    bcrtypt.compare(inputPassword, this.password, function (error, isValid) {
        done(error, isValid);
    });
}

userSchema.methods.name = function () {
    return this.displayName || this.username;
}

userSchema.methods.getId = function () {
    return this._id;
}

module.exports = mongoose.model("User", userSchema);
