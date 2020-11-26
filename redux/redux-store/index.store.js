import { createStore, combineReducers } from 'redux';
import authReducer from 'redux/redux-reducer/auth.reducer';

const reducers = combineReducers({
  auth: authReducer
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
