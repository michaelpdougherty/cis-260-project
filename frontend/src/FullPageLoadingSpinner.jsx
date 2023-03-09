import LoadingTable from './LoadingTable';

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

export default FullPageLoadingSpinner;