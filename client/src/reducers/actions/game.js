import { post } from '../../api/index';
import * as actionGame from '../constants/actionTypes';
import {
  URL_NEW_GAME
} from '../constants/urls';

export const createNewGame = () =>
  dispatch => {
    // dispatch(handleLoadingGame());
    post(URL_NEW_GAME, {})
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }

// export const addFavoriteMovie = (data) => {
//   return {
//     type: actionGame.ADD_TO_FAVORITES,
//     data
//   }
// }
    
// const handleLoadingGame = () => {
//   return {
//     type: actionGame.LOADING_Game
//   }
// }

// const handleErrorGame = (error) => {
//   return {
//     type: actionGame.ERROR_Game,
//     error
//   }
// }
