<script lang="ts">
	import type { HomeData, ClickupTask } from "$lib/types"
	import { Hero, Mustachio, LinkGrid, Kanban, Contact } from "$lib/components"
	import { homeConfig } from "$lib/config/game-configs"

	export let page: HomeData
	export let tasks: ClickupTask[]

	let y = 1
	let bottom = false
	let body: HTMLDivElement
	function handleParalax() {
		if (window.scrollY > body.clientHeight / 2) {
			bottom = true
			y = -0.025 * window.scrollY
		} else {
			bottom = false
			y = -0.01 * window.scrollY
		}
	}
</script>

<svelte:window on:scroll={handleParalax} />
<div class="blob" bind:this={body}>
	<div class="mustachio" class:bottom style={`transform: translateY(${y}%)`}>
		<Mustachio config={homeConfig} />
	</div>
	<Hero data={page.Hero} />
	<LinkGrid links={page?.LinkGrid?.links} />
	<Kanban {tasks} headline={page?.Kanban?.headline} />
	<Contact headline={page?.Contact?.headline} endPoint={page?.Contact?.endPoint} />
</div>

<style lang="scss">
	.blob {
		position: relative;
	}
	.mustachio {
		z-index: 6;
		position: absolute;
		top: 0;
		height: 1200px;
		width: 100%;
	}
	.bottom {
		top: auto;
		bottom: -1200px;
	}
</style>
