import React from 'react';
import './App.css';
import Cc from './components/Cc';
import Func from './components/Func';
import Click from './components/Click';


function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Cc />
      <div>
        <Func></Func>
      </div>
      <Click />

    </div>
    

  );
}

export default App;
