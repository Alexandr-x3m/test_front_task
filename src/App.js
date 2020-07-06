import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { ConstructorConteiner } from './components/ConstructorConteiner/ConstructorConteiner';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ConstructorConteiner />
      </div>
    </BrowserRouter>
  );
}

export default App;
