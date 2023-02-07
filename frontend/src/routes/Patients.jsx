import { useEffect, useState } from 'react';
import { setTitle } from '../util';
import JsonTable from '../JsonTable';

const Patients = () => {
  setTitle('Patients');
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch("/patients")
      .then((res) => res.json())
      .then((jsonData) => setPatients(jsonData.map(data => ({
        'MR#': data.ID,
        'Name': `${data.FirstName} ${data.LastName}`,
        'DOB': data.DOB
      }))))
  });
  const navigate = id => {
    window.location = `/patient/${id}`;
  }
  return (
    <div>
      <h2>Patients</h2>
      <JsonTable
        jsonData={patients}
        onClick={data => navigate(data['MR#'])}
      />
    </div>
  );
};

export default Patients;