import IUser from '../../../models/IUser';

interface IAuthState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error?: string | null;
}

export default IAuthState;
