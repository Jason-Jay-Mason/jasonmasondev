<script lang="ts">
	import type { Config } from "$lib/game/types"
	import { Game } from "../game/"
	import { onMount } from "svelte"
	import { fade } from "svelte/transition"

	export let config: Config
	let canvas: HTMLCanvasElement
	let container: any
	let frame: number
	let wasResized = true

	function renderloop() {
		container = canvas.parentElement
		const game = Game.initialize({
			dom: {
				canvas: canvas,
				container: container
			},
			config: config
		})

		const loop = (f: number) => {
			if (wasResized) {
				canvas.width = container.clientWidth
				canvas.height = container.clientHeight
				game.globals.state.collision.resetGrid()
				wasResized = false
			}
			game.update(f)
			frame = requestAnimationFrame(loop)
		}
		requestAnimationFrame(loop)

		return () => {
			cancelAnimationFrame(frame)
		}
	}
	function handleResize() {
		wasResized = true
	}

	onMount(renderloop)
</script>

<svelte:window on:resize|passive={handleResize} />
<canvas bind:this={canvas} transition:fade />

<style lang="scss">
	@import "../theme/breakpoints.scss";
	canvas {
		position: absolute;
		top: 0;
		height: 100%;
		width: 100%;
		z-index: 10;
	}
</style>
