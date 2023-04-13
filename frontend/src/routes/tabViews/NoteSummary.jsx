import { NoteStyle } from '../../styles';

const NoteSummary = ({ date, time, caretaker, signed }) => {
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
export default NoteSummary;
