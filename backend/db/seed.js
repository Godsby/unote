const { db } = require('./index');

const faker = require('faker');

let users = [];

for(let i = 0; i < 20; i ++) {
   let email = faker.internet.email();
   let passcode = faker.internet.password();
   let str = `('${email}', '${passcode}')`;
   users.push(str);
}

// console.log('Users', users);
// console.log(faker.fake("{{internet.email}}, {{internet.password}}"));

let notes = [];

for (let i = 0; i < 50; i++) {
   let title = faker.lorem.sentence();
   let body = faker.lorem.paragraphs();
   let user_id = Math.floor(Math.random() * 20 + 1);
   let noteBook_id = Math.floor(Math.random() * 10 + 1);
   let str = `('${title}', '${body}', ${user_id}, ${noteBook_id})`;
   notes.push(str);
}
// console.log('Notes', notes);

let noteBooks = [];

for (let i = 0; i < 10; i++) {
   let bookName = faker.random.words();
   let user_id = Math.floor(Math.random() * 20 + 1);
   let str = `('${bookName}', ${user_id})`;
   noteBooks.push(str);
}

// console.log('Notebooks', noteBooks);


let noteTags = [];

for (let i = 0; i < 20; i++) {
   let tagName = faker.random.word();
   let note_id = Math.floor(Math.random() * 50 + 1);
   let str = `('${tagName}', ${note_id})`;
   noteTags.push(str);
}

// console.log('NoteTags', noteTags);

users = users.join(', ');
notes = notes.join(', ');
noteBooks = noteBooks.join(', ');
noteTags = noteTags.join(', ');


db.none('INSERT INTO users(email, passcode) VALUES ' + users + ';')
   .then(() => {
      db.none('INSERT INTO noteBooks(bookName, user_id) VALUES ' + noteBooks + ';')
         .then(() => {
            db.none('INSERT INTO notes(title, body, user_id, noteBook_id) VALUES ' + notes + ';')
               .then(() => {
                  db.none('INSERT INTO noteTags(tagName, note_id) VALUES ' + noteTags + ';')
               })
         })
   })
   .catch(err => {
      console.log(err);
   })