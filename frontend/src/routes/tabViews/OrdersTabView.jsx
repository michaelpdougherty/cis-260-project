import { Table } from "../../styles";
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';

const OrderSpan = styled.span`
  margin-right: 5px;
`;

const OrderLabel = styled.label`
  margin-right: 20px;
`;

const OrderForm = styled(Form)`
  padding: 20px;
  margin-bottom: 50px;
`;

const OrdersTabView = ({ mrn, userId, orders, setOrders }) => {
  const handleSubmit = (values) => {
    const newOrder = {
      order: values.order,
      reason: values.reason,
      date: new Date().toISOString(),
      mrn,
      userId,
    };

    fetch("/api/orders", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrder),
    }).then(res => res.json())
    .then(json => {
      console.log(json);
    });
    
    setOrders([...orders, newOrder]);
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Reason</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.order}</td>
              <td>{order.reason}</td>
              <td>{new Date(order.date).toLocaleDateString()}</td>
              <td>{new Date(order.date).toLocaleTimeString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Formik onSubmit={handleSubmit} initialValues={{
        order: '',
        reason: '',
      }}>
        <OrderForm>
          <OrderLabel>
            <OrderSpan>Order:</OrderSpan>
            <Field type="text" name="order" required />
          </OrderLabel>
          <OrderLabel>
            <OrderSpan>Reason:</OrderSpan>
            <Field type="text" name="reason" required />
          </OrderLabel>
          <button type="submit">Add Order</button>
        </OrderForm>
      </Formik>
    </>
  );
};

export default OrdersTabView;

