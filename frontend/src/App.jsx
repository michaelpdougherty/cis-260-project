import * as React from 'react';
import { Navigate, Routes, Route, Outlet, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';

import { AppStyle, AppHeader, Brand } from './styles';
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
  tertiary2: '#73B3B9',
  primary3: '#007580',
};

window.BRAND = "Meditech EMR";

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
const Layout = () => {
  const user = getUser();
  return (
    <div>
      <AppHeader>
        <Link to='/'>
          <Brand><span class='ot'>OT</span><span class='racker'>racker</span></Brand>
        </Link>
        {user.isLoggedIn && <p>You are signed in as: ???</p>}
        {user.canEdit && <Link to="/edit">Edit</Link>}
        <Link to="/logout">Log Out</Link>
      </AppHeader>
      <Outlet />
    </div>
  );
}
export default App;