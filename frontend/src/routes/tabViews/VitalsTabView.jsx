import { Table, ScrollableDiv } from "../../styles";

const VitalsTabView = ({ vitals }) => {
  return (
    <ScrollableDiv>
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
                {new Date(entry.date).toLocaleDateString()}
              </td>
              <td>
                {new Date(entry.date).toLocaleTimeString()}
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
                {entry.blood_pressure}
              </td>
              <td>
                {`${Number.parseFloat(entry.pulse_oxygen * 100).toFixed(2)}%`}
              </td>
              <td>
                {entry.pain}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ScrollableDiv>
  );
};
export default VitalsTabView;