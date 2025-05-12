<script lang="ts">
	import { useRegisterSW } from 'virtual:pwa-register/svelte';

	// replaced dynamically
	const buildDate = __DATE__;

	const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
		onRegisteredSW(swUrl, registration) {
			registration &&
				setInterval(async () => {
					if (registration.installing || !navigator) return;

					if ('connection' in navigator && !navigator.onLine) return;

					const resp = await fetch(swUrl, {
						cache: 'no-store',
						headers: {
							cache: 'no-store',
							'cache-control': 'no-cache'
						}
					});

					if (resp?.status === 200) await registration.update();
				}, 20000 /* 20s for testing purposes */);
		},
		onRegisterError(error) {
			console.log('SW registration error', error);
		}
	});
	const close = () => {
		offlineReady.set(false);
		needRefresh.set(false);
	};

	const toast = $derived($offlineReady || $needRefresh);
</script>

{#if toast}
	<div
		role="alert"
		class="fixed right-0 bottom-0 z-20 m-4 rounded-2xl border border-zinc-200 bg-white p-3 shadow-lg"
	>
		<div class="mb-2 text-sm">
			{#if $offlineReady}
				<span>App ready to work offline</span>
			{:else}
				<span>New content available, click on reload button to update.</span>
			{/if}
		</div>

		<div class="space-x-2">
			{#if $needRefresh}
				<button
					onclick={() => updateServiceWorker(true)}
					class="rounded-2xl border border-zinc-400 px-2 py-2 text-sm">Reload</button
				>
			{/if}
			<button class="rounded-2xl border border-zinc-400 px-2 py-2 text-sm" onclick={close}
				>Close</button
			>
		</div>
	</div>
{/if}

<div class="invisible">
	{buildDate}
</div>
