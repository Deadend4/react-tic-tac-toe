import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export function Square() {
  return <button className="square">X</button>
}

export default function App() {
  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <Square/>
    </div>
  );
}
