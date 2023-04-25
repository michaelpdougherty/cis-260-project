import { Table } from '../../styles';

const ImageRow = ({ imageRow: { id, mrn, date, image }}) => {
  const dateObj = new Date(date);
  return (
    <tr>
      <td>{id}</td>
      <td>{mrn}</td>
      <td>{dateObj.toLocaleDateString()}</td>
      <td>{dateObj.toLocaleTimeString()}</td>
      <td><img src={image} height={100} alt="x-ray" /></td>
    </tr>
  )
}

const ImagingTabView = ({ imaging }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>MRN</th>
          <th>Date</th>
          <th>Time</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {imaging.map(imageRow => (<ImageRow key={imageRow.id} imageRow={imageRow} />))}
      </tbody>
    </Table>
  );
}
export default ImagingTabView;