import React from "react";
import DeleteButton from "./DeleteButton";

function ActionButton({ id, onDelete }) {

    return (
        <div className="action-button flex">
            <span>Aksi</span>
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );

   
}

export default ActionButton;