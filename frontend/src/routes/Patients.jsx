import { useEffect, useState } from "react";
import styled from 'styled-components';
import { Audio } from 'react-loader-spinner';

const PatientsTable = styled.table`
  text-align: left;
  min-width: 50vw;
  background: ${p => p.theme.white};
  th:first-child, td:first-child {
    padding-left: 5vw;
  }
  th:last-child, td:last-child {
    padding-rigth: 5vw;
  }
  tr {
    cursor: pointer;
  }
`;

const Patients = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch("/patients")
      .then((res) => res.json())
      .then((jsonData) => setPatients(jsonData))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h2>Patients</h2>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <PatientsTable>
        <thead>
          <tr>
            <th>MR#</th>
            <th>Name</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? <Audio /> :
            patients.map(
              ({
                ID: id,
                FirstName: firstName,
                LastName: lastName,
                DOB: dob,
              }) => (
                <tr>
                  <td>{id}</td>
                  <td>{lastName}, {firstName}</td>
                  <td>{dob}</td>
                </tr>
              )
            )}
        </tbody>
      </PatientsTable>
      </div>
    </div>
  );
};

export default Patients;

