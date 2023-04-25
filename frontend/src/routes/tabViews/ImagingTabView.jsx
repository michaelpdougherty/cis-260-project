import { Table } from '../../styles';

const ImageRow = ({ imageRow: { id, mrn, date, image }}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{mrn}</td>
      <td>{date}</td>
      <td><img src={image} height={100} alt="x-ray" /></td>
    </tr>
  )
}

const ImagingTabView = ({ imaging }) => {
  return (
    <Table>
      {imaging.map(imageRow => (<ImageRow imageRow={imageRow} />))}
    </Table>
  );
}
export default ImagingTabView;