import React from 'react';

function NotesFooter() {
    return (
        <div className='footbar'>
            <div className='text-center'>
                <p> &copy;
                    <span>{new Date().getFullYear()} </span>
                    <span>BukuCatatan.me </span> All Right Reserved.
                </p>
            </div>
            <div className='text-center author'>
                Designed by
                <a href='https://arifnofriadi.netlify.app'> Arif Nofriadi </a>
            </div>
        </div>
    );
}

export default NotesFooter;