import AuthActionTypes from '../../../../consts/AuthActionTypes';
import IUser from '../../../models/IUser';

interface SetAuthAction {
  type: AuthActionTypes.SET_AUTH;
  payload: boolean;
}

interface SetErrorAction {
  type: AuthActionTypes.SET_ERROR;
  payload: string | null;
}

interface SetUserAction {
  type: AuthActionTypes.SET_USER;
  payload: IUser;
}

interface SetIsLoadingAction {
  type: AuthActionTypes.SET_IS_LOADING;
  payload: boolean;
}

type IAuthAction =
  | SetAuthAction
  | SetErrorAction
  | SetUserAction
  | SetIsLoadingAction;

export default IAuthAction;

export type {
  SetAuthAction,
  SetErrorAction,
  SetUserAction,
  SetIsLoadingAction,
};
