import LoadingTable from './LoadingTable';
import { FlexBox, Table } from './styles';

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
                {Object.values(data).map((td) => (
                  <td key={td}>{td}</td>
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