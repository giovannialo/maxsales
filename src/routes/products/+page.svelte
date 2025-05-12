<script lang="ts">
	import { onMount } from 'svelte';
	import { productStore } from '$lib/stores/product';

	let { data } = $props();

	let products = $derived(data.products);

	onMount(() => {
		const unsubscribe = productStore.subscribe((cached) => {
			if (cached.length) {
				products = cached;
			}
		});

		return () => {
			unsubscribe();
		};
	});
</script>

<h1 class="text-3xl font-semibold sm:text-2xl">Products</h1>
<p class="mt-2 text-sm text-zinc-500">Explore our range of products.</p>

<div class="mt-4">
	{#if products.length === 0}
		<p class="mt-4 text-sm text-zinc-500">No products available.</p>
	{:else}
		<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each products as product (product.idProduto)}
				<li
					class="relative flex min-h-30 flex-col rounded-lg border border-zinc-300 p-4 shadow-sm hover:shadow-md"
				>
					<a href={'/products/' + product.idProduto} class="absolute inset-0">
						<span class="sr-only">{product.descricao}</span>
					</a>
					<h2 class="shrink text-lg font-semibold">{product.descricao}</h2>
					<p class="mt-auto text-sm text-zinc-600">{product.codProd}</p>
				</li>
			{/each}
		</ul>
	{/if}
</div>
