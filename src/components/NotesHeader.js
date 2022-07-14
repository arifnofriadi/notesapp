import React from "react";
import logo from '../styles/img/book128.png';

function NotesHeader() {
    return (
        <div className="navbar flex">
            <img src={logo} alt="App Logo" />
            <h1>Buku Catatan.me</h1>
        </div>
    );
}

export default NotesHeader;