import React from 'react';
import '../../styles/components/_gameBoard.scss'

const GameBoard = ({ playerName, round, turn, handleChange, handleClick, renderError }) => (
    <div className="gameBoardComponent">
        <h1>Round {round}</h1>

        <h3>Turn:  {playerName}</h3>

        <label>Select a move</label>
        <select id="move" name={turn} onChange={e => handleChange(e)}>
            <option value="">Select</option>
            <option value="rock">Piedra</option>
            <option value="paper">Papel</option>
            <option value="scissors">Tijera</option>
        </select>
        
        {renderError()}

        <button onClick={handleClick}>Play</button>
    </div>
);

export default GameBoard;
