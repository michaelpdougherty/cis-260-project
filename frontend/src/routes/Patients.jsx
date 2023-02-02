import { useEffect, useState } from "react";

const BACKEND_HOSTNAME = "http://localhost:5002";

const Patients = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5002/patients")
      .then((res) => res.json())
      .then((jsonData) => setPatients(jsonData))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h2>Patients</h2>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <table>
        <thead>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>DOB</th>
        </thead>
        <tbody>
          {isLoading ||
            patients.map(
              ({
                ID: id,
                FirstName: firstName,
                LastName: lastName,
                DOB: dob,
              }) => (
                <tr>
                  <td>{id}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{dob}</td>
                </tr>
              )
            )}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Patients;

