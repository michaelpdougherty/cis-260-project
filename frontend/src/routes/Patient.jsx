import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JsonTable from '../JsonTable';
import { setTitle } from '../util';
import LoadingTable from '../LoadingTable';
import { Label } from '../styles';

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
      <div>
        <Label>Patient</Label>
        <JsonTable jsonData={[jsonData.patient]} />
      </div>
      <div>
        <Label>Alerts</Label>
        <JsonTable jsonData={[jsonData.alerts]} />
      </div>
      <div>
        <Label>Encounters</Label>
        <JsonTable jsonData={[jsonData.encounters]} />
      </div>
      <div>
        <Label>Patient Header</Label>
        <JsonTable jsonData={[jsonData.patientHeader]} />
      </div>
      <div>
        <Label>Patient Info</Label>
        <JsonTable jsonData={[jsonData.patientInfo]} />
      </div>
      <div>
        <Label>Patient Prevention</Label>
        <JsonTable jsonData={[jsonData.patientPrevention]} />
      </div>
      <div>
        <Label>Patient Problems</Label>
        <JsonTable jsonData={[jsonData.patientProblems]} />
      </div>
    </div>
  );
};
export default Patient;