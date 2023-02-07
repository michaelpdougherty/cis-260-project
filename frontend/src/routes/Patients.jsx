import { useEffect, useState } from "react";
import { Audio } from 'react-loader-spinner';
import { FlexBox, PatientsTable } from '../styles';

const Patients = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch("/patients")
      .then((res) => res.json())
      .then((jsonData) => setPatients(jsonData))
      .finally(() => setIsLoading(false));
  }, []);

  const navigate = id => {
    window.location = `/patient/${id}`;
  }

  return (
    <div>
      <h2>Patients</h2>
      <FlexBox>
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
                  <tr onClick={() => navigate(id)}>
                    <td>{id}</td>
                    <td>{lastName}, {firstName}</td>
                    <td>{dob}</td>
                  </tr>
                )
              )}
          </tbody>
        </PatientsTable>
      </FlexBox>
    </div>
  );
};

export default Patients;

