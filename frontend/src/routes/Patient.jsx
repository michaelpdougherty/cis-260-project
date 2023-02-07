import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JsonTable from '../JsonTable';
import { getAgeFromDOB, setTitle } from '../util';
import LoadingTable from '../LoadingTable';
import { TableLabel } from '../styles';

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
        <TableLabel>Patient</TableLabel>
        <JsonTable jsonData={[{
          MRN: jsonData.patient.ID,
          FULL_NAME: `${jsonData.patient.FirstName} ${jsonData.patient.LastName}`,
          DOB: jsonData.patient.DOB,
          AGE: `${getAgeFromDOB(jsonData.patient.DOB)} years`,
          Location: jsonData.patient.LOCATION,
        }]} />
      </div>
      <JsonTable title="Alerts" jsonData={[jsonData.alerts]} />
      <JsonTable title="Encounters" jsonData={[jsonData.encounters]} />
      <JsonTable title="Patient Header" jsonData={[jsonData.patientHeader]} />
      <JsonTable title="Patient Info" jsonData={[jsonData.patientInfo]} />
      <JsonTable title="Patient Prevention" jsonData={[jsonData.patientPrevention]} />
      <JsonTable title="Patient Problems" jsonData={[jsonData.patientProblems]} />
    </div>
  );
};
export default Patient;