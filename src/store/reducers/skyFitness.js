/* eslint-disable no-restricted-syntax */
import * as MyType from '../actions/types/types';

export const initialState = {
  userName: null,
  error: null,
  loginData: null,
  idRefTokenInt: null,
  refreshToken: null,
  errorMessage: {},
  userLogIn: null,
};

// eslint-disable-next-line default-param-last
export default function skyFitness(state = initialState, action) {
  switch (action.type) {
    case MyType.USER_SIGNUP_PASSNOTEQUAL:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case MyType.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        userLogIn: true,
        loginData: action.payload,
        userName: action.payload?.displayName,
      };
    }
    case MyType.USER_UPDATE_IDTOKEN: {
      const loginCurData = {...state.loginData};
      loginCurData.idToken = action.payload.access_token;
      loginCurData.refreshToken = action.payload.refresh_token;
      loginCurData.expiresIn = action.payload.expires_in;

      return {
        ...state,
        loginData: { ...loginCurData },
      };
    }
    case MyType.USER_LOGOUT: {
      return {
        ...state,
        userLogIn: false,
        loginData: null,
        userName: null,
      };
    }
    case MyType.USER_UPDATE_NAME: {
      return {
        ...state,
        userName: action.payload?.displayName,
      };
    }
    case MyType.USER_LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: { ...action.payload },
      };
    default:
      return state;
  }
}
