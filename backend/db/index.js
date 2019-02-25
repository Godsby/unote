const pgp = require('pg-promise')({});

const db = pgp('postgres://localhost/unote');

module.exports = { db };