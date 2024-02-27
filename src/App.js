import React from 'react';
import Home from './components/Home/Home';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div className='bg-slate-100'>
      <Header />
      <Home />
    </div>
  );
};

export default App;