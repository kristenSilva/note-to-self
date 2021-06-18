import React, { useState, useEffect }from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import Note from './Note';

//setting cookie key
const cookie_key = 'NOTES';

const App = () => {
  const [ text, setText ] = useState('');
  const [ notes, setNotes ] = useState([]);

  useEffect(() => {
    setNotes(read_cookie(cookie_key));
  }, []);

  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (e) => {
    setNotes(prevNotes => [...prevNotes, text]);
    //console.log(notes);
    //storing notes to cookie
    bake_cookie(cookie_key, [...notes, text]);
    setText('');
    e.preventDefault();
  }

  const handleClear = (e) => {
    delete_cookie(cookie_key);
    setNotes([]);
  }

  const noteList = notes.map((note, index )=> (
    <Note key={index} data={note}/>
  ));

  return (
    <div>
      <h2>Note to Self</h2>
      <Form inline onSubmit={handleSubmit}>
        <FormControl onChange={handleChange} value={text}/>
        {' '}
        <br/>
        <Button>Submit</Button>
      </Form>
      {noteList}
      <hr/>
      <Button onClick={handleClear}>Clear Notes</Button>
    </div>
  )
}

export default App;