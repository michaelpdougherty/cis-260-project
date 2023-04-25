import { Table } from "../../styles";

const LabResultsTabView = () => {//labResults }) => {
  const labResults = [
  {      labTest: 'Hemoglobin (g/dl)',      date1: '12.02',      flag1: '',      date2: '10',      flag2: 'Low',      refRange: '12.0-15.0',    },    
  {      labTest: 'Hemotocrit (%)',      date1: '36.9',      flag1: '',      date2: '31.2',      flag2: 'Low',      refRange: '36-41',    },    
  {      labTest: 'RBCs',      date1: '4.43',      flag1: '',      date2: '3.78',      flag2: 'Low',      refRange: '4.0-4.9',    }  ];

  return (
    
    <Table>
      <thead>
        <th>
          Lab Test
        </th>
        <th>
          Date
        </th>
        <th>
          Abnormal Flag
        </th>
        <th>
          Date
        </th>
        <th>
          Abnormal Flag
        </th>
        <th>
          Reference Range
        </th>
      </thead>

      <tbody>
        {labResults.map(entry => (
          <tr>
            <td>
              {entry.labTest}
            </td>
            <td>
              {entry.date1}
            </td>
            <td>
              {entry.flag1}
            </td>
            <td>
              {entry.date2}
            </td>
            <td>
              {entry.flag2}
            </td>
            <td>
              {entry.refRange}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    
      
    
    )

};

export default LabResultsTabView;