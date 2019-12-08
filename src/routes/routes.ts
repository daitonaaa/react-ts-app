import url from './urls';
import { IRoutes } from "./types";
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';

import Layout from 'components/Layout';

import {
	Home,
	Login,
	NotFound,
} from 'components/pages';

const loginOrLayout = () => connectedAuthWrapper<any>({
	authenticatedSelector: () => true,
	wrapperDisplayName: 'loginOrLayout',
	FailureComponent: Login,
})(Layout);


const routes: IRoutes[] = [
	{
		component: loginOrLayout(),
		routes: [
			{
				...url.home,
				title: 'Home',
				component: Home,
			},
			{
				component: NotFound,
			}
		]
	}
];

export default routes;
