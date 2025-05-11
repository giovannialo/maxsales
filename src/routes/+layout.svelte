<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex min-h-full flex-col">
	<nav class="flex h-16 shrink-0 items-center justify-center gap-x-4">
		<a href="/" class="font-semibold" aria-current={page.url.pathname === '/'}>Home</a>
		<a href="/about" class="font-semibold" aria-current={page.url.pathname === '/about'}>About</a>
	</nav>

	<div class="mx-auto flex w-full max-w-7xl flex-1 flex-col p-4 sm:p-6 lg:p-8">
		{@render children()}
	</div>
</div>

<style>
	[aria-current='true'] {
		color: var(--color-blue-500);
	}
</style>
