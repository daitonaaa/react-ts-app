import React from 'react';
import { Store } from 'redux';
import { History } from 'history';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { ConnectedRouter } from 'connected-react-router';

import { IApplicationState } from 'reducers';

import routes from 'routes/routes';

interface IMainProps {
	history: History;
	store: Store<IApplicationState>;
}

const Root: React.FC<IMainProps> = ({ store, history }) => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			{renderRoutes(routes)}
		</ConnectedRouter>
	</Provider>
);

export default hot(module)(Root);
