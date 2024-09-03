import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		cssMinify: true,
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				dead_code: true
			}
		}
	}
});
