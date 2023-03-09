import JsonTable from '../../JsonTable';

const VitalsTabView = ({ vitals }) => {
  return (
    <JsonTable jsonData={[vitals]} />
  );
};

export default VitalsTabView;