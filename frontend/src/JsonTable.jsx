import LoadingTable from './LoadingTable';
import { FlexBox, Table, TableLabel } from './styles';

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
  title = '',
  style = {},
}) => {
  const formatByKey = (key, td) => {
    if (DATE_FIELDS.includes(key)) {
      return new Date(td).toLocaleDateString();
    } else if (DATETIME_FIELDS.includes(key)) {
      return new Date(td).toLocaleString();
    }
    return td;
  }

  const KEY_REMAPPER = {
    DOB: 'DOB',
    ID: 'MRN',
    'MRN#': 'MRN#',
    'Patient Name': 'Patient Name',
    'Patient Age': 'Patient Age',
  };
  const capitalize = w => w[0]?.toUpperCase() + w.slice(1, w.length).toLowerCase();
  const isArticle = w => ['AND', 'OF'].includes(w.toUpperCase());

  const formatKey = key => {
    if (KEY_REMAPPER[key]) {
      return KEY_REMAPPER[key];
    }
    return key
      .toUpperCase()
      .split('_')
      .map(w => isArticle(w) ?
        w.toLowerCase() :
        capitalize(w)
      )
      .join(' ');
  }

  if (isLoading) return <LoadingTable />;

  return (
    <div>
      { title && <TableLabel>{title}</TableLabel>}
      <FlexBox>
        {jsonData[0] ? (
          <Table clickable={!!onClick} style={style}>
            <thead>
              <tr>
                {Object.keys(jsonData[0] ?? jsonData).map(th => <th key={th}>{formatKey(th)}</th>)}
              </tr>
            </thead>
            <tbody>
              {jsonData.map((data, i) => (
                <tr key={i / 1000} onClick={() => onClick(data)}>
                  {Object.entries(data).map(([key, td], i) => (
                    <td key={key + td + i}>{formatByKey(key, td)}</td>                ))}
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