import { Table } from "../../styles";

const VitalsTabView = () => {//vitals }) => {
  const vitals = [
  {      time: '10:23',      date: '12/09/22',      temperature: '98.5',      pulse: '86',      respiratory: '16',      bloodPressure: '121/64',      pulseOxygen: '90%',      pain: '8',    },    
  {      time: '07:50',      date: '12/11/22',      temperature: '99.0',      pulse: '82',      respiratory: '18',      bloodPressure: '126/68',      pulseOxygen: '94%',      pain: '5',    },    
  {      time: '15:21',      date: '12/13/22',      temperature: '97.9',      pulse: '90',      respiratory: '20',      bloodPressure: '128/70',      pulseOxygen: '98%',      pain: '3',    }  ];

  return (
    <Table>
      <thead>
        <th>
          Date
        </th>
        <th>
          Time
        </th>
        <th>
          Temperature
        </th>
        <th>
          Pulse
        </th>
        <th>
          Respiratory
        </th>
        <th>
          Blood Pressure
        </th>
        <th>
          Pulse Oxygen
        </th>
        <th>
          Pain
        </th>
      </thead>
      <tbody>
        {vitals.map(entry => (
          <tr>
            <td>
              {entry.date}
            </td>
            <td>
              {entry.time}
            </td>
            <td>
              {entry.temperature}
            </td>
            <td>
              {entry.pulse}
            </td>
            <td>
              {entry.respiratory}
            </td>
            <td>
              {entry.bloodPressure}
            </td>
            <td>
              {entry.pulseOxygen}
            </td>
            <td>
              {entry.pain}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default VitalsTabView;