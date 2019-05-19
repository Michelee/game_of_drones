import { history } from '../../App';
import { post, get } from '../../api/index';
import * as actionGame from '../constants/actionTypes';
import {
  URL_NEW_GAME,
  URL_END_GAME,
  URL_GET_STATISTICS
} from '../constants/urls';

export const createNewGame = (payload) =>
  dispatch => {
    dispatch(handleLoadingGame());
    post(URL_NEW_GAME, payload)
      .then(response => {
        dispatch(handleNewGame(response.data));
        history.push('/game');
      })
      .catch(error => {
        dispatch(handleErrorGame(error));
      });
    }

export const updateEndGame = (payload) =>
  dispatch => {
    dispatch(handleLoadingGame());
    post(URL_END_GAME, payload)
      .then(response => {
        dispatch(handleEndGame());
        history.push('/game');
      })
      .catch(error => {
        dispatch(handleErrorGame(error));
      });
    }

export const getStatistics = () =>
  dispatch => {
    dispatch(handleLoadingGame());
    get(URL_GET_STATISTICS)
      .then(response => {
        dispatch(handleStatistics(response.data));
      })
      .catch(error => {
        dispatch(handleErrorGame(error));
      });
    }

const handleStatistics = (payload) => {
  return {
    type: actionGame.SET_STATISTICS,
    payload
  }
}

const handleEndGame = () => {
  return {
    type: actionGame.UPDATE_END_GAME
  }
}

const handleNewGame = (payload) => {
  return {
    type: actionGame.CREATE_NEW_GAME,
    payload
  }
}
    
const handleLoadingGame = () => {
  return {
    type: actionGame.LOADING_GAME
  }
}

const handleErrorGame = (error) => {
  return {
    type: actionGame.ERROR_GAME,
    error
  }
}
