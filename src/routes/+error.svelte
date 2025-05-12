<script>
	import { page } from '$app/state';
	import { emojis } from '$lib/emojis';
</script>

<div class="flex flex-1 flex-col items-center justify-center">
	<div class="max-w-lg text-center">
		<span style="font-size: 8em">{emojis[page.status] ?? emojis[500]}</span>
		<h1 class="text-3xl font-semibold sm:text-2xl">{page.status} - {page.error?.message}</h1>
	</div>
</div>
