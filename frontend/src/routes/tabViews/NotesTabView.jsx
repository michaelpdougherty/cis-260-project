import { useState } from 'react';
import {
  ButtonBlue,
  NotesTabViewStyle,
  NoteTypeSelect,
  NoteFormLabel as Label,
  NoteHalfLeft,
  NoteHalfRight,
  NoteFormDiv,
  NotesContainerHeader,
} from '../../styles';
import { Formik } from 'formik';
import GenericNoteForm from './GenericNoteForm';
import NoteSummary from './NoteSummary';

/* todo create note provider class */
import {
  dailyNoteSchema,
  initialEvaluationOTSchema,
  freeTextSchema,
} from './noteSchema';

const NotesTabView = ({ notes, mrn }) => {
  const [formType, setFormType] = useState('');
  const initialValues = {};

  /* todo submit notes to server */
  const handleNoteSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify({
        mrn: mrn,
        noteType: formType,
        values,
        exampleApiRequest: {
          mrn: mrn,
          noteType: formType,
          summary: values.summary,
          author: null,
          'formData': values,
        },
        actuallySubmitted: false,
      }, null, 2));
      setSubmitting(false);
    }, 500);
  }
  const formattedDate = new Date().toLocaleString('en-US');

  /* magic function that should be in its own class */
  const getCurrentForm = isSubmitting => {
    const getNoteSchema = () => ({
      dailyNoteOT: dailyNoteSchema,
      initialEvalOT: initialEvaluationOTSchema,
      freeText: freeTextSchema,
    }[formType] ?? freeTextSchema);
    return <GenericNoteForm noteSchema={getNoteSchema()} isSubmitting={isSubmitting} />
  }

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
        <NoteFormDiv>
          {/* todo fix initialvalues on form change */}
          <Formik initialValues={initialValues} onSubmit={handleNoteSubmit}>
            {({ isSubmitting }) => getCurrentForm(isSubmitting)}
          </Formik>
        </NoteFormDiv>
      </NoteHalfRight>
    </NotesTabViewStyle>
  );
};
export default NotesTabView;