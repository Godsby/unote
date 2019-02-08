DROP DATABASE IF EXISTS unote;
CREATE DATABASE unote;

\c unote;

CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   email VARCHAR NOT NULL,
   passcode VARCHAR NOT NULL 
);


CREATE TABLE notes (
   id SERIAL PRIMARY KEY,
   title TEXT NOT NULL,
   body TEXT NOT NULL,
   user_id INT NOT NULL REFERENCES users(id)
);

CREATE TABLE notebooks (
   id SERIAL PRIMARY KEY,
   bookName VARCHAR NOT NULL,
   note_id INT NOT NULL REFERENCES notes(id),
   user_id INT NOT NULL REFERENCES users(id)
);

CREATE TABLE noteTags (
   id SERIAL PRIMARY KEY,
   tagName VARCHAR NOT NULL,
   note_id INT NOT NULL REFERENCES notes(id),
   user_id INT NOT NULL REFERENCES users(id)
);
