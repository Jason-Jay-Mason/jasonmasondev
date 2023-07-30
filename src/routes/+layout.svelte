<script lang="ts">
	import type { LayoutData } from "./$types"
	import { Nav, Footer } from "$lib/components"
	import { page } from "$app/stores"

	export let data: LayoutData
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&family=Pragati+Narrow:wght@400;700&family=Qwigley&display=swap"
		rel="stylesheet"
	/><meta name="robots" content="noindex" /><meta name="googlebot" content="noindex" />
</svelte:head>

{#if $page.error}
	<Nav />
	<slot />
	<Footer legal={data.legal} />
{:else}
	<slot />
{/if}

<style lang="scss" global>
	@import "../global.scss";
</style>
