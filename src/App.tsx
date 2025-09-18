import React from 'react';
import './App.css';
import Player from './components/Player'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>播放器</h1>
      <Player src ="abc" />
    </div>
  );
};

export default App;
