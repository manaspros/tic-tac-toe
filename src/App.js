import './App.css';
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import { useState } from 'react';
import LOG from './components/Log'
function App() {
  const [gameTurns, setGameTurns]= useState([]);
  const  [activePlayer, setActivePlayer]= useState('X');

  function handleSelectSquare(){
    setActivePlayer((curActivePlayer)=> curActivePlayer==='X'? 'O': 'X');
    setGameTurns();
  }
  return (
    <>
    <menu>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player initialname="Player 1" symbol="X" isActive={activePlayer==='X'}/>
          <Player initialname="Player 2" symbol="o" isActive={activePlayer==='O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      <LOG/>
    </menu>
    </>
  );
}

export default App;
