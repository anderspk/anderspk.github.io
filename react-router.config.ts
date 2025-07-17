import type { Config } from '@react-router/dev/config';

export default {
	ssr: true,
	prerender: true,
	routeDiscovery: { mode: 'initial' },
} satisfies Config;
