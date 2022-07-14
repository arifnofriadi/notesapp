import React from "react";
import archiveLogo from '../styles/img/archieve.png';

function ArchiveButton({id, onArchive}) {
    return  <button title="arsipkan catatan" onClick={() => {onArchive(id)}}>
                <img src={archiveLogo} alt="Archive"/>
            </button>
}

export default ArchiveButton;