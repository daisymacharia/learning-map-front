import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import Root from './routes/routes';
import configureStore from './store/store';

const store = configureStore({});

render(<Root store={store} />, document.getElementById('app'));
