import React from "react";
import NotesItem from "./NotesItem";

function NotesArchive({ notes, onDelete, onArchive }) {
    return (
        <div className="flex m-auto">
            {
                notes.filter((note) => note.archived === true).length > 0 ? (
                    notes.map((note) => <NotesItem key={note.id}
                                                   id={note.id}
                                                   onDelete={onDelete}
                                                   onArchive={onArchive}
                                                   {...note}/>)
                ) : (
                    <p>Tidak ada arsip</p>
                )
            }
        </div>
    );
}

export default NotesArchive;