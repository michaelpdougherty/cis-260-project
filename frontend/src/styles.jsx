import styled from 'styled-components';
import { Field } from 'formik';

export const AppStyle = styled.div`
  text-align: center;
  height: 100vh;
  background-color: ${p => p.theme.lightBlue};
`;

export const StyledField = styled(Field)`
  input {
    background-color: ${p => p.theme.white};
  }
  flex: 1;
  font-size: 18px;
  padding: 3px;
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
    text-decoration: none;
  }
  a:hover {
    opacity: 0.8;
  }
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const LoginHeader = styled(AppHeader)`
  justify-content: flex-start;
`;

export const PatientsTable = styled.table`
  text-align: left;
  min-width: 50vw;
  border-collapse: collapse;
  padding: 0 50px;
  th {
    background: ${p => p.theme.gray2};
  }
  td, th {
    padding: 10px;
  }
  tr {
    background: ${p => p.theme.white};
  }
  tbody tr {
    cursor: pointer;
    :hover {
      background: ${p => p.theme.white}80;
    }
  }
`;

export const Table = styled.table`
  width: 100vw;
  text-align: left;
  border-collapse: collapse;
  td:first-child, th:first-child {
    padding-left: 10vw;
  }
  td:last-child, th:last-child {
    padding-right: 10vw;
  }
  td, th {
    padding: 10px;
  }
  tr {
    background: ${p => p.theme.white};
  }
  ${p => p.clickable && `
    tbody tr {
      cursor: pointer;
      :hover {
        background: ${p.theme.white}80;
      }
    }
  `}
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin-bottom: 40px;
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  cursor: pointer;
  background: ${p => p.theme.white};
  border-radius: 2px;
`;

export const AddChartButton = styled(Button)`
  margin-top: 20px;
`;

export const TableLabel = styled(Label)`
  padding: 10px;
  padding-left: 10vw;
  width: 100vw;
`;