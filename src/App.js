import React from 'react';
import NotesHeader from './components/NotesHeader';
import NotesFooter from './components/NotesFooter';
import NotesList from './components/NotesList';
import { getData } from './utils/data';
import NotesInput from './components/NotesInput';
import Swal from 'sweetalert2';
import autoBind from 'auto-bind';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
    }
  
    autoBind(this);
    // this.onDeleteHandler = this.onDeleteHandler.bind(this);
    // this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }
  
  onDeleteHandler(id) {
    Swal.fire({
      title: "Kamu yakin ingin menghapus catatan?",
      showCancelButton: true,
      confirmButtonText: "Hapus",
    }).then((result) => {
      if(result.isConfirmed) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
        Swal.fire("Catatan dihapus", "", "success");
      } 
    });
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

  render () {
    return (
      <div className="App">
        <NotesHeader />
        <div className="subApp">
          <h1>Buat Catatan</h1>
          <NotesInput addNote={this.onAddNoteHandler}/>
          <h1>Daftar Catatan</h1>
          <div className="cards">
            <NotesList notes={this.state.notes}  onDelete={this.onDeleteHandler} />
          </div>
        </div>
        <NotesFooter />
      </div>
    );
  }
  
}

export default App;
