import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history'
import configureStore from './reducers/configureStore';
import Home from './containers/Home';
import Game from './containers/Game';
import Statistics from './containers/Statistics';
import './styles/App.scss';
import Header from './components/common/header';

export const history = createHistory();

class App extends Component {
  render() {
    return (
      <Provider store={configureStore(history)}>
        <Router history={history}>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/statistics" component ={Statistics} />
        </Router>
      </Provider>
    )
  }
}

export default App;
