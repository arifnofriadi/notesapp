import React from 'react';
import NotesHeader from './components/NotesHeader';
import NotesList from './components/NotesList';
import { getData } from './utils/data';
import NotesInput from './components/NotesInput';
import NotesArchive from './components/NotesArchive';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
    }
  
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }
  
  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body, createdAt, archived }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt,
            archived,
          }
        ]
      }
    });
  }

  onArchiveHandler(id) {
    const data = this.state.notes;
    const newData = data.findIndex(note => note.id === id)
    data[newData].archived = true
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: data
      }
    })
  }

  render () {
    return (
      <div className="App">
        <NotesHeader />
        <div className="subApp">
          <h1>Buat Catatan</h1>
          <NotesInput addNote={this.onAddNoteHandler}/>
          <h1>Daftar Catatan</h1>
          <div className="cards">
            <NotesList notes={this.state.notes}  onDelete={this.onDeleteHandler}/>
          </div>
          <h1>Arsip</h1>
          <div className='cards'>
            <NotesArchive notes={this.state.notes} onArchive={this.onArchiveHandler} />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
