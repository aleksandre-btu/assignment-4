// eslint-disable-next-line no-unused-vars
import { updateObject } from './updateObject';

const initialState = {
  email: '',
  password: '',
  token: '',
  id: null,
  error: false,
};

const loginSuccess = (state, action) => {
  return updateObject(state, { token: action.token });
};

const registerSuccess = (state, action) => {
  return updateObject(state, { id: action.userId, token: action.token });
};

const failed = state => {
  return updateObject(state, { error: true });
};

const authReducer = (state = initialState, action) => {
  if (action.type === 'LOGIN_SUCCESS') {
    return loginSuccess(state, action);
  }
  if (action.type === 'REGISTER_SUCCESS') {
    return registerSuccess(state, action);
  } else {
    return failed(state, action);
  }
};
export default authReducer;
