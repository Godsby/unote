## Tables and Columns

- **Users**
   - `id`: Integer, primary key
   - `email`: String
   - `password`: String
- **Notes**
   - `id`: Integer, primary key
   - `title`: String
   - `body`: Text
   - `user_id`: Integer, foreign key referencing `id` column in users table
- **Notebooks**
   - `id`: Integer, primary key
   - `name`: String
   - `note_id`: Integer, foreign key referencing `id` column in Notes table
   - `user_id`: Integer, foreign key referencing `id` column in users table
- **NoteTags**
   - `id`: Integer, primary key
   - `name`: String
   - `note_id`: Integer, foreign key referencing `id` column in Notes table
   - `user_id`: Integer, foreign key referencing `id` column in users table

## Seed Data

Generate multiple fake data useing faker.js

