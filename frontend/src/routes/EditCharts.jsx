import { useEffect, useState } from 'react';
import { Audio } from 'react-loader-spinner';
import JsonTable from '../JsonTable';
import { setTitle } from '../util';

const EditCharts = () => {
  setTitle('Edit Charts');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [jsonData, setJsonData] = useState();
  useEffect(() => {
    fetch("/patients")
      .then(res => res.json())
      .then(json => setJsonData(json))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading || !(jsonData || error)) return <Audio />;
  return (
    <div>
      <h2>Edit Charts</h2>
      <JsonTable jsonData={jsonData} onClick={data => window.alert(JSON.stringify(data))} />
    </div>
  );
};

export default EditCharts;