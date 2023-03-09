import { Form, Field, Formik } from 'formik';
import {
  FormGroup,
  Label,
  LoginBox,
  LoginField,
  LoginView,
  LoginButtons,
  SignonButton,
  LoginHeader,
} from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { setTitle } from '../util';

const LoginFieldRow = ({ name, type = 'text', options = null, text = null }) => {
  const getInput = () => {
    if (type === 'select') {
      return (
        <Field as='select' id={name} name={name} style={{ width: '100%', padding: 3 }}>
          {Object.entries(options).map(([key, value]) => <option key={key} value={key}>{value}</option>)}
        </Field>
      )
    }
    return (
        <LoginField id={name} name={name} type={type}/>
    );
  }
  return (
    <FormGroup>
        <Label htmlFor={name}>{text ?? name[0].toUpperCase() + name.slice(1, name.length)}</Label>
        {getInput()}
    </FormGroup>
  )
};

const Login = () => {
  setTitle('Login');
  const PAGE_TITLE = `${window.BRAND.toUpperCase()} Login`;
  const JOBS = {
    STUDENT: 'OCCUPATIONAL THERAPY ASSISTANT',
    TEACHER: 'OCCUPATIONAL THERAPIST',
    ADMIN: 'HOSPITAL ADMINISTRATOR',
  };
  const initialValues = {
    username: '',
    password: '',
    accountType: 'STUDENT',
  };
  const onSubmit = values => {
    fetch("/api/login", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(res => res.json())
    .then(json => {
      if (json.first_name) {
        window.sessionStorage.setItem('user', JSON.stringify(json));
        window.location = "/";
      }
    });
  };
  return (
    <>
      <LoginHeader>
        {PAGE_TITLE}
      </LoginHeader>
      <LoginView>
        <Formik {...{initialValues, onSubmit}}>
          <Form>
            <LoginBox>
              <LoginFieldRow name='username'/>
              <LoginFieldRow name='password' type='password'/>
              <LoginFieldRow name='accountType' text='Job' type='select' options={JOBS}/>
            </LoginBox>
            <LoginButtons>
              <SignonButton type='submit'>
                <span>Log In</span>
                <FontAwesomeIcon icon={faCheck}/>
              </SignonButton>
            </LoginButtons>
          </Form>
        </Formik>
      </LoginView>
    </>
  );
}
export default Login;