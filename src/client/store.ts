import { History } from 'history';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { IApplicationState, rootReducer } from 'reducers';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const isProductionBuild: boolean = process.env.NODE_ENV === 'production';

const getMiddlewares = (browserHistory: History) => {
	if (isProductionBuild) return applyMiddleware(
		routerMiddleware(browserHistory),
		thunkMiddleware
	);

	const composeEnhancers = composeWithDevTools({ serialize: true });

	return composeEnhancers(
		applyMiddleware(
			routerMiddleware(browserHistory),
			thunkMiddleware,
			logger
		)
	);
};

export default function(
	initialState: IApplicationState,
	browserHistory: History
): Store<IApplicationState> {
	return createStore(
		rootReducer(browserHistory),
		initialState,
		getMiddlewares(browserHistory)
	);
}
