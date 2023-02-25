import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { bindActionCreators } from 'redux';
import allActionsCreators from '../store/actions-creators';

function useActions() {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(allActionsCreators, dispatch);
}

export default useActions;
