import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import gameReducer from './modules/game';

export default function configureStore(history) {

    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
   
    // middleware
    let middleware = [thunk];
    const routerMW = routerMiddleware(history);

    middleware = [...middleware, routerMW];

    // create store
    const store = createStore(
        combineReducers({
            game: gameReducer
        }),
        composeEnhancer(
            applyMiddleware(...middleware)
        )
    );
    return store;
}
