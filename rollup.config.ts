import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import del from 'rollup-plugin-delete';
import nodeExternals from 'rollup-plugin-node-externals';

export default defineConfig({
	input: './src/index.ts',
	output: {
		dir: './dist',
		externalLiveBindings: false,
		format: 'cjs',
		generatedCode: {
			arrowFunctions: true,
			constBindings: true,
			objectShorthand: true
		},
		interop: 'compat',
		preserveModules: true,
		preserveModulesRoot: './src'
	},
	plugins: [
		del({ targets: './dist' }),
		nodeExternals({
			include: [
				'hono/hono-base',
				'hono/logger',
				'hono/types'
			]
		}),
		nodeResolve(),
		typescript()

	]
});
