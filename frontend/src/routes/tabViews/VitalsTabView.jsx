import { Table } from "../../styles";

const VitalsTabView = () => {
  const vitals = [    {      "Time": '10:23',      "Date": '12/09/22',      "Temperature": '98.5',      "Pulse": '86',      "Respiratory": '16',      "Blood Pressure": '121/64',      "Pulse Oxygen": '90%',      "Pain": '8',    },    
  {      "Time": '07:50',      "Date": '12/11/22',      "Temperature": '99.0',      "Pulse": '82',      "Respiratory": '18',      "Blood Pressure": '126/68',      "Pulse Oxygen": '94%',      "Pain": '5',    },    
  {      "Time": '15:21',      "Date": '12/13/22',      "Temperature": '97.9',      "Pulse": '90',      "Respiratory": '20',      "Blood Pressure": '128/70',      "Pulse Oxygen": '98%',      "Pain": '3',    },
  {      "Time": '11:45',      "Date": '01/6/23',       "Temperature": '99.0',      "Pulse": '87',      "Respiratory": '25',      "Blood Pressure":  '139/68',     "Pulse Oxygen":  '95%',     "Pain": '7'     },
  {      "Time": '09:30',      "Date": '01/20/23',       "Temperature": '100.3',      "Pulse": '110',      "Respiratory": '15',      "Blood Pressure":  '130/85',     "Pulse Oxygen":  '90%',     "Pain": '6'  },
  {      "Time": '15:40',      "Date": '02/18/23',       "Temperature": '97.8',      "Pulse": '89',      "Respiratory": '20',      "Blood Pressure":  '126/80',     "Pulse Oxygen":  '97%',     "Pain": '5'     },
  {      "Time": '13:15',      "Date": '02/28/23',       "Temperature": '97.5',      "Pulse": '88',      "Respiratory": '17',      "Blood Pressure":  '120/70',     "Pulse Oxygen":  '98%',     "Pain": '3'     },
  {      "Time": '07:00',      "Date": '03/09/23',       "Temperature": '98.0',      "Pulse": '85',      "Respiratory": '18',      "Blood Pressure":  '130/50',     "Pulse Oxygen":  '99%',     "Pain": '0'     },
  {      "Time": '11:45',      "Date": '03/16/23',       "Temperature": '97.5',      "Pulse": '87',      "Respiratory": '21',      "Blood Pressure":  '140/50',     "Pulse Oxygen":  '93%',     "Pain": '6'     },
  {      "Time": '08:30',      "Date": '03/22/23',       "Temperature": '99.2',      "Pulse": '86',      "Respiratory": '16',      "Blood Pressure":  '120/30',     "Pulse Oxygen":  '94%',     "Pain": '5'     },
  {      "Time": '10:00',      "Date": '03/28/23',       "Temperature": '97.8',      "Pulse": '90',      "Respiratory": '19',      "Blood Pressure":  '139/70',     "Pulse Oxygen":  '94%',     "Pain": '4'     },
  {      "Time": '16:45',      "Date": '04/05/23',       "Temperature": '98.0',      "Pulse": '89',      "Respiratory": '18',      "Blood Pressure":  '128/40',     "Pulse Oxygen":  '90%',     "Pain": '2'     },
  {      "Time": '07:55',      "Date": '04/09/23',       "Temperature": '101',      "Pulse": '105',      "Respiratory": '25',      "Blood Pressure":  '140/80',     "Pulse Oxygen":  '92%',     "Pain": '8'     },
  {      "Time": '08:00',      "Date": '04/10/23',       "Temperature": '99.0',      "Pulse": '90',      "Respiratory": '17',      "Blood Pressure":  '130/68',     "Pulse Oxygen":  '90%',     "Pain": '8'     }, ];

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