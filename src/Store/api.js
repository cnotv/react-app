const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

const setLoginPending = (isLoginPending) => {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
}

const setLoginSuccess = (isLoginSuccess) => {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

const setLoginError = (loginError) => {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  }
}

const callLoginApi = (user, password, callback) => {
  setTimeout(() => {
    if (user === 'admin' && password === 'admin') {
      return callback(null);
    } else {
      return callback(new Error('Invalid user and password'));
    }
  }, 1000);
}

const login = (user, password) => {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    callLoginApi(user, password, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  }
}

export default login;