import JsonTable from '../../JsonTable';

const NotesTabView = ({ notes }) => {
  return (
    <JsonTable jsonData={[notes]} />
  );
};

export default NotesTabView;