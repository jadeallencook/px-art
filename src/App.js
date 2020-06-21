import React from 'react';
import './App.css';
import useBoard from './hooks/useBoard';
import Board from './components/Board';
import Colors from './components/Colors';
import Featured from './components/Featured';

function App() {
  const { pxs, setPxs, colors, selected, setSelected } = useBoard(
    16,
    16,
    window.location.hash ? window.location.hash.replace('#', '') : null
  );
  return (
    <div className="App">
      <h1>
        <b>PX</b> ART
      </h1>
      <Board setPxs={setPxs} pxs={pxs} colors={colors} selected={selected} />
      <Colors colors={colors} selected={selected} setSelected={setSelected} />
      <Featured />
    </div>
  );
}

export default App;
