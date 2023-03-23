import { useEffect, useState } from 'react';
import { getAgeFromDOB, setTitle } from '../util';
import {
    StatusBoardContainer as Container,
    StatusBoardInnerContainer as Inner,
    StatusBoardTitle
} from '../styles';
import JsonTable from '../JsonTable';

const Patients = () => {
  setTitle('Patients');
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("/patients")
      .then(res => res.json())
      .then(jsonData => setPatients(jsonData.map(data => ({
        'Image': data.image,
        'Patient Name': `${data.firstName} ${data.lastName}`,
        'MRN': data.mrn,
        'Patient Age': getAgeFromDOB(data.dob),
        'Diagnosis': data.diagnosis,
        'Gender': data.gender,
      }))))
      .finally(() => setIsLoading(false));
  }, []);
  const navigate = id => {
    window.location = `/patient/${id}`;
  }
  return (
    <Container>
      <Inner>
        <StatusBoardTitle>Status Board</StatusBoardTitle>
        <JsonTable
          jsonData={patients}
          isLoading={isLoading}
          onClick={data => navigate(data.MRN)}
          style={{
            width: '90vw',
          }}
        />
      </Inner>
    </Container>
  );
};

export default Patients;