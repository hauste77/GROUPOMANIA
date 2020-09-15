import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <h1>GROUPOMANIA</h1>
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
