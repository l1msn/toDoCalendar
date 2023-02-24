import IAuthState from '../../../interfaces/store/reducers/auth/IAuthState';
import IAuthAction from '../../../interfaces/store/reducers/auth/IAuthAction';
import AuthActionTypes from '../../../consts/AuthActionTypes';
import IUser from '../../../interfaces/models/IUser';

const initialState: IAuthState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: null,
};

function authReducer(
  state: IAuthState = initialState,
  action: IAuthAction
): IAuthState {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH:
      return { ...state, isAuth: action.payload, isLoading: false };
    case AuthActionTypes.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case AuthActionTypes.SET_USER:
      return { ...state, user: action.payload };
    case AuthActionTypes.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

export default authReducer;
