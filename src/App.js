// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import './style.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ItemListContainer greeting="¡Bievenidos!" />
    </React.Fragment>
  );
}

export default App;
