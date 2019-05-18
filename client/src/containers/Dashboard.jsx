import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createNewGame } from '../reducers/actions/game';

class Dashboard extends Component {
    componentDidMount() {
        this.props.createNewGame();
    }
    render() {
        return (
            <h1>Dashboard</h1>
        )
    }
}

const mapStateToProps = (state) => {
    const { game } = state;
    return game;
  }
  
const actions = { createNewGame }

export default withRouter(connect(mapStateToProps, actions)(Dashboard));
