import LoadingTable from './LoadingTable';
import { FlexBox, Table, TableLabel } from './styles';

const JsonTable = ({
  jsonData,
  isLoading,
  onClick = false,
  title = '',
  style = {},
}) => {
  if (isLoading) return <LoadingTable />;
  return (
    <div>
      { title && <TableLabel>{title}</TableLabel>}
      <FlexBox>
        {jsonData[0] ? (
          <Table clickable={!!onClick} style={style}>
            <thead>
              <tr>
                {Object.keys(jsonData[0] ?? jsonData).map(th => <th key={th}>{th}</th>)}
              </tr>
            </thead>
            <tbody>
              {jsonData.map((data, i) => (
                <tr key={i / 1000} onClick={() => onClick(data)}>
                  {Object.entries(data).map(([key, td], i) => (
                    <td key={key + td + i}>{td}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <Table style={{ textAlign: 'center' }}>
            <tbody>
              <tr><td>No data.</td></tr>
            </tbody>
          </Table>
        )}
      </FlexBox>
    </div>
  );
}
export default JsonTable;