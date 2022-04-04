import React from 'react';
import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import Chart from './components/chart/Chart'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container layout'>
        <Aside />
        <Chart />
      </div>
    </div>
  );
}

export default App;
