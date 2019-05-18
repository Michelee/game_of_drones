import React from 'react';

const EndOfGame = ({ winner }) => (
    <div className="EndOfGameComponent">
        <h1>We have a WINNER!!</h1>
        <h3>{winner}is the new EMPEROR!</h3>
    </div>
);

export default EndOfGame;
