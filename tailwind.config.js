/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#ff7f00", // Orange as primary color
					'primary-content': "#ffffff", // White text on primary color
					secondary: "#008080", // Light grey as secondary color
					'secondary-content': "#ffffff", 
					neutral: "#3d4451", // Default neutral color for other elements
					'base-100': "#ffffff", // Base background color
				}
			},
			'light'
		] 
	}
};
