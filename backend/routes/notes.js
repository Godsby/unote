let express = require('express');
let router = express.Router();

const { createNote, getAllNotes } = require('../db/queries/notesQueries');

router.get('/', getAllNotes);
router.post('/', createNote);

module.exports = router;