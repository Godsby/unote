const { db } = require('../index');

const getAllNotes = (req, res, next) => {
   // let user_id = parseInt(req.params.id);
   let user_id = req.user.user_id
   db.any('SELECT * FROM notes Where user_id=$1', user_id)
   .then(notes => {
      res.status(200).json({
         status: 'success',
         notes: notes,
         message: 'Received All Notes for the LoggedUser!'
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

const editNote = (req, res, next) => {
   let queryString = '';
   if (req.body.title && req.body.body) {
      queryString += 'UPDATE notes SET title = ${title}, body = ${body} WHERE id = ${id} '
   } else if (req.body.title) {
      queryString += 'UPDATE notes SET title = ${title} WHERE id = ${id}'
   } else {
      queryString += 'UPDATE notes SET body = ${body} WHERE id = ${id}'
   }
   db.none(queryString, {
      id: parseInt(req.params.id),
      title: req.body.title,
      body: req.body.body
   })
   .then(() => {
      res.status(200).json({
         status: 'success',
         message: 'Note Updated!'
      })
   })
   .catch(err => next(err));
}

const deleteNote = (req, res, next) => {
   let note_id = parseInt(req.params.id);
   db.none('DELETE FROM notes WHERE id=$1', note_id)
   .then(() => {
      res.status(200).json({
         status: 'success',
         message: 'Note Deleted!'
      })
   })
   .catch(err => next(err));
}

const addOrRemoveNoteFromNB = (req, res, next) => {
   let queryString = '';
   if (req.body.noteBook_id) {
      queryString += 'UPDATE notes SET noteBook_id = ${noteBook_id} WHERE id = ${id}'
   }
   db.none(queryString, {
      id: parseInt(req.params.id),
      noteBook_id: req.body.noteBook_id
   })
      .then(() => {
         res.status(200).json({
            status: 'success',
            message: 'Note Updated!'
         })
      })
      .catch(err => next(err));
}

module.exports = { getAllNotes, createNote, editNote, deleteNote, addOrRemoveNoteFromNB };
