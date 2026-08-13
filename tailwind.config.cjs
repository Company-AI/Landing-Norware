/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Obsidiana: tres profundidades para dar ritmo entre secciones.
				void: {
					DEFAULT: '#05060A',
					2: '#070910',
					3: '#0A0D15',
				},
				panel: '#0A0D14',

				ink: {
					DEFAULT: '#EDF1F7',
					2: '#98A2B3',
					3: '#5D6675',
				},

				// Acento principal: el violeta de la marca.
				// (El token sigue llamándose `order` porque su rol semántico
				//  en la página es "orden / solución".)
				order: {
					DEFAULT: '#9B5CFF',
					dim: '#6B33C9',
				},
				// Secundario: el azul del degradé del isotipo.
				depth: {
					DEFAULT: '#4C6EF5',
					dim: '#3550C7',
				},
				// Desorden / dolor
				chaos: {
					DEFAULT: '#FF6A45',
					dim: '#C24428',
				},
			},

			fontFamily: {
				display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				serif: ['"Instrument Serif"', 'Georgia', 'serif'],
				mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace'],
			},

			fontSize: {
				d1: ['clamp(2.6rem, 6vw, 5.25rem)', { lineHeight: '0.94', letterSpacing: '-0.038em' }],
				d2: ['clamp(2rem, 4.4vw, 3.75rem)', { lineHeight: '1.02', letterSpacing: '-0.032em' }],
				d3: ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.024em' }],
			},
		},
	},
	plugins: [],
};
