import { Table } from "../../styles";
import { Formik, Form, Field } from 'formik';

const OrdersTabView = ({ mrn, orders, setOrders }) => {

  const handleSubmit = (values) => {
    const newOrder = {
      order: values.order,
      reason: values.reason,
      date: values.date,
      time: values.time,
      mrn,
    };

    fetch("/api/orders", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
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
              <td>{order.date}</td>
              <td>{order.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Formik onSubmit={handleSubmit} initialValues={{
        order: '',
        reason: '',
        date: '',
        time: '',
      }}>
        <Form>
          <label>
            Order:
            <Field type="text" name="order" required />
          </label>
          <label>
            Reason:
            <Field type="text" name="reason" required />
          </label>
          <label>
            Date:
            <Field type="date" name="date" required />
          </label>
          <label>
            Time:
            <Field type="time" name="time" required />
          </label>
          <button type="submit">Add Order</button>
        </Form>
      </Formik>
    </>
  );
};

export default OrdersTabView;

