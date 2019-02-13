# Component Structure

## App
* Root component

## Homepage
* AuthNavBar
* Logo

**AuthFormContainer**
* AuthForm(Login or Signup)
* AuthNavBar

## Mainpage
* Sidebar
* NoteEditor

**SidebarContainer**
* Search Bar
* NotesList
* NoteBooksList
* NoteTagsList

**NoteeditorContainer**
* Tool Bar
* Note Title
* Note Body
* Notetag Footer


# Routes

| **Path**  | **Component** |
| ------------- | ------------- |
| '/'  | 'Homepage'  |
| '/sign-up'  | 'AuthFormContainer'  |
| '/log-in'  | 'AuthFormContainer'  |
| '/notes'  | 'NotesList'  |
| '/notesbooks'  | 'NoteBooksList'  |
| '/notetags'  | 'NoteTagsList'  |
| '/notes/:note_id'  | 'NoteeditorContainer'  |
