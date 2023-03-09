import JsonTable from '../../JsonTable';

const OrdersTabView = ({ orders }) => {
  return (
    <JsonTable jsonData={[orders]} />
  );
};

export default OrdersTabView;