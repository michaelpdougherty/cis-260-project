import { useState } from 'react';
import {
  ButtonBlue,
  NotesTabViewStyle,
  NoteTypeSelect,
  NoteFormLabel as Label,
  NoteHalfContainer,
  NoteFormDiv,
  NotesContainerHeader,
} from '../../styles';
import { Formik } from 'formik';
import GenericNoteForm from './GenericNoteForm';
import NoteSummary from './NoteSummary';

/* todo create note provider class */
import {
  dailyNoteSchema,
  initialEvaluationOTSchema
} from './noteSchema';

const NotesTabView = ({ notes, mrn }) => {
  const [formType, setFormType] = useState('');
  /* todo submit notes to server */
  const handleNoteSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  }
  const formattedDate = new Date().toLocaleString('en-US');

  /* magic function that should be in its own class */
  const getCurrentForm = isSubmitting => {
    const getNoteSchema = () => ({
      dailyNoteOT: dailyNoteSchema,
      initialEvalOT: initialEvaluationOTSchema,
    }[formType] ?? dailyNoteSchema);
    return <GenericNoteForm noteSchema={getNoteSchema()} isSubmitting={isSubmitting} />
  }

  return (
    <NotesTabViewStyle>
      <NoteHalfContainer>
        <NotesContainerHeader>All Notes <ButtonBlue id='new-note'>New Note</ButtonBlue></NotesContainerHeader>
        <hr/>
        {notes.length > 0 ? notes.map(note => <NoteSummary key={note.id} {...note} />) : 'No notes.'}
      </NoteHalfContainer>
      <NoteHalfContainer>
        <Label htmlFor="current-date">Date: {formattedDate}</Label>
        <p id="current-date"></p>
        <NoteTypeSelect value={formType} onChange={e => setFormType(e.target.value)}>
          <option value='' disabled>Please select your note style</option>
          <option value='dailyNoteOT'>Daily Note: Occupational Therapy</option>
          <option value='initialEvalOT'>Initial Evaluation: Occupational Therapy</option>
        </NoteTypeSelect>
        <NoteFormDiv>
          {/* todo fix initialvalues on form change */}
          <Formik initialValues={{ content: '' }} onSubmit={handleNoteSubmit}>
            {({ isSubmitting }) => getCurrentForm(isSubmitting)}
          </Formik>
        </NoteFormDiv>
      </NoteHalfContainer>
    </NotesTabViewStyle>
  );
};
export default NotesTabView;