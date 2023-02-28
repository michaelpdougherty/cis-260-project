import { FlexBox, Table } from './styles';
import { Audio } from 'react-loader-spinner';

const LoadingTable = () => {
  return (
    <FlexBox>
      <Table>
        <tbody>
          <tr>
            <td>
              <Audio />
            </td>
          </tr>
        </tbody>
      </Table>
    </FlexBox>
  );
};

export default LoadingTable;