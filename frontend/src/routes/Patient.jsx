import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';
import { FlexBox, Table } from '../styles';

const Patient = ({ matches }) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [jsonData, setJsonData] = useState();
  useEffect(() => {
    fetch(`/patient/${id}`)
      .then(res => res.json())
      .then(json => setJsonData(json))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, [id]);


  if (isLoading) return <Audio />;
  if (error) return JSON.stringify({ error });
  return (
    <div>
      <h2>{jsonData.FirstName} {jsonData.LastName}</h2>
      <FlexBox>
        <Table>
          <thead>
            {Object.keys(jsonData).map(key => <th>{key}</th>)}
          </thead>
          <tbody>
            {Object.values(jsonData).map(key => <td>{key}</td>)}
          </tbody>
        </Table>
      </FlexBox>
    </div>
  );
};

export default Patient;