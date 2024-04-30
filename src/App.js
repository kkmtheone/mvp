

import React from 'react';
import ImageForm from './components/ImageForm';
import ImageList from './components/ImageList';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <ImageForm />
      <ImageList />
    </div>
  );
};

export default App;

