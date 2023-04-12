import { useEffect, useState } from 'react';
import { getAgeFromDOB, setTitle } from '../util';
import {
    StatusBoardContainer as Container,
    StatusBoardInnerContainer as Inner,
    StatusBoardTitle
} from '../styles';
import LoadingTable from '../LoadingTable';
import { FlexBox, Table, TableLabel } from '../styles';

const ProfileImage = ({ src }) => {
    return <img src={src} height={50} width={50} style={{ borderRadius: 50, objectFit: 'cover', marginRight: 20, }}/>;
};

const JsonTable = ({
  jsonData,
  isLoading,
  onClick = false,
  style = {},
}) => {
  if (isLoading) return <LoadingTable />;
  return (
    <div>
      <FlexBox>
        {jsonData[0] ? (
          <Table clickable={!!onClick} style={style}>
            <thead>
              <tr>
                {Object.keys(jsonData[0] ?? jsonData).map(th => <th key={th}>{th}</th>)}
              </tr>
            </thead>
            <tbody>
              {jsonData.map((data, i) => (
                <tr key={i / 1000} onClick={() => onClick(data)}>
                  {Object.entries(data).map(([key, td], i) => (
                    <td key={key + i}>{td}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <Table style={{ textAlign: 'center' }}>
            <tbody>
              <tr><td>No data.</td></tr>
            </tbody>
          </Table>
        )}
      </FlexBox>
    </div>
  );
}

const Patients = () => {
  setTitle('Patients');
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("/patients")
      .then(res => res.json())
      .then(jsonData => setPatients(jsonData.map(data => ({
        'Patient Name': <div style={{
            display: 'flex',
            alignItems: 'center',
        }}>
        <ProfileImage src={data.image}/>{data.firstName} {data.lastName}</div>,
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