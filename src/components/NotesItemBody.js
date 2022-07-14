import React from 'react';
import moment from 'moment';

function  NotesItemBody({ title, body, createdAt }) {
    return (
        <div>
            <h3 className='underline'>{title}</h3>
                <small>{moment(createdAt).format('llll')}</small>
            <p>{body}</p>
        </div>
    );
}

export default NotesItemBody;