<script lang="ts">
	import { onMount } from 'svelte';
	let container: HTMLDivElement;
	onMount(() => {
		let script = document.createElement('script');
		script.src = 'https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js';
		container.appendChild(script);
	});
</script>

<div bind:this={container} />
