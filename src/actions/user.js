import 'whatwg-fetch';
import { SIGIN_IN_USER_SUCCESS, SIGIN_IN_USER_PENDING, SIGIN_IN_USER_FAILED, SIGIN_OUT_USER } from './types';
import { baseUrl, headers } from './config';

const signInUserSuccess = (token, id) => ({
  type: SIGIN_IN_USER_SUCCESS,
  payload: {
    isPending: false,
    isError: false,
    token,
    id,
    signedIn: true
  }
});

const signInUserPending = () => ({
  type: SIGIN_IN_USER_PENDING,
  payload: {
    isPending: true,
    isError: false,
    token: '',
    id: '',
    signedIn: false
  }
});

const signInUserFailed = () => ({
  type: SIGIN_IN_USER_FAILED,
  payload: {
    isPending: false,
    isError: true,
    token: '',
    id: '',
    signedIn: false
  }
});

export const signOutUser = () => ({
  type: SIGIN_OUT_USER,
  payload: {}
});

export const signIn = (email, password) => dispatch => {
  dispatch(signInUserPending());
  const options = {
    method: 'post',
    headers: headers,
    body: JSON.stringify({
      email: email,
      password: password
    })
  };
  fetch(`${baseUrl}user/signin`, options)
    .then(response => {
      return response.json();
    })
    .then(json => {
      if (json.statusCode === 200) {
        dispatch(signInUserSuccess(json.token, json.data.id));
      } else {
        dispatch(signInUserFailed());
      }
    })
    .catch(error => {
      dispatch(signInUserFailed());
    });
};

export const register = (name, email, password) => dispatch => {
  dispatch(signInUserPending());

  const options = {
    method: 'post',
    headers: headers,
    body: JSON.stringify({
      email: email,
      name: name,
      password: password
    })
  };
  fetch(`${baseUrl}user/register`, options)
    .then(response => {
      return response.json();
    })
    .then(json => {
      if (json.statusCode === 200) {
        dispatch(signInUserSuccess(json.token, json.data.id));
      } else {
        dispatch(signInUserFailed());
      }
    })
    .catch(error => {
      dispatch(signInUserFailed());
    });
};
