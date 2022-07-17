import React from 'react';
import Swal from 'sweetalert2';

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            createdAt: new Date().toISOString(),
            archived: false
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState((prevState) => {
          return {
            ...prevState,
            title: event.target.value,
          }
        });
      }

      onBodyChangeEventHandler(event) {
        this.setState((prevState) => {
          return {
            ...prevState,
            body: event.target.value,
          }
        });
      }


      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
      }

    showAlert = () => {
        Swal.fire({
            title: "Sukses",
            text: "Data Disimpan",
            icon: "success",
            confirmButtonText: "OK",
        });
    }

    render() {
      const maxLength = 50;

        return (
            <form className='form-input' onSubmit={this.onSubmitEventHandler}>
                <div className='input-container'>
                    <label className='label'>Judul</label>
                    <input type="text" id='title' className='text-input' autoComplete='off' placeholder='Masukkan judul' value={this.state.title} onChange={this.onTitleChangeEventHandler} maxLength="50" required />
                    <small className='limit-count'>Sisa karakter {maxLength - this.state.title.length}</small>
                </div>
                <div className='input-container'>
                    <label className='label'>Isi</label>
                    <textarea type='text' id='body' className='text-input' placeholder='Masukkan catatan' value={this.state.body} onChange={this.onBodyChangeEventHandler} required ></textarea>
                </div>
                <div className='input-container'>
                    <button className='button-add' type='submit' onClick={this.showAlert}>Simpan</button>
                </div>
            </form>
        )
    }
}

export default NotesInput;