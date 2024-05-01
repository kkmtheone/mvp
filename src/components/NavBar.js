
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/create">Create</Link>
      <Link to="/updates">Updates</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default NavBar;
