import { useState } from 'react';
import { Formik } from 'formik';

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

const NotesTabView = ({ notes, mrn }) => {
  const [formType, setFormType] = useState('');

  /* todo actually submit notes to server */
  const handleNoteSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify({
        mrn: Number.parseInt(mrn),
        userId: null,
        formType,
        values,
      }, null, 2));
      setSubmitting(false);
    }, 500);
  }

  // This still doesn't work for some reason.
  const getCurrentForm = () => {
    const noteSchemaResult = getNoteSchemaForFormType(formType);
    if (!noteSchemaResult) return null;
    const initialValues = getInitialValuesForFormType(formType)
    console.log('got initial values:');
    console.log(initialValues);
    return (
      <Formik initialValues={initialValues} onSubmit={handleNoteSubmit}>
        {({ isSubmitting }) => (
          <GenericNoteForm noteSchema={noteSchemaResult} isSubmitting={isSubmitting} />
        )}
      </Formik>
    );
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