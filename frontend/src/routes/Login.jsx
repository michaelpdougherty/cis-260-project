import { Form, Field, Formik } from 'formik';

function Login() {
  const initialValues = {
    username: '',
    password: '',
  };
  const onSubmit = values => {
    window.alert(
      JSON.stringify(values, null, 4)
    );
  };
  return (
    <div>
      <h2>Login</h2>
      <Formik {...{initialValues, onSubmit}}>
        <Form>
          <div> 
            <Field name='username' type='text'/>
          </div>
          <div>
            <Field name='password' type='password'/>
          </div>
          <input type="submit"/>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
