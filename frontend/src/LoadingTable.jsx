import { FlexBox, Table } from './styles';
import { Audio } from 'react-loader-spinner';

const LoadingTable = () => {
  return (
    <FlexBox>
      <Table>
        <tr>
          <td>
            <Audio />
          </td>
        </tr>
      </Table>
    </FlexBox>
  );
};

export default LoadingTable;