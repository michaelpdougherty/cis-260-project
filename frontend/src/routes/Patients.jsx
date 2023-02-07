import { useEffect, useState } from 'react';
import { setTitle } from '../util';
import JsonTable from '../JsonTable';

const getAgeFromDOB = DOB => {
  const millisecondsInAYear = 1000 * 60 * 60 * 24 * 365
  return (Math.abs(new Date(DOB) - new Date()) / millisecondsInAYear).toFixed(2);
};

const Patients = () => {
  setTitle('Patients');
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("/patients")
      .then((res) => res.json())
      .then((jsonData) => setPatients(jsonData.map(data => ({
        MRN: data.ID,
        Name: `${data.FirstName} ${data.LastName}`,
        DOB: new Date(data.DOB).toLocaleDateString(),
        Age: `${getAgeFromDOB(data.DOB)} years`,
        Location: data.LOCATION
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
        onClick={data => navigate(data.MRN)}
      />
    </div>
  );
};

export default Patients;