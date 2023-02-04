import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppStyle, AppHeader } from './styles';

import './App.css';

import Home from './routes/Home';
import Login from './routes/Login';
import NoMatch from './routes/NoMatch';
import Patients from './routes/Patients';

const theme = {
  lightBlue: 'hsl(231deg 100% 85%)',
  white: '#e1e6fe',
  navy: 'hsl(223deg 85% 24%)',
  gray: 'hsl(228deg 94% 94%)',
  mediumBlue: '#6776ce',
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <AppStyle>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="patients" element={<Patients />} />
          {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </AppStyle>
    </ThemeProvider>
  );
}

const Layout = () => {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <AppHeader>
        <Link to="/">Home</Link>
        <Link to="/patients">Patients</Link>
        <Link to="/logout">Log Out</Link>
      </AppHeader>
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default App;
