import { applyMiddleware, createStore } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';

const middlewares: any[] = [thunk, reduxImmutableStateInvariant()];
const initialState = {};

/**
 *
 *
 * @export
 * @param {any} {}
 * @returns
 */
export default function configureStore({}) {
  return createStore(
    rootReducers,
    initialState,
    applyMiddleware(...middlewares),
  );
}
