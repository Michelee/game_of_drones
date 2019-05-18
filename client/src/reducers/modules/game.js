/* eslint-disable no-undef */
import * as actionGame from '../constants/actionTypes';

const initialState = {
  gameDetail: {},
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
    case actionGame.UPDATE_END_GAME:
      return {
        ...state,
        loading: false,
        gameDetail: {}  
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
