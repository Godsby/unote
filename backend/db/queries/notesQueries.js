const { db } = require('../index');

const getAllNotes = (req, res, next) => {
   db.any('SELECT * FROM notes')
   .then(notes => {
      res.status(200).json({
         status: 'success',
         notes: notes,
         message: 'Received All Notes!'
      })
   })
   .catch(err => next(err));
}

const createNote = (req, res, next) => {
   db.none('INSERT INTO notes(title, body, user_id) VALUES(${title}, ${body}, ${user_id})', req.body)
   .then(() => {
      res.status(200).json({
         status: 'success',
         message: 'New Note Created!'
      })
   })
   .catch(err => next(err));
}



module.exports = { getAllNotes, createNote };
