import { Link } from 'react-router-dom';
import LoadingTable from '../LoadingTable';


const NoMatch = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
      <LoadingTable />
    </div>
  );
}
export default NoMatch;