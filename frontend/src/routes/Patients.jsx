import { useEffect, useState } from 'react';
import { getAgeFromDOB, setTitle } from '../util';
import JsonTable from '../JsonTable';

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
        title="Patient List"
        jsonData={patients}
        isLoading={isLoading}
        onClick={data => navigate(data.MRN)}
      />
    </div>
  );
};

export default Patients;