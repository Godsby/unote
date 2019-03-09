const { db } = require('../index');

const getAllNotes = (req, res, next) => {
   // let user_id = parseInt(req.params.id);
   let user_id = req.user.user_id
   db.any('SELECT * FROM notes WHERE user_id=$1 ORDER BY createdby DESC', user_id)
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
   db.one('INSERT INTO notes(title, body, user_id) VALUES(${title}, ${body}, ${user_id}) RETURNING *', { 
      user_id: req.user.user_id, 
      ...req.body 
   })

   .then(data => {
      res.status(200).json({
         status: 'success',
         note: data,
         message: 'New Note Created!'
      })
   })
   .catch(err => next(err));
}

const editNote = (req, res, next) => {
   // let queryString = '';
   // if (req.body.title && req.body.body) {
   //    queryString += 'UPDATE notes SET title = ${title}, body = ${body} WHERE note_id = ${note_id} '
   // } else if (req.body.title) {
   //    queryString += 'UPDATE notes SET title = ${title} WHERE note_id = ${note_id}'
   // } else {
   //    queryString += 'UPDATE notes SET body = ${body} WHERE note_id = ${note_id}'
   // }
   db.one('UPDATE notes SET title = ${ title }, body = ${ body } WHERE note_id = ${ note_id } RETURNING *', {
      note_id: parseInt(req.params.id),
      title: req.body.title,
      body: req.body.body
   })
   .then(data => {
      res.status(200).json({
         status: 'success',
         note: data,
         message: 'Note Updated!'
      })
   })
   .catch(err => next(err));
}

const deleteNote = (req, res, next) => {
   let note_id = parseInt(req.params.id);
   db.none('DELETE FROM notes WHERE note_id=$1', note_id)
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
