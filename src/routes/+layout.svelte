<script lang="ts">
	import { page } from '$app/state';
	import { pwaAssetsHead } from 'virtual:pwa-assets/head';
	import { pwaInfo } from 'virtual:pwa-info';
	import '../app.css';

	let { children } = $props();

	const webManifest = $derived(pwaInfo ? pwaInfo.webManifest.linkTag : '');
</script>

<svelte:head>
	{#if pwaAssetsHead.themeColor}
		<meta name="theme-color" content={pwaAssetsHead.themeColor.content} />
	{/if}
	{#each pwaAssetsHead.links as link}
		<link {...link} />
	{/each}
	{@html webManifest}
</svelte:head>

<div class="flex min-h-full flex-col">
	<nav class="flex h-16 shrink-0 items-center justify-center gap-x-4 border-b border-zinc-200">
		<a href="/" class="font-semibold" aria-current={page.url.pathname === '/'}>Home</a>
		<a href="/about" class="font-semibold" aria-current={page.url.pathname === '/about'}>About</a>
		<a
			href="/products"
			class="font-semibold"
			aria-current={page.url.pathname.startsWith('/products')}>Products</a
		>
	</nav>

	<div class="mx-auto flex w-full max-w-7xl flex-1 flex-col p-4 sm:p-6 lg:p-8">
		{@render children()}
	</div>
</div>

{#await import('$lib/components/ui/ReloadPrompt.svelte') then { default: ReloadPrompt }}
	<ReloadPrompt />
{/await}

<style>
	[aria-current='true'] {
		color: var(--color-blue-500);
	}
</style>
