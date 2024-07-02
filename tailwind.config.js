/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-bg': 'rgba(66, 132, 234, 0.8)',
				'gray-20': '#F8F4EB',
				'gray-30': 'rgba(132, 132, 132, 0.9)',
			},
			backgroundImage: {
				hero: "url('./src/images/window-cleaning.png')",
			},
		},
		fontFamily: {
			primary: ['Poppins', 'sans-serif'],
		},
		screens: {
			xs: '480px',
			sm: '768px',
			md: '1060px',
		},
	},
	plugins: [],
};
