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

const reducer = (action) => {
  const state = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null
  };
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    default:
      return state;
  }
}

export default reducer;