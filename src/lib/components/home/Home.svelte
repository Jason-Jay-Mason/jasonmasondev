<script lang="ts">
	import type { HomeData, ClickupTask } from "$lib/types"
	import { Hero, Mustachio, LinkGrid, Kanban, Contact } from "$lib/components"
	import { homeConfig } from "$lib/config/game-configs"

	export let page: HomeData
	export let tasks: ClickupTask[]

	let y = 1
	function handleParalax() {
		y = -0.01 * window.scrollY
	}
</script>

<svelte:window on:scroll={handleParalax} />
<div class="mustachio" style={`transform: translateY(${y}%)`}>
	<Mustachio config={homeConfig} />
</div>
<Hero data={page.Hero} />
<LinkGrid links={page?.LinkGrid?.links} />
<Kanban {tasks} headline={page?.Kanban?.headline} />
<Contact headline={page?.Contact?.headline} endPoint={page?.Contact?.endPoint} />

<style lang="scss">
	.mustachio {
		z-index: 6;
		position: absolute;
		height: 1200px;
		width: 100%;
	}
</style>
