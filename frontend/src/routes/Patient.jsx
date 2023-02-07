import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JsonTable from '../JsonTable';
import { setTitle } from '../util';
import LoadingTable from '../LoadingTable';

const FullPageLoadingSpinner = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '80vh'
    }}>
      <LoadingTable/>
    </div>
  );
}

const Patient = () => {
  setTitle('Patient');
  const { id } = useParams();
  const [jsonData, setJsonData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`/patient/${id}`)
      .then(res => res.json())
      .then(json => setJsonData(json))
      .finally(() => setIsLoading(false));
  }, [id]);
  if (isLoading) return <FullPageLoadingSpinner/>;
  return (
    <div style={{ height: '90vh', overflowY: 'scroll' }}>
      <h2>{jsonData.patient.FirstName} {jsonData.patient.LastName}</h2>
      <label>
        Patient
        <JsonTable jsonData={[jsonData.patient]} />
      </label>
      <label>
        Alerts
        <JsonTable jsonData={[jsonData.alerts]} />
      </label>
      <label>
        Encounter
        <JsonTable jsonData={[jsonData.encounters]} />
      </label>
      <label>
        Patient Header
        <JsonTable jsonData={[jsonData.patientHeader]} />
      </label>
      <label>
        Patient Info 
        <JsonTable jsonData={[jsonData.patientInfo]} />
      </label>
      <label>
        Patient Prevention 
        <JsonTable jsonData={[jsonData.patientPrevention]} />
      </label>
      <label>
        Patient Problems 
        <JsonTable jsonData={[jsonData.patientProblems]} />
      </label>
    </div>
  );
};
export default Patient;