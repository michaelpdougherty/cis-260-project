import { Form, Formik } from 'formik';
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
        <LoginField as='select' id={name} name={name} type={type}>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
        </LoginField>
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
        MEDITECH Signon
      </LoginHeader>
      <LoginView>
        <Formik {...{initialValues, onSubmit}}>
          <Form>
            <LoginBox>
              <LoginFieldRow name='username'/>
              <LoginFieldRow name='password' type='password'/>
              <LoginFieldRow name='job' type='select' options={Object.values(JOBS)}/>
            </LoginBox>
            <LoginButtons>
              <SignonButton type='submit'>
                <span>Signon</span>
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
