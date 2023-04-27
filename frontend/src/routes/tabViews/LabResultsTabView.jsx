import { Table } from "../../styles";

const LabResultsTabView = ({ labs }) => {
  const labTypes = {
    hemoglobin: {
      header: "Hemoglobin (g/dl)",
      refRange: [12.0, 15.0],
    },
    hemotocrit: {
      header: "Hemotocrit (%)",
      refRange: [36, 41],
    },
    rbc: {
      header: "RBCs",
      refRange: [4.0, 4.9],
    },
  };

  const NoData = () => {
    return (
      <tr>
        <td colSpan={5}>No data.</td>
      </tr>
    );
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>
            Lab Test
          </th>
          <th>
            Value
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
        </tr>
      </thead>
      <tbody>
        {labs.length === 0 ? (<NoData />) : labs.map(entry => (
          <tr key={entry.id}>
            <td>
              {labTypes[entry.lab_test].header ?? 'Error'}
            </td>
            <td>
              {(entry.value).toFixed(2)}
            </td>
            <td>
              {entry.date ? new Date(entry.date).toLocaleString() : new Date().toLocaleString()}
            </td>
            <td>
              {entry.abnormal_flag}
            </td>
            <td>
              {(labTypes[entry.lab_test].refRange[0]).toFixed(2)}-{(labTypes[entry.lab_test].refRange[1]).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    
      
    
    )

};

export default LabResultsTabView;