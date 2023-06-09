<script lang="ts">
	import { Mustachio } from "$lib/components"
	let container: HTMLDivElement
</script>

<div class="container" bind:this={container}>
	<Mustachio {container} />
</div>

<style lang="scss">
	.container {
		height: 100vh;
		width: 100%;
	}
	h1 {
		font-size: 100px;
	}
</style>
