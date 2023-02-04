import styled from 'styled-components';
import { Field } from 'formik';

export const AppStyle = styled.div`
  text-align: center;
  height: 100vh;
  background-color: ${p => p.theme.lightBlue};
`;

export const LoginField = styled(Field)`
  input {
    background-color: ${p => p.theme.white};
  }
  flex: 1;
  font-size: 18px;
  padding: 3px;
`;

export const LoginBox = styled.div`
  background-color: ${p => p.theme.gray};
  width: 50vw;
  border: solid black 1px;
  border-radius: 8px;
  opacity: 0.75;
  padding: 20px 15px 15px;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LoginView = styled(FlexBox)`
  min-height: 80vh;
  align-items: center;
`;

export const FormGroup =  styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1px;
`;

export const Label = styled.label`
  padding: 0 40px 0 20px;
  display: inline-block;
  min-width: 80px;
  text-align: left;
`;

export const LoginButtons = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8vh;
  background-color: ${p => p.theme.mediumBlue};

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
`;

export const SignonButton = styled.button`
  span {
    margin-right: 2px;
  }
  svg, svg > path {
    color: green;
  }
  padding: 10px;
  font-size: 18px;
  background: white;
  cursor: pointer;
`;

export const AppHeader = styled.nav`
  background-color: #282c34;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 15px;
  a {
    color: #61dafb;
  }
`;

export const LoginHeader = styled(AppHeader)`
  justify-content: flex-start;
`;