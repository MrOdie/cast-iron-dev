/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif']
		},
		extend: {
			gridTemplateColumns: {
				standard: '1fr 8fr 1fr',
				'standard-mobile': '15px 8fr 15px'
			},
			screens: {
				// additional media queries because I like flexibility
				'only-sm': { min: '640px', max: '767px' },
				// => @media (min-width: 640px and max-width: 767px) { ... }

				'only-md': { min: '768px', max: '1023px' },
				// => @media (min-width: 768px and max-width: 1023px) { ... }

				'only-lg': { min: '1024px', max: '1279px' },
				// => @media (min-width: 1024px and max-width: 1279px) { ... }

				'only-xl': { min: '1280px', max: '1535px' },
				// => @media (min-width: 1280px and max-width: 1535px) { ... }

				'only-2xl': { min: '1536px' },

				// additional media queries because I like flexibility
				'to-sm': { max: '767px' },
				// => @media (max-width: 767px) { ... }

				'to-md': { max: '1023px' },
				// => @media (max-width: 1023px) { ... }

				'to-lg': { max: '1279px' },
				// => @media (max-width: 1279px) { ... }

				'to-xl': { max: '1535px' },
				// => @media (max-width: 1535px) { ... }

				'to-2xl': { min: '1536px' },

				// Starting the inverse of the standard tailwind media queries bc i hate them.
				'max-xs': { max: '639px' },

				'max-sm': { max: '767px' },
				// => @media (max-width: 767px) { ... }

				'max-md': { max: '1023px' },
				// => @media (max-width: 1023px) { ... }

				'max-lg': { max: '1279px' },
				// => @media (max-width: 1279px) { ... }

				'max-xl': { max: '1535px' },
				// => @media (max-width: 1535px) { ... }
				'max-2xl': { min: '1536px' }
			},
			dropShadow: {
				light: '0 0 .75rem rgba(255, 255, 255, .7)',
				dark: '0 0 .75rem rgba(0, 0, 0, .7)'
			},
			textShadowWhite: {
				sm: '0 1px 2px #eee',
				DEFAULT: '1px 2px #eee',
				lg: '0 8px 16px #eee'
			},
			colors: {
				black: {
					DEFAULT: '#000000',
					100: '#000000',
					200: '#000000',
					300: '#000000',
					400: '#000000',
					500: '#000000',
					600: '#333333',
					700: '#666666',
					800: '#999999',
					900: '#cccccc'
				},
				rich_black: {
					DEFAULT: '#0c1821',
					100: '#020507',
					200: '#050a0d',
					300: '#070f14',
					400: '#0a141b',
					500: '#0c1821',
					600: '#254a66',
					700: '#3d7baa',
					800: '#77a8ce',
					900: '#bbd3e6'
				},
				oxford_blue: {
					DEFAULT: '#1b2a41',
					100: '#05080d',
					200: '#0b111a',
					300: '#101927',
					400: '#162234',
					500: '#1b2a41',
					600: '#34517c',
					700: '#4e77b5',
					800: '#89a5ce',
					900: '#c4d2e6'
				},
				charcoal: {
					DEFAULT: '#324a5f',
					100: '#0a0f13',
					200: '#141d25',
					300: '#1e2c38',
					400: '#273a4b',
					500: '#324a5f',
					600: '#4b6e8e',
					700: '#6f93b3',
					800: '#9fb7cc',
					900: '#cfdbe6'
				},
				w: {
					DEFAULT: '#eee'
				},
				b: {
					DEFAULT: '#333'
				}
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			},
			animation: {
				wiggle: 'wiggle 200ms ease-in-out'
			}
		}
	},
	plugins: []
};
