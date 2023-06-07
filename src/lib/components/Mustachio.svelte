<script lang="ts">
	let canvas: HTMLCanvasElement;
</script>

<canvas bind:this={canvas} />

<style lang="scss">
	@import '../theme/breakpoints.scss';
	canvas {
		background-color: grey;
		position: absolute;
		top: 0;
		height: 100vh;
		width: 100%;
		z-index: 10;
	}
</style>
