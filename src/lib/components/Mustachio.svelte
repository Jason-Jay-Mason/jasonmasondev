<script lang="ts">
	import { onMount } from "svelte"
	import { homeConfig } from "../config/game-configs"
	import { Game } from "../game/"
	import type { Coordinate } from "$lib/game/types"
	import Contact from "./Contact.svelte"

	export let ySpawnPosition: number
	let canvas: HTMLCanvasElement
	let container: any
	let wasResized = true
	let frame: number

	function renderloop() {
		container = canvas.parentElement
		const game = Game.initialize({
			dom: {
				canvas: canvas,
				container: container
			},
			config: {
				...homeConfig,
				player: {
					...homeConfig.player,
					position: {
						x: container.clientWidth / 2,
						y: ySpawnPosition
					}
				}
			}
		})

		const loop = (f: number) => {
			if (wasResized) {
				canvas.width = container.clientWidth
				canvas.height = container.clientHeight
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
<canvas bind:this={canvas} />

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
