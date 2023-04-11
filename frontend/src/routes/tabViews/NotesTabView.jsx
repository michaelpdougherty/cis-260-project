import JsonTable from '../../JsonTable';

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { NotesContainer } from '../../styles';

const NotesTabView = ({ notes }) => {
    const [notesList, setNotesList] = useState([]);
    const submitHandler = values => {
        fetch('/api/notes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...values, jsonData: values }),
        })
            .then(res => res.json())
            .then(body => {
                console.log(body);
                setNotesList(original => [...original, body]);
            })
            .catch(err => {
                console.log("Failed.");
            });
    }
    const NoteObject = ({ note }) => {
        return (
            <div>
                <pre style={{
                    textAlign: 'left',
                    marginLeft: 20,
                }}>{JSON.stringify(note, undefined, 4)}</pre>
            </div>
        );
    }
    const keys = [
        'mrn',
        'date',
        'author',
        'summary',
    ]
    const formKeys = [
        'summary',
    ]
    const initialValues = Object.fromEntries(keys.map(key => [key, '']));
  return (
  <NotesContainer>
    <div>{notesList.length ? notesList.map(note => <NoteObject note={note} />) : 'No notes.'}</div>
    <div>
      <Formik
          initialValues={initialValues}
          onSubmit={submitHandler}
      >
        <Form>
            {formKeys.map(key => <div key={key}><Field name={key} placeholder={key} /><br/></div>)}
            <input type="submit"/>
        </Form>
      </Formik>
    </div>
  </NotesContainer>
  );
};

export default NotesTabView;