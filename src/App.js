
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/create" component={CreatePage} />
          <Route path="/updates" component={UpdatesPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;


