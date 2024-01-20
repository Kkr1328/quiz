import type { Config } from 'tailwindcss';

const config: Config = {
	important: '#__next',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				istok: ['var(--font-istok-web)'],
			},
			fontSize: {
				h1: ['36px', { lineHeight: '52px', fontWeight: '700' }],
				h2: ['12px', { lineHeight: '17px', fontWeight: '700' }],
				p1: ['28px', { lineHeight: '40px', fontWeight: '400' }],
				p2: ['20px', { lineHeight: '29px', fontWeight: '400' }],
			},
			colors: {
				black: '#000000',
				grey: '#C9C9C9',
				white: '#FFFFFF',
				light_green: '#ACEFD7',
				green: '#006224',
				dark_green: '#005B21',
			},
			spacing: {
				'0': '0',
				'2': '2px',
				'4': '4px',
				'8': '8px',
				'12': '12px',
				'16': '16px',
				'24': '24px',
				'32': '32px',
				'40': '40px',
				'48': '48px',
				'64': '64px',
				'72': '72px',
				'80': '80px',
			},
			borderRadius: {
				none: '0px',
				md: '12px',
				lg: '36px',
			},
			dropShadow: {
				md: '0px 0px 20px #ACEFD7',
				lg: '0px 0px 20px #006224',
				xl: '0px 4px 40px #006224',
			},
		},
	},
	plugins: [],
};
export default config;
