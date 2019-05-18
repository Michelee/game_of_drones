import React from 'react';
import '../../styles/components/_scoreTable.scss'; 

const ScoreTable = ({ playerOneName, playerTwoName, playerOnePoints, playerTwoPoints, scoreTable}) => (
    <div className="scoreTableComponent">
        <h3>Score Table</h3>

        <div className="currentScore">
            <div className="scoreBox">
                <strong>{playerOneName}: </strong>
                <span>{playerOnePoints}</span>
            </div>
            <div className="scoreBox">
                <strong>{playerTwoName}: </strong>
                <span>{playerTwoPoints}</span>
            </div>
        </div>

        {
            scoreTable.length
                ?    <table>
                        <thead>
                            <tr>
                                <th>Round</th>
                                <th>Winner</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                scoreTable.map(({round, winner}) => (
                                    <tr key={round}>
                                        <td>{round}</td>
                                        <td>{winner}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                : ''
        }
        
    </div>         
);

export default ScoreTable;
