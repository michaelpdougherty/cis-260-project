import { useEffect, useState } from 'react';
import { setTitle } from '../util';
import JsonTable from '../JsonTable';
import LoadingTable from '../LoadingTable';

const Patients = () => {
  setTitle('Patients');
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("/patients")
      .then((res) => res.json())
      .then((jsonData) => setPatients(jsonData.map(data => ({
        'MR#': data.ID,
        'Name': `${data.FirstName} ${data.LastName}`,
        'DOB': data.DOB
      }))))
      .finally(() => setIsLoading(false));
  });
  const navigate = id => {
    window.location = `/patient/${id}`;
  }
  return (
    <div>
      <h2>Patients</h2>
      <JsonTable
        jsonData={patients}
        isLoading={isLoading}
        onClick={data => navigate(data['MR#'])}
      />
    </div>
  );
};

export default Patients;