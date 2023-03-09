import JsonTable from "../../JsonTable";

const ImagingTabView = ({ imaging }) => {
  return (
    <JsonTable jsonData={[imaging]} />
  );
};

export default ImagingTabView;