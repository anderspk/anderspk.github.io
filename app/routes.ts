import {
	type RouteConfig,
	index,
	layout,
	prefix,
} from '@react-router/dev/routes';
import { flatRoutes } from '@react-router/fs-routes';

export default [
	layout('routes/layout/layout.tsx', [
		index('routes/home.tsx'),
		...prefix('/project', [
			...(await flatRoutes({
				rootDirectory: 'content/projects/in-development',
			})),
			...(await flatRoutes({ rootDirectory: 'content/projects/live' })),
		]),
	]),
] satisfies RouteConfig;
