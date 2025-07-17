import { reactRouter } from '@react-router/dev/vite';
import devtoolsJson from 'vite-plugin-devtools-json';

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [devtoolsJson(), reactRouter(), tsconfigPaths()],
});
