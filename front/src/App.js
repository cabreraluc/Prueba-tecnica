import './App.css';
import {Route} from "react-router-dom"
import MainPage from "./components/MainPage"
import React from 'react';




function App() {



  return (
    <div className="App">
        <Route path="/" component={MainPage} /> 
    </div>
  );
}

export default App;
