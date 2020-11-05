import React from 'react';
import './App.css';
import Cards from './components/cards/cards';
import Header from './components/header/header';
import Routes from './Routes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
