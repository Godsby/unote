const passport = require("passport");
const { db } = require('../db/index');

module.exports = () => {
  passport.serializeUser((user, done) => {
    // console.log("serialize")
    done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
    db.one("SELECT * FROM users WHERE email = ${email}", {
      email: email
    })
      .then(user => {
        done(null, user.email);
      })
      .catch(err => {
        done(err, null);
      });
  });
};