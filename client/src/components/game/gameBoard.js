import React from 'react';
import '../../styles/components/_gameBoard.scss'

const GameBoard = ({ playerName, round, turn, handleChange, handleClick, renderError }) => (
    <div className="gameBoardComponent">
        <h1>Round {round}</h1>

        <h3>Turn:  {playerName}</h3>

        <label>Select a move</label>
        <select id="move" name={turn} onChange={e => handleChange(e)}>
            <option value="">Select</option>
            <option value="rock">Rock</option>
            <option value="paper">Paper</option>
            <option value="scissors">Scissors</option>
        </select>
        
        {renderError()}

        <button onClick={handleClick}>Play</button>
    </div>
);

export default GameBoard;
