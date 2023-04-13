import { useEffect, useState } from 'react';
import { NoteStyle, NotesTabViewStyle } from '../../styles';
import { Formik, Form } from 'formik';
import GenericNoteForm from './GenericNoteForm';

const dailyNoteSchema = {
  header: 'Daily Note: Occupational Therapy',
  fieldSets: [
    {
      legend: 'Occupational Therapy',
      fields: [
        {
          name: 'precautions-textarea',
          header: 'Precautions (textarea)',
          type: 'textarea',
        },
        {
          name: 'precautions',
          header: 'Precautions',
        },
        {
          name: 'subjective',
          header: 'Subjective',
        },
        {
          name: 'pain-level',
          header: 'Pain Level',
          type: 'select',
          options: {
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10,
          }
        },
        {
          name: 'pain-quality',
          header: 'Pain Quality',
          type: 'select',
          options: {
            dull: 'dull',
            sharp: 'sharp',
            aching: 'aching',
            radiating: 'radiating',
            burning: 'burning',
            cramping: 'cramping',
            shooting: 'shooting',
            stabbing: 'stabbing',
            throbbing: 'throbbing',
          }
        },
      ]
    },
    {
      legend: 'Vitals',
      fields: [
        {
          header: 'Blood Pressure',
          name: 'bloodPressure',
          type: 'number',
        },
        {
          header: 'Heart Rate',
          name: 'heartRate',
          type: 'number',
        },
        {
          header: 'SpO2',
          name: 'spO2',
          pattern: /\d{1,3}%/g,
        }
      ]
    }
  ]
};

const initialEvaluationOTSchema = {
  header: 'Initial Evaluation: Occupational Therapy',
  fieldSets: [
    {
      legend: 'Initial Evaluation Occupational Therapy',
      fields: [
        {
          header: 'Precautions',
          name: 'precautions',
        },
        {
          header: 'Reason for Referral',
          name: 'reasonForReferral',
        },
        {
          header: 'Prior Medical History',
          name: 'reasonForReferral',
        },
      ]
    },
    {
      legend: 'PLOF',
      fields: [
        {
          header: 'Equipment used PTA',
          name: 'equipmentUsedPTA',
          type: 'select',
          options: {
            includingCommode: 'Including Commode',
            grabBars: 'Grab Bars',
            tubTransferBench: 'Tub Transfer Bench',
            showerChair: 'Shower Chair',
            showerStools: 'Shower Stool',
            reacher: 'Reacher',
            sockAid: 'Sock Aid',
            rollingWater: 'Rolling Water',
            rollator: 'Rollator',
            sc: 'SC',
            lbqc: 'LBQC',
            nbqc: 'NBQC',
            hemiWalker: 'Hemi Walker',
            liftEquipment: 'Lift Equipment',
            other: 'Other',
          }
        },
        {
          header: 'Lives with',
          name: 'livesWith',
        },
        {
          header: 'Available Social Support',
          name: 'availableSocialSupport',
        },
        {
          header: 'Home Environment',
          name: 'homeEnvironment',
        },
        {
          header: 'Subjective',
          name: 'subjective',
        }
      ]
    }
  ]
};

const Note = ({ date, time, caretaker, signed }) => {
  return (
    <NoteStyle>
      <div id='container-1-inner'>
        <p id='caretaker'>{caretaker}</p>
        <p id='display'><b>Date of Service: </b>{date} <br></br> <b>Time: </b>{time} <br></br> <b>{signed ? 'Signed' : 'Draft'}</b></p>
        <hr/>
      </div>
    </NoteStyle>
  );
};

const NotesTabView = ({ notes, mrn }) => {
  const [formType, setFormType] = useState('');
  /*
    { id: 1, date: '01/01/2022', time: '01:40pm', content: 'Patient in critical condition', caretaker: 'RN.Lopez', signed: true },
    { id: 2, date: '02/15/2022', time: '12:00am', content: 'Patient had allergic reaction to medication', caretaker: 'Dr.Syad', signed: true },
    { id: 3, date: '03/10/2022', time: '04:06am', content: 'Patient experienced high blood pressure', caretaker: 'NP.Toshiba', signed: true },
    { id: 4, date: '01/10/2023', time: '06:06am', content: 'Patient experienced high glucose', caretaker: 'MD.Dell', signed: false },
  ];
  */
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('en-US');

  const getCurrentForm = isSubmitting => {
    switch (formType) {
      case '/patient/1/daily-note-ot':
        return <GenericNoteForm noteSchema={dailyNoteSchema} isSubmitting={isSubmitting} />;
      case '/patient/1/inital-eval-ot':
        return <GenericNoteForm noteSchema={initialEvaluationOTSchema} isSubmitting={isSubmitting} />;
      default:
        return <GenericNoteForm noteSchema={initialEvaluationOTSchema} isSubmitting={isSubmitting} />;
    }
  }

  return (
    <NotesTabViewStyle>
      <div className='container-1'>
        <div id='container-1-header'>All Notes <button id='new-note'>New Note</button></div>
        {notes.length > 0 ? notes.map(note => <Note key={note.id} {...note} />) : 'No notes.'}
      </div>
      <div className="container-2">
        <label htmlFor="current-date">Date: {formattedDate}</label>
        <p id="current-date"></p>
        <select value={formType} name="note-style" id="note-style" onChange={e => setFormType(e.target.value)}>
          <option value="" disabled>Please select your note style</option>
          <option value="/patient/1/daily-note-ot">Daily Note: Occupational Therapy</option>
          <option value="/patient/1/initial-eval-ot">Initial Evaluation: Occupational Therapy</option>
        </select>
        <div className='container-2-inner'>
          <Formik initialValues={{ content: '' }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
          >
            {({ isSubmitting }) => 
              getCurrentForm(isSubmitting)
            }
          </Formik>
        </div>
      </div>
    </NotesTabViewStyle>
  );
};
export default NotesTabView;