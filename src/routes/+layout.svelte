<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="mx-auto flex h-full w-full max-w-7xl flex-col justify-center p-4 sm:p-6 lg:p-8">
	{@render children()}
</div>
