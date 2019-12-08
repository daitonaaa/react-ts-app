import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { IRoutes } from 'routes/types';

interface IOwnProps {
	route: IRoutes;
}

type Props = IOwnProps;


class Layout extends Component<Props> {

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		console.log(error, errorInfo);
	}

	render() {
		const { route } = this.props;

		return (
			<>
				{renderRoutes(route.routes)}
			</>
		);
	}
}


export default Layout;
