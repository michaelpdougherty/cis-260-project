import { Table } from "../../styles";

const VitalsTabView = () => {
  const vitalEntries = [    {      "Time": '10:23',      "Date": '12/09/22',      "Temperature": '98.5',      "Pulse": '86',      "Respiratory": '16',      "Blood Pressure": '121/64',      "Pulse Oxygen": '90%',      "Pain": '8',    },    
  {      "Time": '07:50',      "Date": '12/11/22',      "Temperature": '99.0',      "Pulse": '82',      "Respiratory": '18',      "Blood Pressure": '126/68',      "Pulse Oxygen": '94%',      "Pain": '5',    },    
  {      "Time": '15:21',      "Date": '12/13/22',      "Temperature": '97.9',      "Pulse": '90',      "Respiratory": '20',      "Blood Pressure": '128/70',      "Pulse Oxygen": '98%',      "Pain": '3',    }  ];

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
        {vitalEntries.map(entry => (
          <tr>
            <td>
              {entry["Date"]}
            </td>
            <td>
              {entry["Time"]}
            </td>
            <td>
              {entry["Temperature"]}
            </td>
            <td>
              {entry["Pulse"]}
            </td>
            <td>
              {entry["Respiratory"]}
            </td>
            <td>
              {entry["Blood Pressure"]}
            </td>
            <td>
              {entry["Pulse Oxygen"]}
            </td>
            <td>
              {entry["Pain"]}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default VitalsTabView;
