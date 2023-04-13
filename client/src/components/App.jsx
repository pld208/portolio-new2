import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './About.jsx';
import Skills from './Skills.jsx';

const App = () => {
  return (
    <div className="main-container">
      <About></About>
      <Skills></Skills>
    </div>
  );
};


export default App;
