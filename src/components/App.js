import React from 'react';
import NavBar from './NavBar';
import MainPage from './MainPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import DataContextProvider from '../contexts/DataContext.js'

function App() {
  document.body.style = 'background: #42444D';
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <DataContextProvider>
        <div className="App">
          <NavBar/>
          <MainPage/>
        </div>
      </DataContextProvider>
    </Router>
    
  );
}

export default App;
