
// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import CreatePage from './components/CreatePage';
import UpdatesPage from './components/UpdatesPage';
import ProfilePage from './components/ProfilePage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<HomePage />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="create" element={<CreatePage />} />
              <Route path="updates" element={<UpdatesPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;



