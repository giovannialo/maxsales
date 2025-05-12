import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	server: { host: true },
	define: {
		__DATE__: `'${new Date().toISOString()}'`
	},
	plugins: [
		tailwindcss(),
		sveltekit(),
		SvelteKitPWA({
			srcDir: './src',
			mode: 'development',
			strategies: 'generateSW',
			scope: '/',
			base: '/',
			selfDestroying: false,
			pwaAssets: {
				config: true
			},
			manifest: {
				name: 'MaxSales',
				short_name: 'MaxSales',
				description: 'MaxSales é um sistema de força de vendas que permite a gestão de vendas.',
				start_url: '/',
				scope: '/',
				lang: 'pt-BR',
				display: 'minimal-ui',
				background_color: '#ffffff',
				theme_color: '#09090B'
			},
			workbox: {
				globPatterns: ['**/*.{js,css,ico,png,svg,webp,woff,woff2}', 'prerendered/**/*.{html,json}']
			},
			devOptions: {
				enabled: true,
				type: 'module',
				navigateFallback: '/',
				suppressWarnings: false
			},
			kit: {
				includeVersionFile: true
			}
		})
	]
});
