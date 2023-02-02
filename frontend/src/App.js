import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import './App.css';

import Home from './routes/Home';
import Login from './routes/Login';
import NoMatch from './routes/NoMatch';
import Patients from './routes/Patients';

const App = () => {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="patients" element={<Patients />} />
          {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

const Layout = () => {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className="App-header">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/patients">Patients</Link>
        <Link to="/nothing-here">Nothing Here</Link>
      </nav>
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default App;
