let express = require('express');
let router = express.Router();
const { getAllTags, createTag, deleteTag, getAllNotesByTag } = require('../db/queries/noteTagsQ');

router.get('/', getAllTags);
router.post('/', createTag);
router.delete('/:id', deleteTag);
router.get('/:id/notes', getAllNotesByTag);

module.exports = router;