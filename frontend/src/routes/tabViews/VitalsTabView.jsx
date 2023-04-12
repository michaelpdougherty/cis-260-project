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
        <tr>
          <th>
            Date
          </th>
          <th>
            Time
          </th>
        </tr>
      </thead>
      <tbody>
      {vitalEntries.map(entry => (
        <tr key={entry.date + entry.time}>
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