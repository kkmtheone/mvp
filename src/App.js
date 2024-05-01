
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import CreatePage from './components/CreatePage';
import UpdatesPage from './components/UpdatesPage';
import ProfilePage from './components/ProfilePage';
import './App.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/updates" element={<UpdatesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;


