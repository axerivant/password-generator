/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				900: '#0E1010',
				700: '#131515',
				500: '#1E2020',
				accent: '#A4C5BD',
				dim: '#44514F'
			}
		}
	},
	plugins: []
}
