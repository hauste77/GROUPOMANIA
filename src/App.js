import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Img from './images/icon-left-font-monochrome-black.png'

function App() {
  return (
    <div className="App">
      <img src={Img} alt="logo groupomania"/>
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
