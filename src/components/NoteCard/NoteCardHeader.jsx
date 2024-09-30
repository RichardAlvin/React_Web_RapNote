import React from 'react';
import { showFormattedDate } from '../../utils/index';
 
function NoteCardHeader({ title, createdAt }) {
    return (
        <>
            <div className="note-item__title">
                <h4>{title}</h4>
            </div>
            <div className="note-item__date">
                <p>{showFormattedDate(createdAt)}</p>
            </div>
        </>
    );
}
 
export default NoteCardHeader;