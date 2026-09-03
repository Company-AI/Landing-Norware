/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				/*
				 * Negro cálido, no obsidiana azulada y no papel.
				 *
				 * Historia corta de este archivo: la v4 era negro azulado con
				 * neón violeta y retícula de plano; la v5 lo pasó a papel claro
				 * suponiendo que las referencias eran claras. No lo eran:
				 * thoughtbot es un negro amarronado y basement es negro puro.
				 *
				 * O sea que lo oscuro nunca fue el problema. El problema era el
				 * VOCABULARIO —monoespaciada, índice 01/10, marcos de neón,
				 * grilla de plano—, y eso ya se fue y no vuelve.
				 *
				 * El nombre `paper` quedó del paso anterior. Sigue significando
				 * lo mismo: la superficie sobre la que se apoya todo.
				 */
				paper: {
					DEFAULT: '#14100E',
					2: '#1C1714',
					3: '#241D19',
				},

				// Tinta: blanco tibio, nunca blanco puro sobre negro.
				ink: {
					DEFAULT: '#F0EBE7',
					2: '#A79E97',
					3: '#8A817A',
				},

				// Hairlines: luz con alfa sobre el fondo cálido.
				line: {
					DEFAULT: 'rgba(240, 235, 231, 0.14)',
					soft: 'rgba(240, 235, 231, 0.08)',
					strong: 'rgba(240, 235, 231, 0.28)',
				},

				// Violeta de marca, aclarado para leerse sobre negro (6.6:1).
				order: {
					DEFAULT: '#A883FF',
					dim: '#7B54D6',
					wash: 'rgba(168, 131, 255, 0.13)',
				},
				depth: {
					DEFAULT: '#7AA2FF',
					dim: '#4B72D6',
					wash: 'rgba(122, 162, 255, 0.13)',
				},
				chaos: {
					DEFAULT: '#FF8A5C',
					dim: '#D25F33',
					wash: 'rgba(255, 138, 92, 0.13)',
				},
			},

			fontFamily: {
				/*
				 * Fraunces es una serif blanda con pesos reales: cálida,
				 * editorial y exactamente lo contrario a una geométrica de
				 * producto. Reemplaza a Space Grotesk, que empujaba todo el
				 * sitio hacia "herramienta para devs".
				 */
				display: ['Fraunces', 'Georgia', 'serif'],
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				serif: ['Fraunces', 'Georgia', 'serif'],
				/*
				 * `mono` ya no es monoespaciada. La clase se dejó con el mismo
				 * nombre a propósito: aparecía en 92 lugares y cambiar lo que
				 * SIGNIFICA saca la estética de terminal de toda la página sin
				 * tocar el marcado. Hoy es la etiqueta chica en versalitas.
				 */
				mono: ['Inter', 'system-ui', 'sans-serif'],
			},

			fontSize: {
				d1: ['clamp(2.6rem, 5.8vw, 4.9rem)', { lineHeight: '1.0', letterSpacing: '-0.032em' }],
				d2: ['clamp(2rem, 4.2vw, 3.3rem)', { lineHeight: '1.06', letterSpacing: '-0.026em' }],
				d3: ['clamp(1.4rem, 2.3vw, 2rem)', { lineHeight: '1.16', letterSpacing: '-0.014em' }],
			},

			borderRadius: {
				// Esquinas blandas: thoughtbot usa 27px en todo.
				card: '20px',
			},
		},
	},
	plugins: [],
};
