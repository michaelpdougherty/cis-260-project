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

const LoginFieldRow = ({ name, type = 'text', options = null }) => {
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
        <Label htmlFor={name}>{name[0].toUpperCase() + name.slice(1, name.length)}</Label>
        {getInput()}
    </FormGroup>
  )
};

function Login() {
  const JOBS = {
    STUDENT: 'OCCUPATIONAL THERAPY ASSISTANT',
    TEACHER: 'OCCUPATIONAL THERAPIST',
    ADMIN: 'HOSPITAL ADMINISTRATOR',
  };
  const initialValues = {
    username: '',
    password: '',
    job: 'STUDENT',
  };
  const onSubmit = values => {
    window.alert(
      JSON.stringify(values, null, 4)
    );
  };
  return (
    <>
      <LoginHeader>
        MEDITECH EMR Login
      </LoginHeader>
      <LoginView>
        <Formik {...{initialValues, onSubmit}}>
          <Form>
            <LoginBox>
              <LoginFieldRow name='username'/>
              <LoginFieldRow name='password' type='password'/>
              <LoginFieldRow name='job' type='select' options={JOBS}/>
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
