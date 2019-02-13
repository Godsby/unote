## Tables and Columns

- **users**
   - `user_id`: Integer, primary key
   - `email`: String
   - `passcode`: String
- **notes**
   - `note_id`: Integer, primary key
   - `title`: String
   - `body`: Text
   - `user_id`: Integer, foreign key referencing `user_id` column in users table
   - `noteBook_id`: Integer, foreign key referencing `noteBook_id` column in noteBooks table
   - `noteTag_id`: Integer, foreign key referencing `noteTag_id` column in noteTags table
- **noteBooks**
   - `noteBook_id`: Integer, primary key
   - `bookName`: String
   - `user_id`: Integer, foreign key referencing `user_id` column in users table
- **noteTags**
   - `id`: Integer, primary key
   - `tagName`: String

## Seed Data

Generate multiple fake data useing faker.js

