import { useEffect, useState } from 'react';
import { Audio } from 'react-loader-spinner';
import { FlexBox } from '../styles';

const PageName = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [jsonData, setJsonData] = useState();
  useEffect(() => {
    fetch("/routeName")
      .then(res => res.json())
      .then(json => setJsonData(json))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading || !(jsonData || error)) return <Audio />;
  return (
    <div>
      <h2>PageName</h2>
      <FlexBox>
        Stuff
      </FlexBox>
    </div>
  );
};

export default PageName;