import React from 'react';
import NavBar from './NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  document.body.style = 'background: #42444D';
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <NavBar/>
        </div>
    </Router>
    
  );
}

export default App;
