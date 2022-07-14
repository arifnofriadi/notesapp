import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function ActionButton({ id, onDelete, onArchive }) {

    return (
        <div className="action-button flex">
            <span>Aksi</span>
            <ArchiveButton id={id} onArchive={onArchive} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );

   
}

export default ActionButton;