import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import authReducer from 'redux/redux-reducer/auth.reducer';

const reducers = combineReducers({
  auth: authReducer
});

const composeEnhancers =
  (typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware()));

export default store;
