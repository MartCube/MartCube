import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
		screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
		colors:{
			primary: '#19f9d8',
			white: "#F5F5F5",
			dark: "#17171d",
			dark2: "#1f1f27",
			dark3: "#24242E",
			greyLight: '#A4A4B7',
			greyDark: '#363645',
			error: '#ff006e',
		},
		fontFamily:{
			sans: ['Roboto', ...defaultTheme.fontFamily.sans],
		},
		fontSize: {
			'base': ['1rem', {
        lineHeight: '1.25rem',
        letterSpacing: '0',
        fontWeight: '400',
      }],
			'subtitle': ['1.5rem', {
        lineHeight: '1.75rem',
        letterSpacing: '0',
        fontWeight: '300',
      }],
			'title': ['2rem', {
        lineHeight: '2.25rem',
        letterSpacing: '0.1rem',
        fontWeight: '300',
      }],
    },
		extend:{
			spacing: {
				0.5: '0.5rem',
				0.75: '0.75rem',
				1: '1rem',
				1.5: '1.5rem',
				2: '2rem',
				4: '4rem',
				5: '5rem',
				'10%': '10%', 
			},
			maxWidth: {
        'section': '52rem',
      }
		}
	},
  plugins: [],
	content: [
		`./src/components/**/*.{vue,js,ts}`,
    `./src/pages/**/*.vue`,
    `./src/app.{js,ts,vue}`,
    `./src/error.{js,ts,vue}`,
	],
}