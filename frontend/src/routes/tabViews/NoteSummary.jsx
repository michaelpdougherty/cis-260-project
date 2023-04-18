import { NotePar, Caretaker } from '../../styles';

const NoteSummary = ({ date, time, caretaker, signed }) => {
  return (
    <div>
      <Caretaker>{caretaker}</Caretaker>
      <NotePar>
        <b>Date of Service: </b>{date}
        <br></br>
        <b>Time: </b>{time}
        <br></br>
        <b>{signed ? 'Signed' : 'Draft'}</b>
      </NotePar>
      <hr/>
    </div>
  );
};
export default NoteSummary;
