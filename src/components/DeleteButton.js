import React from 'react';
import deleteLogo from '../styles/img/delete.png';

function DeleteButton({ id, onDelete }) {

  return <button className='contact-item__delete' onClick={() => onDelete(id)} >
            <img src={deleteLogo} alt="Delete" />
         </button>
}

export default DeleteButton;