import axios from 'axios';

import * as actionTypes from './actionTypes';

export const loginSuccess = token => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token: token,
  };
};

export const registerSuccess = (id, token) => {
  console.log(token);
  return {
    type: actionTypes.REGISTER_SUCCESS,
    token: token,
    userId: id,
  };
};

export const login = (email, password) => {
  return dispatch => {
    axios
      .post('https://reqres.in/api/login', {
        email: email,
        password: password,
      })
      .then(response => {
        return response.data.token;
      })
      .then(token => {
        dispatch(loginSuccess(token));
      })
      .catch(err => console.log(err));
  };
};

export const register = (email, password) => {
  return dispatch => {
    axios
      .post('https://reqres.in/api/register', {
        email: email,
        password: password,
      })
      .then(response => {
        return response.data;
      })
      .then(data => {
        dispatch(registerSuccess(data.id, data.token));
      })
      .catch(err => console.log(err));
  };
};
