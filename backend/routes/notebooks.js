let express = require('express');
let router = express.Router();
const { getAllNB, createNB, editNB, deleteNB, getAllNotesForNoteBook } = require('../db/queries/notebooksQ');

router.get('/', getAllNB);
router.post('/', createNB);
router.patch('/:id', editNB);
router.delete('/:id', deleteNB);
router.get('/:id/notes', getAllNotesForNoteBook)

module.exports = router;