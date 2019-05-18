import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { history } from '../App';
import { createNewGame } from '../reducers/actions/game';
import ScoreTable from '../components/game/scoreTable';
import GameBoard from '../components/game/gameBoard';
import EndOfGame from '../components/game/endOfGame';
import '../styles/containers/_game.scss';

const Moves = [
    {"move_a":"paper", "move_b": "rock"},
    {"move_a":"rock", "move_b": "scissors"},
    {"move_a":"scissors", "move_b": "paper"}
];

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPlayerName: '',
            playerOnePoints: 0,
            playerTwoPoints: 0,
            movePlayerOne: '',
            movePlayerTwo: '',
            round: 1,
            turn: 'movePlayerOne',
            scoreTable: [],
            winner: false,
            error: false
        }
    }
    
    componentDidMount() {
        const { gameDetail } = this.props.game;
        if(!gameDetail) {
            history.push('/');
        } else {
            this.setState({
                currentPlayerName: gameDetail.playerOne.name
            })
        }
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
            error: false
        });
    }

    checkError = move => {
        var resp = false;
        if (!move) { resp = 'You have to select a value.' }
        return resp;
    }

    handleClick = () => {
        var error = false;
        const { turn, movePlayerTwo, movePlayerOne } = this.state;
        const { playerOne, playerTwo } = this.props.game.gameDetail;

        if (turn === 'movePlayerOne') {
            error = this.checkError(movePlayerOne);
        } else if (turn === 'movePlayerTwo') {
            error = this.checkError(movePlayerTwo);
        }
        
        if (error) {
            this.setState({ error: error });
        } else {
            if (turn === 'movePlayerTwo') this.evaluateRound();

            var element = document.getElementById('move');
            element.value = '';
            
            this.setState({
                turn: turn === 'movePlayerOne' ? 'movePlayerTwo' : 'movePlayerOne',
                currentPlayerName: turn === 'movePlayerOne' ?  playerTwo.name : playerOne.name
            });
        }
    }

    evaluateRound = () => {
        var one = 0;
        var two = 0;
        
        const { playerOne, playerTwo } = this.props.game.gameDetail;
        const { movePlayerOne, movePlayerTwo, round, 
            scoreTable, playerTwoPoints, playerOnePoints } = this.state;
        var score = {'round': round, 'winner': ''};

        //check who wins the round
        Moves.forEach(({ move_a, move_b }) => {
            if (movePlayerOne === move_a && movePlayerTwo === move_b) one = one + 1;
            else if (movePlayerTwo === move_a && movePlayerOne === move_b) two = two + 1;
        });

        if(one) score.winner = playerOne.name;
        else if(two) score.winner = playerTwo.name;
        else score.winner = 'Match';

        //update points for each player
        one = one + playerOnePoints;
        two = two + playerTwoPoints;
        
        this.setState({
            movePlayerOne: '',
            movePlayerTwo: '',
            playerOnePoints: one,
            playerTwoPoints: two,
            round: round + 1,
            scoreTable: scoreTable.concat(score),
            winner: this.checkWinner(one, two)
        });
    }

    checkWinner = (val1, val2) => {
        var resp = false;
        const { playerOne, playerTwo } = this.props.game.gameDetail;

        if (val1 === 3) resp = playerOne.name;
        if (val2 === 3) resp = playerTwo.name;

        return resp;
    }

    renderError = () => {
        const { error } = this.state;
        if (this.state.error) {
            return (
                <small className="error">{error}</small>
            )
        }
    } 
    
    render() {
    const { turn, round, scoreTable, playerOnePoints, playerTwoPoints, winner, currentPlayerName } = this.state;
    const { playerOne, playerTwo } = this.props.game.gameDetail;

    return (
        <div className="GameContainer">
        {
            !winner
                ? <Fragment>
                    <GameBoard
                        playerName={currentPlayerName}
                        round={round}
                        turn={turn}
                        handleChange={this.handleChange}
                        handleClick={this.handleClick}
                        renderError={this.renderError} 
                    />

                    <ScoreTable
                        playerOneName={playerOne.name}
                        playerTwoName={playerTwo.name}
                        playerOnePoints={playerOnePoints}
                        playerTwoPoints={playerTwoPoints}
                        scoreTable={scoreTable}
                    />
                </Fragment>
                : <EndOfGame winner={winner} />
        }
        </div>
    );
    }
}

const mapStateToProps = (state) => {
    const { game } = state;
    return { game };
  }
  
const actions = { createNewGame }

export default withRouter(connect(mapStateToProps, actions)(Game));
