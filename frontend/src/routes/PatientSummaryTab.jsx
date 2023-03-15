import React from 'react';


const PatientSummaryTab = ({ patient }) => {
  return (
    <div>
      <h2>Patient Summary</h2>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{patient.name}</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>{patient.age}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{patient.gender}</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>{patient.address}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{patient.phone}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{patient.email}</td>
          </tr>
          <tr>
            <td>Last visit:</td>
            <td>{patient.lastVisit}</td>
          </tr>
          <tr>
            <td>Next appointment:</td>
            <td>{patient.nextAppointment}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PatientSummaryTab;






