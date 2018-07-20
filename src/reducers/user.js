import { SIGIN_IN_USER_SUCCESS, SIGIN_IN_USER_PENDING, SIGIN_IN_USER_FAILED, SIGIN_OUT_USER } from '../actions/types';

const defaultState = {
  id: '',
  token: '',
  signedIn: false
};

const user = (state = defaultState, action = {}) => {
  switch (action.type) {
    case SIGIN_IN_USER_SUCCESS:
      return action.payload;

    case SIGIN_IN_USER_PENDING:
      return action.payload;

    case SIGIN_IN_USER_FAILED:
      return action.payload;

    case SIGIN_OUT_USER:
      return defaultState;

    default:
      return state;
  }
};

export default user;
