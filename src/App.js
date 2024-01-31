import './App.css';
import {Helmet} from 'react-helmet'
import { useState } from 'react';

export default function App() {
  return (
      <div>
        <Helmet>
          <title>Tic-Tac-Toe</title>
          <meta name="description" content="Tic-tac-toe on React" />
        </Helmet>
        <Board/>
      </div>
  );
}
function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue('X');
  }
  return <button className="square" onClick={handleClick}>{value}</button>;
}
function Board() {
  return (
  <>
    <div className="board-row">
      <Square value="1"/>
      <Square value="2"/>
      <Square value="3"/>
    </div>
    <div className="board-row">
      <Square value="4"/>
      <Square value="5"/>
      <Square value="6"/>
    </div>
    <div className="board-row">
      <Square value="7"/>
      <Square value="8"/>
      <Square value="9"/>
      </div>
  </>
  
  )
}