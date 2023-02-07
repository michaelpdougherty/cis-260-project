import LoadingTable from './LoadingTable';
import { FlexBox, Table } from './styles';

const DATE_FIELDS = [
  'DOB',
  'DATE',
  'ADMIT_DATE',
  'DATE_OF_ONSET',
];
const DATETIME_FIELDS = [
  'DATE_AND_TIME',
];

const JsonTable = ({
  jsonData,
  isLoading,
  onClick = false,
}) => {
  if (isLoading) return <LoadingTable />;
  if (jsonData[0]) {
    return (
      <FlexBox>
        <Table clickable={!!onClick}>
          <thead>
            <tr>
              {Object.keys(jsonData[0] ?? jsonData).map(th => <th key={th}>{th}</th>)}
            </tr>
          </thead>
          <tbody>
            {jsonData.map((data, i) => (
              <tr key={i} onClick={() => onClick(data)}>
                {Object.entries(data).map(([key, td]) => (
                  <td key={td}>{DATE_FIELDS.includes(key) ? new Date(td).toLocaleDateString() : DATETIME_FIELDS.includes(key) ? new Date(td).toLocaleString() : td}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </FlexBox>
    );
  }
}

export default JsonTable;