import { applyMiddleware, createStore } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middlewares: any[] = process.env.NODE_ENV === 'production' ?
                            [thunk] : [thunk, reduxImmutableStateInvariant()];
const initialState = {};

/**
 * @export
 * @param {any} {}
 * @returns
 */
const configureStore = ({}) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );
};

export default configureStore;
