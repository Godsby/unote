
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helpers = require("./helpers");

const { db } = require("../db/index");

//for passport middleware, username and password are keywords, if db use different key, 
//then need to use following object sytax for LocalStrategy function.
passport.use(
  new LocalStrategy({ usernameField: "email"},(email, password, done) => {

    db.one("SELECT * FROM users WHERE email = ${email}", {
      email: email
    })
      .then(user => {
        console.log(user)
        if (!helpers.comparePass(password, user.password_digest)) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      })
      .catch(err => {
        console.log(err);
        return done(err);
      });
  })
);

init();

module.exports = passport;