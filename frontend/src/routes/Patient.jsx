import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JsonTable from '../JsonTable';
import { setTitle } from '../util';
import LoadingTable from '../LoadingTable';

const FullPageLoadingSpinner = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '80vh'
    }}>
      <LoadingTable/>
    </div>
  );
}

const Patient = () => {
  setTitle('Patient');
  const { id } = useParams();
  const [jsonData, setJsonData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`/patient/${id}`)
      .then(res => res.json())
      .then(json => setJsonData(json))
      .finally(() => setIsLoading(false));
  }, [id]);
  if (isLoading) return <FullPageLoadingSpinner/>;
  return (
    <div>
      <h2>{jsonData.FirstName} {jsonData.LastName}</h2>
      <JsonTable jsonData={[jsonData]} />
    </div>
  );
};
export default Patient;