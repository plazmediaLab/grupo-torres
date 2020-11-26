import { createStore, combineReducers } from 'redux';
import authReducer from 'redux/redux-reducer/auth.reducer';

const reducers = combineReducers({
  auth: authReducer
});

const reduxDevtools =
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, reduxDevtools);

export default store;
