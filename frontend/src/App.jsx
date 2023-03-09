import * as React from 'react';
import { Navigate, Routes, Route, Outlet, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';

import { AppStyle, AppHeader, Brand, YouAreSignedInAs, LogoutButton } from './styles';
import { setTitle, getUser } from './util';

import Login from './routes/Login';
import Logout from './routes/Logout';
import NoMatch from './routes/NoMatch';
import Patients from './routes/Patients';
import Patient from './routes/Patient';
import EditCharts from './routes/EditCharts';

const theme = {
  pureWhite: 'white',
  secondary2: '#E3E1DB',
  secondary3: '#CDDB00',
  tertiary1: '#99C8CC',
  tertiary2: '#73B3B9',
  primary3: '#007580',
};

window.BRAND = "OTracker EMR";

const App = () => {
  setTitle();
  const user = getUser();
  if (!user) return null;
  if (user.isLoggedIn) {
    return (
      <ThemeProvider theme={theme}>
        <AppStyle>
          <Routes>
            <Route path="/login" element={<Logout />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<Layout />}>
              {user.canEdit && <Route element={<EditCharts />} />}
              <Route index element={<Patients />} />
              <Route path="edit" element={<EditCharts />} />
              <Route path="patient/:id" element={<Patient />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </AppStyle>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <AppStyle>
        <Routes>
          <Route index path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to='/login' />} />
        </Routes>
      </AppStyle>
    </ThemeProvider>
  );
}

const LogOutButton = () => {
  return (
    <LogoutButton role='button'>
      Logout
    </LogoutButton>
  );
}

const Layout = () => {
  const user = getUser();
  console.log(user);
  return (
    <div>
      <AppHeader>
        <Link to='/'>
          <Brand><span className='ot'>OT</span><span className='racker'>racker</span></Brand>
        </Link>
        {user.isLoggedIn && (<YouAreSignedInAs>You are signed in as: {user.first_name} {user.last_name}</YouAreSignedInAs>)}
        {user.canEdit && <Link to="/edit">Edit</Link>}
        <Link to='/logout'><LogOutButton/></Link>
      </AppHeader>
      <Outlet />
    </div>
  );
}
export default App;