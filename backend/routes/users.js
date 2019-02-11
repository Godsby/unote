var express = require('express');
var router = express.Router();
const { getAllUsers, createUser } = require('../db/queries/usersQ');

/* GET users listing. */
router.get('/', getAllUsers);
router.post('/', createUser);

module.exports = router;
