import { useState } from 'react';
import GenericNoteForm from './GenericNoteForm';
import NoteSummary from './NoteSummary';
import { getNoteSchemaForFormType, getInitialValuesForFormType } from './noteSchema';
import {
  ButtonBlue,
  NotesTabViewStyle,
  NoteTypeSelect,
  NoteHalfLeft,
  NoteHalfRight,
  NoteFormDiv,
  NotesContainerHeader,
} from '../../styles';
import { getUser } from '../../util';

const NotesTabView = ({ notes, setNotes, mrn }) => {
  const [formType, setFormType] = useState('');

  /* todo actually submit notes to server */
  const handleNoteSubmit = (values, { setSubmitting }) => {
    const { id: userId } = getUser();
    const reqBody = {
      mrn: Number.parseInt(mrn),
      userId,
      type: formType,
      date: new Date(values.date).toISOString(),
      summary: values.summary,
      author: values.author,
      jsonData: values,
    };
    console.log(reqBody);
    fetch('/api/notes', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    }).then(res => res.json())
    .then(json => {
      setSubmitting(false);
      console.log(json);
      if (json.success) {
        setNotes([...notes, json.note]);
      }
    });
  }

  const getCurrentForm = () => {
    const noteSchemaResult = getNoteSchemaForFormType(formType);
    if (!noteSchemaResult) return null;
    const initialValues = getInitialValuesForFormType(formType);
    return <GenericNoteForm initialValues={initialValues} handleSubmit={handleNoteSubmit} noteSchema={noteSchemaResult} />;
  };

  return (
    <NotesTabViewStyle>
      <NoteHalfLeft>
        <NotesContainerHeader>All Notes <ButtonBlue id='new-note'>New Note</ButtonBlue></NotesContainerHeader>
        <hr/>
        {notes.length > 0 ? notes.map(note => <NoteSummary key={note.id} {...note} />) : 'No notes.'}
      </NoteHalfLeft>
      <NoteHalfRight>
        <NoteTypeSelect value={formType} onChange={e => setFormType(e.target.value)}>
          <option value='' disabled>Please select your note style</option>
          <option value='freeText'>Free text</option>
          <option value='dailyNoteOT'>Daily Note: Occupational Therapy</option>
          <option value='initialEvalOT'>Initial Evaluation: Occupational Therapy</option>
        </NoteTypeSelect>
        {formType !== '' && (
          <NoteFormDiv>
            {getCurrentForm()}
          </NoteFormDiv>
        )}
      </NoteHalfRight>
    </NotesTabViewStyle>
  );
};

export default NotesTabView;