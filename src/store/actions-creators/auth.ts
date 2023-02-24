import {
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from '../../interfaces/store/reducers/auth/IAuthAction';
import AuthActionTypes from '../../consts/AuthActionTypes';
import IUser from '../../interfaces/models/IUser';
import { AppDispatch } from '../index';
import axios from 'axios';

const AuthActionsCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionTypes.SET_USER,
    payload: user,
  }),
  setAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionTypes.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (loading: boolean): SetIsLoadingAction => ({
    type: AuthActionTypes.SET_IS_LOADING,
    payload: loading,
  }),
  setError: (error: string | null): SetErrorAction => ({
    type: AuthActionTypes.SET_ERROR,
    payload: error,
  }),
  login:
    (username: string, password: string) =>
    async (dispatch: AppDispatch): Promise<void> => {
      try {
        dispatch(AuthActionsCreators.setIsLoading(true));
        setTimeout(async (): Promise<void> => {
          const response = await axios.get<IUser[]>('./users.json');
          const mockUser = response.data.find((user: IUser) => {
            return user.username === username && user.password === password;
          });
          if (mockUser) {
            localStorage.setItem('auth', 'true');
            localStorage.setItem('username', mockUser.username);
            dispatch(AuthActionsCreators.setAuth(true));
            dispatch(AuthActionsCreators.setUser(mockUser));
          } else {
            dispatch(
              AuthActionsCreators.setError('Uncorrected username or password')
            );
          }
        }, 1000);
      } catch (error) {
        dispatch(AuthActionsCreators.setError(error as string));
      }
      dispatch(AuthActionsCreators.setIsLoading(false));
    },
  logout:
    () =>
    async (dispatch: AppDispatch): Promise<void> => {
      try {
        setTimeout((): void => {
          localStorage.removeItem('auth');
          localStorage.removeItem('username');
          dispatch(AuthActionsCreators.setUser({} as IUser));
          dispatch(AuthActionsCreators.setAuth(false));
        }, 1000);
      } catch (error) {
        dispatch(AuthActionsCreators.setError(error as string));
      }
    },
};

export default AuthActionsCreators;
