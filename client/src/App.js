import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history'
import configureStore from './reducers/configureStore';
import Dashboard from './containers/Dashboard';
import Statistics from './containers/Statistics';
import './styles/App.scss';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Provider store={configureStore(history)}>
        <Router history={history}>
          <Route exact path="/" component={Dashboard} />
          <Route path="/statistics" component ={Statistics} />
        </Router>
      </Provider>
    )
  }
}

export default App;
