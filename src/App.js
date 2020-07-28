import React, { Component } from 'react'
import './App.css';
import { Route } from "react-router";
import LandingPage from './components/views/LandingPage/LandingPage';

function App() {
  return (
    <div >
      <Route exact path = "/" component = {LandingPage}/>      
    </div>
  );
}



export default App;
