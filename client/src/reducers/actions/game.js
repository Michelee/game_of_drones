import { history } from '../../App';
import { post } from '../../api/index';
import * as actionGame from '../constants/actionTypes';
import {
  URL_NEW_GAME
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
