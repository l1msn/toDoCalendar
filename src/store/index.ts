import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({});

const store = createStore(rootReducer, applyMiddleware(thunk));

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export default store;
export type { RootState, AppDispatch };
