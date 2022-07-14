import React from "react";
import NotesItemBody from "./NotesItemBody";
import ActionButton from "./ActionButton";

function NotesItem({ title, body, createdAt ,id, onDelete }) {
    return (
        <>
            <div className="note-item">
                <div className="note-body">
                    <NotesItemBody className="content" title={title} body={body} createdAt={createdAt} />
                </div>
               
                <div className="note-footer">
                    <ActionButton id={id} onDelete={onDelete} />
                </div>
            </div>
           
        </>

    );
}

export default NotesItem;