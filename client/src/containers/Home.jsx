import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createNewGame } from '../reducers/actions/game';
import CreateGameForm from '../components/home/createGameForm';
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

    renderError = () => {
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
                <h1>Welcome to Game of Drones</h1>
                <CreateGameForm
                    namePlayerOne={namePlayerOne}
                    namePlayerTwo={namePlayerTwo}
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit}
                    renderError={this.renderError}
                />
            </div>
        )
    }
}

const actions = { createNewGame }

export default withRouter(connect(null, actions)(Home));
