# API Endpoints

## HTML API

### Root
* `GET /`
  * Homepage, loads React web app with user login or signup

## JSON API

### Users
* `GET /users`
  * Get all users
* `POST /api/users`
  * Creates new user

### Notes
* `GET /notes`
  * Get all notes
* `POST /notes`
  * Creates new note
* `PATCH /notes/:id`
  * Update a note
* `PATCH /notes/:id`
  * Add or remove a note to/from a notebook.
* `DELETE /notes/:id`
  * Deletes a note

### NoteBooks
* `GET /notebooks`
  * Get all notebooks
* `POST /notebooks`
  * Creates new notebook
* `PATCH /notebooks/:id`
  * Update a notebook
* `DELETE /notebooks/:id`
  * Delete a notebook
* `GET /notebooks/:id/notes`
  * Get all notes for a notebook

### NoteTags
* `GET /noteTags`
  * Get all noteTags
* `POST /noteTags`
  * Create new notetag
* `DELETE /noteTags/:id`
  * Delete a notetag
* `GET /noteTags/:id/notes`
  * Get all notes for a notetag

