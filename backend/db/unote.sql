DROP DATABASE IF EXISTS unote;
CREATE DATABASE unote;

\c unote;

CREATE TABLE users (
   user_id SERIAL PRIMARY KEY,
   email VARCHAR NOT NULL UNIQUE,
   password_digest VARCHAR NOT NULL 
);

CREATE TABLE noteBooks (
   noteBook_id SERIAL PRIMARY KEY,
   bookName VARCHAR NOT NULL,
   user_id INT REFERENCES users(user_id)
);

CREATE TABLE noteTags (
   noteTag_id SERIAL PRIMARY KEY,
   tagName VARCHAR NOT NULL
);

CREATE TABLE notes (
   note_id SERIAL PRIMARY KEY UNIQUE,
   title TEXT NOT NULL,
   body TEXT NOT NULL,
   createdBy TIMESTAMP DEFAULT now(),
   user_id INT REFERENCES users(user_id),
   noteBook_id INT REFERENCES noteBooks(noteBook_id),
   noteTag_id INT REFERENCES noteTags(noteTag_id)
);