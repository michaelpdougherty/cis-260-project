import { useEffect, useState } from 'react';
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

const NotesTabView = ({ notes, setNotes, mrn, userId }) => {
  const [formType, setFormType] = useState('');
  const [viewedNoteId, setViewedNoteId] = useState('');
  const [viewedNote, setViewedNote] = useState('');

  useEffect(() => {
    if (viewedNoteId !== '') {
      setViewedNote(notes.find(note => note.id === viewedNoteId));
    } else {
      setViewedNote('');
    }
  }, [viewedNoteId, notes]);

  useEffect(() => {
    console.log("Viewing note:");
    console.log(viewedNote);
    if (viewedNote?.draft) {
      setFormType(viewedNote.type);
    }
  }, [viewedNote])

  const handleNoteSubmit = (values, { setSubmitting }) => {
    const reqBody = {
      mrn: Number.parseInt(mrn),
      userId,
      type: formType,
      date: new Date(values.date).toISOString(),
      summary: values.summary,
      author: values.author,
      jsonData: values,
    };
    fetch('/api/notes', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    }).then(res => res.json())
    .then(json => {
      setSubmitting(false);
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

  const handleNoteClick = id => {
    setViewedNoteId(id);
    setFormType('');
  }

  const handleNewNoteClick = () => {
    setViewedNoteId('');
    setFormType('');
  }

  const getRightView = () => {
    if (!viewedNote) {
      return (
        <>
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
        </>
      );
    } else if (viewedNote.signed) {
      return <p>This is a signed note.<br/>{JSON.stringify(viewedNote, undefined, 4)}</p>;
    } else {
      // this is a draft note
      return (
        <>
          <h1>WE DO NOT SUPPORT EDITING NOTES. THIS WILL BE A NEW NOTE.</h1>
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
        </>
      );
    }
  }

  return (
    <NotesTabViewStyle>
      <NoteHalfLeft>
        <NotesContainerHeader>All Notes <ButtonBlue onClick={handleNewNoteClick} id='new-note'>New Note</ButtonBlue></NotesContainerHeader>
        <hr/>
        {notes.length > 0 ? notes.map(note => <NoteSummary key={note.id + note.mrn} handleClick={handleNoteClick} {...note} />) : 'No notes.'}
      </NoteHalfLeft>
      <NoteHalfRight>
        {getRightView()}
      </NoteHalfRight>
    </NotesTabViewStyle>
  );
};

export default NotesTabView;