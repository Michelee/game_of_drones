/* eslint-disable no-undef */
import * as actionGame from '../constants/actionTypes';

const initialState = {
  gameDetail: {
    gameId: '5ce03e8f91c8ca125e8968c0',
    playerOne: {
      _id: '5ce03a68b3630b0b4fd05d1b',
      name: 'michele',
      __v: 0
    },
    playerTwo: {
      _id: '5ce03e8f91c8ca125e8968bf',
      name: 'andreina',
      __v: 0
    }
  },
  loading: false,
  error: false
};

export default function GameReducer(state = initialState, action = {}){
	switch (action.type) {
    case actionGame.CREATE_NEW_GAME:
      return {
        ...state,
        loading: false,
        gameDetail: action.payload     
      };
    case actionGame.ERROR_GAME:
      return {
        ...state,
        error: action.error,
        loading: false        
      };
    case actionGame.LOADING_GAME:
      return {
        ...state,
        loading: true       
      };
    default:
      return state;
  }
}
