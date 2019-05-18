import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createNewGame } from '../reducers/actions/game';
import '../styles/containers/_home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOne: '',
            playerTwo: '',
            error: false
        }
    }
    componentDidMount() {
        this.props.createNewGame();
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
            error: false
        });
    }

    handleSubmit = () => {
        const { playerOne, playerTwo } = this.state;
        
        if(!playerOne || !playerTwo) {
            this.setState({
                error: true
            })
        } else {
            this.props.createNewGame({
                playerOne,
                playerTwo
            });
        }
    }

    render() {
        const { playerOne, playerTwo, error } = this.state;
        return (
            <div className="HomeContainer">
                <h1>Game of Drones</h1>

                <div className="container">

                    <h3>Enter player's names to start</h3>

                    <div className="form-input">
                        <label>Player 1 *</label>
                        <input type="text" name="playerOne" value={playerOne} 
                            onChange={e => this.handleInputChange(e)}/>
                    </div>
                    <div className="form-input">
                        <label>Player 2 *</label>
                        <input type="text" name="playerTwo" value={playerTwo} 
                            onChange={e => this.handleInputChange(e)}/>
                    </div>
                    {
                        error &&
                            <small className="error">
                                Please enter both names.
                            </small>
                    }
                    <div className="form-input">
                        <button onClick={() => this.handleSubmit()}>
                            Start
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { game } = state;
    return game;
  }
  
const actions = { createNewGame }

export default withRouter(connect(mapStateToProps, actions)(Home));
