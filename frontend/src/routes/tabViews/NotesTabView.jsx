import { useState } from 'react';
import { NotesTabView } from '../../styles';
import { NoteStyle } from '../../styles';
import { Formik, Form, Field } from 'formik';

const DailyNoteOTForm = ({ isSubmitting }) => {
  return (
    <Form className='daily-occupational-therapy'>
      <p id='daily-note-header-p'>Daily Note: Occupational Therapy</p>
      <fieldset>
        <legend>Occupational Therapy</legend>
        <div className='daily-note-occupational-therapy-header'>
        </div>
        <div className='vital-field'>
          <label htmlFor="precautions">Precautions:</label>
          <Field type="text" id="precautions" name="precautions" />
        </div>
        <div className='vital-field'>
          <label htmlFor="subjective">Subjective:</label>
          <Field type="text" id="subjective" name="content" />
        </div>
        <div className='vital-field'>
          <label htmlFor="pain-level">Pain Level:</label>
          <select id='pain-level' name='pain_level'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
        </div>
        <div className='vital-field'>
          <label htmlFor="pain-quality">Pain Quality:</label>
          <select id='pain-quality' name='pain_quality'>
            <option value='dull'>dull</option>
            <option value='sharp'>sharp</option>
            <option value='arching'>arching</option>
            <option value='radiating'>radiating</option>
            <option value='burning'>burning</option>
            <option value='cramping'>cramping</option>
            <option value='shooting'>shooting</option>
            <option value='stabbing'>stabbing</option>
            <option value='throbbing'>throbbing</option>
          </select>
        </div>
      </fieldset>
      <fieldset>
        <legend>Vitals</legend>
        <div className='vital-field'>
          <label htmlFor="blood-pressure">Blood Pressure:</label>
          <input type="number" id="blood-pressure" name="blood-pressure" />
        </div>
        <div className='vital-field'>
          <label htmlFor="heart-rate">Heart Rate:</label>
          <input type="number" id="heart-rate" name="heart-rate" />
        </div>
        <div className='vital-field'>
          <label htmlFor="spO2">SpO2:</label>
          <input type="text" id="spO2" name="spO2" pattern="\d{1,3}%" />
        </div>
      </fieldset>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

const InitialEvaluationOTForm = ({ isSubmitting }) => {
  return (
    <Form className='initial-evaluation-occupational-therapy'>
      <p id='daily-note-header-p'>Initial Evaluation: Occupational Therapy</p>
      <fieldset>
        <legend>Initial Evaluation Occupational Therapy</legend>
        <div className='initial-evaluation-occupational-therapy-header'>
        </div>
        <div className='initial-evaluation'>
          <label htmlFor="precautions">Precautions:</label>
          <Field type="text" id="precautions" name="precautions" />
        </div>
        <div className='initial-evaluation'>
          <label htmlFor="reason-for-retrieval">Reason for Referral:</label>
          <Field type="text" id="reason-for-retrieval" name="content" />
        </div>
        <div className='initial-evaluation'>
          <label htmlFor="prior-medical-history">Prior Medical History:</label>
          <Field type="text" id="prior-medical-history" name="content" />
        </div>
      </fieldset>
      <fieldset>
        <legend>PLOF</legend>
        <div className='initial-evaluation'>
          <label htmlFor="equipment-used-pta">Equipment used PTA:</label>
          <select id="equipment-used-pta" name="equipment-used-pta">
            <option value='including-commode'>Including Commode</option>
            <option value='grab-bars'>Grab Bars</option>
            <option value='tub-transfer-bench'>Tub Transfer Bench</option>
            <option value='shower-chair'>Shower Chair</option>
            <option value='shower-tool'>Shower Stool</option>
            <option value='reacher'>Reacher</option>
            <option value='sock-aid'>Sock Aid</option>
            <option value='rolling-water'>Rolling Water</option>
            <option value='rollator'>Rollator</option>
            <option value='sc'>SC</option>
            <option value='lbqc'>LBQC</option>
            <option value='nbqc'>NBQC</option>
            <option value='hemi-walker'>Hemi Walker</option>
            <option value='lift-equipment'>Lift Equipment</option>
            <option value='other'>Other</option>
          </select>
        </div>
        <div className='initial-evaluation'>
          <label htmlFor="lives-with">Lives with:</label>
          <Field type="text" id="lives-with" name="lives-with" />
        </div>
        <div className='initial-evaluation'>
          <label htmlFor="available-social-support">Available Social Support:</label>
          <Field type="text" id="available-social-support" name="available-social-support" />
        </div>
        <div className='initial-evaluation'>
          <label htmlFor="home-environment">Home Environment:</label>
          <Field type="text" id="home-environment" name="home-environment" />
        </div>
        <div className='initial-evaluation'>
          <label htmlFor="ie-subjective">Subjective:</label>
          <Field type="text" id="ie-subjective" name="ie-subjective" />
        </div>
      </fieldset>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
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

const NotesTab = () => {
  const [formType, setFormType] = useState('');
  const notes = [
    { id: 1, date: '01/01/2022', time: '01:40pm', content: 'Patient in critical condition', caretaker: 'RN.Lopez', signed: true },
    { id: 2, date: '02/15/2022', time: '12:00am', content: 'Patient had allergic reaction to medication', caretaker: 'Dr.Syad', signed: true },
    { id: 3, date: '03/10/2022', time: '04:06am', content: 'Patient experienced high blood pressure', caretaker: 'NP.Toshiba', signed: true },
    { id: 4, date: '01/10/2023', time: '06:06am', content: 'Patient experienced high glucose', caretaker: 'MD.Dell', signed: false },
  ];
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('en-US');

  const getCurrentForm = isSubmitting => {
    switch (formType) {
      case '/patient/1/daily-note-ot':
        return <DailyNoteOTForm isSubmitting={isSubmitting} />;
      case '/patient/1/inital-eval-ot':
        return <InitialEvaluationOTForm isSubmitting={isSubmitting} />;
      default:
        return <InitialEvaluationOTForm isSubmitting={isSubmitting} />;
    }
  }

  return (
    <NotesTabView>
      <div className='container-1'>
        <div id='container-1-header'>All Notes <button id='new-note'>New Note</button></div>
        {notes.map(note => <Note key={note.id} {...note} />)}
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
    </NotesTabView>
  );
};
export default NotesTab;