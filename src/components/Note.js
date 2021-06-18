import React from 'react';

const Note = (props) => {

  return(
    <div className="note">
      <p>{props.data}</p>
    </div>
  )
}

export default Note;