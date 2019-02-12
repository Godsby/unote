const { db } = require('../index');

const getAllTags = (req, res, next) => {
   db.any('SELECT * FROM noteTags')
   .then(noteTags => {
      res.status(200).json({
         status: 'success',
         noteTags: noteTags,
         message: 'Received All NoteTags!'
      })
   })
   .catch(err => next(err));
}

const createTag = (req, res, next) => {
   db.none('INSERT INTO noteTags(tagName, note_id) VALUES(${tagName}, ${note_id})', req.body)
   .then(() => {
      res.status(200).json({
         status: 'success',
         message: 'New NoteTag Created!'
      })
   })
   .catch(err => next(err));
}

const deleteTag = ( req, res, next) => {
   let noteTag_id = parseInt(req.params.id);
   db.none('DELETE FROM noteTags WHERE id = $1', noteTag_id)
   .then(() => {
      res.status(200).json({
         status: 'success',
         message: 'NoteTag Deleted!'
      })
   })
   .catch(err => next(err));
}

const getAllNotesByTag = ( req, res, next ) => {
   let noteTag_id = parseInt(req.params.id);
   db.any('SELECT * FROM notes WHERE noteTag_id = $1', noteTag_id)
   .then(notes => {
      res.status(200).json({
         status: 'success',
         notes: notes,
         message: 'Received All Notes For A Tag!'
      })
   })
   .catch(err => next(err));
}

module.exports = { getAllTags, createTag, deleteTag, getAllNotesByTag };