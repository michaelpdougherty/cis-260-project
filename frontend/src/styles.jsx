import styled from 'styled-components';
import { Field } from 'formik';

export const AppStyle = styled.div`
  text-align: center;
  height: 100vh;
  background-color: ${p => p.theme.pureWhite};
`;

export const LoggedInStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const NoteFieldDiv = styled.div`
  height: 100%;
  background-color: darkgrey;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${p => p.direction ?? 'row'};
  justify-content: space-between;
  align-items: ${p => p.direction === 'row' ? 'center' : 'flex-start'};
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
  background-color: ${p => p.theme.secondary2};
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

export const FormGroup = styled.div`
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
  background-color: ${p => p.theme.primary3};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

export const YouAreSignedInAs = styled.p`
  margin: 0;
  font-size: 70%;
  color: 'black';
`;

export const LogoutButton = styled.button`
  text-transform: uppercase;
  width: 118px;
  height: 31px;
  background: ${p => p.theme.secondary3};
  border: none;
  cursor: pointer;
`;

export const Brand = styled.h1`
  margin: 0;
  .ot {
    color: ${p => p.theme.secondary3};
    text-transform: uppercase;
  }
  .racker {
    color: ${p => p.theme.secondary2};
    text-transform: lowercase;
  }
`;

export const LoginHeader = styled(AppHeader)`
  justify-content: flex-start;
`;

export const Table = styled.table`
  text-align: center;
  border-collapse: collapse;
  width: 100%;

  td, th {
    padding: 10px 20px;
  }
  th {
    font-weight: normal;
    background: ${p => p.theme.tertiary2};
  }
  tr {
    background: ${p => p.theme.secondary2};
  }
  ${p => p.clickable && `
    tbody tr {
      cursor: pointer;
    }
  `}
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
`;

export const StatusBoardTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 20px;
  text-align: left;
`;

export const TabContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  background: ${p => p.theme.tertiary2};
`;

export const TabBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  .active {
    background: ${p => p.theme.tertiary2};
  }
  button {
    /* padding: 15px; */
    margin-right: 10px;
    border: none;
    cursor: pointer;
    width: 12%;
  }
  background: white;
  /** Must add to 100% with ScrollableTabStyle */
  height: 5%;
`;

export const Sidebar = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 5px;
  /* min-width: 200px; */
  background: ${p => p.theme.tertiary1};
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* space-around; */
  align-items: center;
`;

export const MainPatientContent = styled.div`
  height: 100%;
  overflow-y: scroll;
  display: flex;
`;

export const PatientContentView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const NotesTabViewStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 95%;
`;

/** these two styles should be the same :( */
export const Select = styled.select`
  margin-left: 10px;
  padding: 5px;
  border: none;
  background-color: #f2f2f2;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
`;
export const SelectFieldDiv = styled.div`
  select {
    margin-left: 10px;
    padding: 5px;
    border: none;
    background-color: #f2f2f2;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
  }
`;

export const NoteFormLabel = styled.label`
  margin-right: 10px;
  font-weight: bold;
`;

export const NoteTypeSelect = styled(Select)`
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f2f2f2;
  position: relative;
  align-items: center;
  display: ;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  option {
    color: black;
    background-color: #f2f2f2;
    cursor: pointer;
  }
`;

export const NoteFormDiv = styled.div`
  background-color: lightgrey;
  display: inline-block;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  vertical-align: sub;
`;

export const NotesContainerHeader = styled.div`
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NotePar = styled.p`
  font-size: 12px;
  font-weight: regular;
  text-align: ${p => p.textAlign ?? 'right'};
  margin: 0;
  margin-bottom: 2px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Caretaker = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 16px;
  margin: 5px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

/* duplicated styled for input/button :( */
export const ButtonBlue = styled.button`
  border: 1px solid transparent;
  background-color: #00a4bd;
  cursor: pointer;
  color: #ffffff;
  padding: 5px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  width: 100px;
  height: 30px;
`;
export const InputBlue = styled.input`
  border: 1px solid transparent;
  background-color: #00a4bd;
  cursor: pointer;
  color: #ffffff;
  padding: 5px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  width: 100px;
  height: 30px;
`;

export const NoteSubmitButton = styled(InputBlue)`
  margin: 5px;
`;

export const NotesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 60vh;
  div {
    flex: 1;
    background: ${p => p.theme.secondary2};
    padding: 10px;
    margin: 0 10px;
    overflow-x: scroll;
  }
`;

export const StatusBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StatusBoardInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const NoteHeader = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 1px;
  padding: 1px;
`;

export const ScrollableTabStyle = styled.div`
  /* must add to 100% with TabBar */
  height: 95%;
  overflow-y: scroll;
`;

export const NoteHalfContainer = styled.div`
  height: 100%;
  width: 50%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  background: white;
  display: block;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  overflow-y: scroll;
`;

export const NoteHalfLeft = styled(NoteHalfContainer)`
  padding: 10px;
`;

export const NoteHalfRight = styled(NoteHalfContainer)`
  padding: 5px;
  padding-top: 25px;
`

export const PatientImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 300px;
  margin: 10px;
  object-fit: cover;
`;

export const NoteSummaryBox = styled.div`
  padding: 0;
  cursor: pointer;
  :hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;