import { History } from 'history';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'redux';

import { IApplicationState } from 'reducers';

import Root from './Root';
import createStore from './store';
import * as sw from './sw';

import 'styles/css/iconic-font.css';
import 'styles/css/normalize.css';


const initialState = window.__INITIAL_STATE__ || {};
const browserHistory: History = createBrowserHistory();
const store: Store<IApplicationState> = createStore(initialState, browserHistory);

ReactDOM.render(
	<Root store={store} history={browserHistory} />,
	document.getElementById('root') || document.createElement('div')
);

sw.register({
	onUpdate: () => window.location.reload(),
});
