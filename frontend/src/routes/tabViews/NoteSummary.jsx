import { NoteSummaryBox, NotePar, Caretaker } from '../../styles';

const NoteSummary = ({ id, handleClick, date, author: caretaker, summary, signed }) => {
  const thisDate = new Date(date);
  return (
    <>
    <NoteSummaryBox onClick={() => handleClick(id)}>
      <Caretaker>{caretaker}</Caretaker>
      <NotePar textAlign='left'><b>Date of Service: </b>{thisDate.toLocaleDateString()}</NotePar>
      <NotePar textAlign='left'><b>Time: </b>{thisDate.toLocaleTimeString()}</NotePar>
      <NotePar textAlign='left'><b>Summary: </b>{summary}</NotePar>
      <NotePar><b>{signed ? 'Signed' : 'Draft'}</b></NotePar>
    </NoteSummaryBox>
    <hr/>
    </>
  );
};
export default NoteSummary;
