import JsonTable from '../../JsonTable';

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';

const NotesTabView = ({ notes }) => {
    const [notesList, setNotesList] = useState([]);
    const submitHandler = values => {
        fetch('/api/notes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
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
        'title',
        'author',
        'precautions',
        'subjective',
        'painLevel',
        'painQuality',
        'bloodPressure',
        'heartRate',
        'spO2',
    ]
    const initialValues = Object.fromEntries(keys.map(key => [key, '']));
  return (
  <div style={{ display: 'flex' }}>
    <div>{notesList.length ? notesList.map(note => <NoteObject note={note} />) : 'No notes.'}</div>
      <Formik
          initialValues={initialValues}
          onSubmit={submitHandler}
      >
        <Form>
            {keys.map(key => <><Field name={key} placeholder={key} /><br/></>)}
            <input type="submit"/>
        </Form>
      </Formik>
  </div>
  );
};

export default NotesTabView;