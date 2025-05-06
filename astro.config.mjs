import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
// @ts-check
import { defineConfig } from 'astro/config';
// https://astro.build/config
export default defineConfig({
	site: 'https://template-landing-page-xi.vercel.app/',

	vite: {
		plugins: [tailwindcss()],
	},

	experimental: {
		svg: {
			mode: 'sprite',
		},
	},

	integrations: [sitemap()],
});
