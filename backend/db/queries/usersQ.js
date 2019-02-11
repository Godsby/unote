const { db } = require('../index');

const getAllUsers = (req, res, next) => {
   db.any('SELECT * FROM users')
   .then(users => {
      res.status(200).json({
         status: 'success',
         users: users,
         message: 'Received All Users!'
      })
   })
   .catch(err => next(err));
}

const createUser = (req, res, next) => {
   db.none('INSERT INTO users(email, passcode) VALUES(${email}, ${passcode})', req.body)
   .then(() => {
      res.status(200).json({
         status: 'success',
         message: 'New User Created!'
      })
   })
   .catch(err => next(err));
}
module.exports = { getAllUsers, createUser };