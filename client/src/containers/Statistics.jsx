import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getStatistics } from '../reducers/actions/game';
import '../styles/containers/_statistics.scss';

class Statistics extends Component {
    componentDidMount() {
        this.props.getStatistics();
    }
    render() {
        const { statistics } = this.props.game;
        return (
            <div className="StatisticsContainer">
                <h1>Statistics</h1>
                {
                   statistics.length
                    ?   <table>
                        <thead>
                            <tr>
                                <th>Player</th>
                                <th>Victories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                statistics.map(({name, _id, victories}) => (
                                    <tr key={_id}>
                                        <td>{name}</td>
                                        <td>{victories}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    : ''
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { game } = state;
    return { game };
}

const actions = { getStatistics }

export default withRouter(connect(mapStateToProps, actions)(Statistics));
