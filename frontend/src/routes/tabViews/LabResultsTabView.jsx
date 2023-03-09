import JsonTable from "../../JsonTable";

const LabResultsTabView = ({ labs }) => {
  return (
    <JsonTable jsonData={[labs]} />
  );
};

export default LabResultsTabView;