import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import App from './reducers';
import Root from './routes/routes';

const store = createStore(App);

render(<Root store={store} />, document.getElementById('app'));
