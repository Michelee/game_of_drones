import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createNewGame } from '../reducers/actions/game';
import '../styles/containers/_home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namePlayerOne: '',
            namePlayerTwo: '',
            error: false
        }
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
            error: false
        });
    }

    handleSubmit = () => {
        const { namePlayerOne, namePlayerTwo } = this.state;
        
        if(!namePlayerOne || !namePlayerTwo) {
            this.setState({
                error: true
            })
        } else {
            this.props.createNewGame({
                namePlayerOne,
                namePlayerTwo
            });
        }
    }

    showError = () => {
        if(this.state.error) {
            return (
                <small className="error">
                    Please enter both names.
                </small>
            )
        }
    }

    render() {
        const { namePlayerOne, namePlayerTwo } = this.state;

        return (
            <div className="HomeContainer">
                <h1>Game of Drones</h1>

                <div className="container">

                    <h3>Enter player's names to start</h3>

                    <div className="form-input">
                        <label>Player 1 *</label>
                        <input type="text" name="namePlayerOne" value={namePlayerOne} 
                            onChange={e => this.handleInputChange(e)}/>
                    </div>
                    <div className="form-input">
                        <label>Player 2 *</label>
                        <input type="text" name="namePlayerTwo" value={namePlayerTwo} 
                            onChange={e => this.handleInputChange(e)}/>
                    </div>
                    {this.showError()}
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

const actions = { createNewGame }

export default withRouter(connect(null, actions)(Home));
