<script lang="ts">
	import { Mustachio } from "$lib/components"
	import { mustachioConfig } from "$lib/config/game-configs"

	let height
</script>

<div class="container" bind:clientHeight={height}>
	{#if height}
		<Mustachio config={mustachioConfig} />
	{/if}
</div>

<style lang="scss">
	.container {
		position: relative;
		height: 98vh;
		width: 100%;
	}
</style>
