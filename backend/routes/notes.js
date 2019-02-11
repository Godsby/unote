let express = require('express');
let router = express.Router();

const { createNote, getAllNotes, editNote, deleteNote, addOrRemoveNoteFromNB } = require('../db/queries/notesQ');

router.get('/', getAllNotes);
router.post('/', createNote);
router.patch('/:id', editNote);
router.patch('/:id', addOrRemoveNoteFromNB);
router.delete('/:id', deleteNote);

module.exports = router;