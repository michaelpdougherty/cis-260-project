// import JsonTable from '../../JsonTable';

const VitalsTabView = ({ vitals }) => {
  // <JsonTable jsonData={[vitals]} />
  const vitalEntries = [
    {
      time: '10:23',
      date: '12/22/22',
    }
  ];
  return (
    <table>
      <thead>
        <th>
          Date
        </th>
        <th>
          Time
        </th>
      </thead>
      <tbody>
      {vitalEntries.map(entry => (
        <tr>
          <td>
            {entry.date}
          </td>
          <td>
            {entry.time}
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default VitalsTabView;