const { db } = require('../index');
const helpers = require('../../auth/helpers');

const createUser = (req, res, next) => {
   const hash = helpers.createHash(req.body.password);
   // console.log("hello ", hash)
   db.none('INSERT INTO users(email, password_digest) VALUES(${email}, ${password})',
   {  email: req.body.email,
      password: hash
   })
   .then(() => {
      res.status(200).json({
         message: 'Registration successful!'
      });
   })
   .catch(err => {
      res.status(500).json({
         message: err
      });
   });
}

const logoutUser = (req, res, next) => {
   req.logout();
   res.status(200).json({
      message:'Log out success'
   });
}

const loginUser = (req, res) => {
   res.json(req.user);
}

const isLoggedIn = (req, res) => {
   if(req.user) {
      res.json({email: req.user});
   } else {
      res.status(401).json({
         err: 'Nobody loggged in'
      });
   }
}

module.exports = { createUser, logoutUser, loginUser, isLoggedIn };