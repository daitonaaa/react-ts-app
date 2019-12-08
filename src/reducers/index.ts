import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import { StartReducer } from 'types/startReducer';

import start from './start';

export const reducers = {
	start,
};

export interface IApplicationState {
	start: StartReducer;
	router: RouterState;
}

export const rootReducer = (browserHistory: History) =>
	combineReducers<IApplicationState>({
		...reducers,
		router: connectRouter(browserHistory),
	});
