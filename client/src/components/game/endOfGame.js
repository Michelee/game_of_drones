import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/_endOfGame.scss'

const EndOfGame = ({ winner }) => (
    <div className="EndOfGameComponent">
        <h1>We have a WINNER!!</h1>
        <h3>{winner} is the new EMPEROR!</h3>

        <Link to="/" className="btn">
            Play Again
        </Link>
    </div>
);

export default EndOfGame;
