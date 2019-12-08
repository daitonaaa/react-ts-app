import { ComponentType } from 'react';
import { RouteConfig } from 'react-router-config';

export interface IRoutes {
	routes: RouteConfig[];
	component: ComponentType;
}
