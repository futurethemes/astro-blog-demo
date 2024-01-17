import { AstroBlogTailwindPaths } from 'astro-blog'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		...AstroBlogTailwindPaths,
	],
	theme: {
		extend: {},
	},
	plugins: [],
	darkMode: 'class',
}
