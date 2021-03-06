const { db } = require('../index');

const getAllNB = (req, res, next) => {
   db.any('SELECT * FROM noteBooks')
   .then(noteBooks => {
      res.status(200).json({
         status: 'success',
         noteBooks: noteBooks,
         message: 'Receive All NoteBooks!'
      })
   })
   .catch(err => next(err));
}

const createNB = (req, res, next) => {
   db.none('INSERT INTO noteBooks(bookName, user_id) VALUES(${bookName}, ${user_id})', req.body)
   .then(() => {
      res.status(200).json({
         status: 'success',
         message: 'New NoteBook Created!'
      })
   })
   .catch(err => next (err));
}

const editNB = (req, res, next) => {
   let queryString = '';
   if (req.body.bookName && req.body.user_id) {
      queryString += 'UPDATE noteBooks SET bookName = ${bookName}, user_id = ${user_id} WHERE id = ${id}'
   } else if (req.body.bookName) {
      queryString += 'UPDATE noteBooks SET bookName = ${bookName} WHERE id = ${id}'
   } else {
      queryString += 'UPDATE noteBooks SET user_id = ${user_id} WHERE id = ${id}'
   }
   db.none(queryString, {
      bookName: req.body.bookName,
      user_id: req.body.user_id,
      id: parseInt(req.params.id)
   })
   .then(() => {
      res.status(200).json({
         status: 'success',
         message: 'NoteBook Updated!'
      })
   })
   .catch(err => next(err));
}

const deleteNB = (req, res, next) => {
   let notebook_id = parseInt(req.params.id);
   db.none('DELETE FROM noteBooks WHERE id = $1', notebook_id)
   .then(() => {
      res.status(200).json({
         status: 'success',
         message: 'NoteBook Deleted!'
      })
   })
   .catch(err => next(err));
}

const getAllNotesForNoteBook = (req, res, next) => {
   let noteBook_id = parseInt(req.params.id);
   db.any('SELECT * FROM notes WHERE noteBook_id = $1', noteBook_id)
   .then(notes => {
      res.status(200).json({
         status: 'success',
         notes: notes,
         message: 'All Notes For A NoteBook!'
      })
   })
   .catch(err => next(err));
}

module.exports = { getAllNB, createNB, editNB, deleteNB, getAllNotesForNoteBook};