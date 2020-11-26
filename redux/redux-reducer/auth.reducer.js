import types from 'redux/redux-types/index.types';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        id: action.payload.id,
        name: action.payload.name
      };
    case types.logout:
      return {};

    default:
      return state;
  }
};

export default authReducer;
