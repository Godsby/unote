# Component Structure

## App
* Root component

## Homepage
* Landing
* Narbar

**Auth**
* Auth
* Login
* Signup

## Mainpage
* Sidebar
* Editor
* NoteList

**Sidebar**
* UserProfile
* Search
* AddNote
* NotesLinks
* NoteBooksLinks
* NoteTagsLinks
* TrashLinks

**NoteList**
* AllNotes

**Editor**
* ToolBar
* NoteTitle
* NoteBody
* NotetagFooter


# Routes

| **Path**  | **Component** |
| ------------- | ------------- |
| '/'  | 'Homepage'  |
| '/auth'  | 'AuthContainer'  |
| '/auth/signup'  | 'Signup'  |
| '/auth/login'  | 'Login'  |
| '/notes'  | 'NotesList'  |
| '/notesbooks'  | 'NoteBooksList'  |
| '/notetags'  | 'NoteTagsList'  |
| '/notes/:note_id'  | 'EditorContainer'  |
