<script lang="ts">
	import type { HomeData } from "$lib/types"
	import { Hero, Mustachio, LinkGrid, Kanban, Contact } from "$lib/components"

	export let data: HomeData
	const { page, tasks } = data

	let y = 1
	function handleParalax() {
		y = -0.01 * window.scrollY
	}
</script>

<svelte:window on:scroll={handleParalax} />
<div class="mustachio" style={`transform: translateY(${y}%)`}>
	<Mustachio />
</div>
<Hero data={page.Hero} />
<LinkGrid links={page?.LinkGrid?.links} />
<Kanban {tasks} headline={page?.Kanban?.headline} />
<Contact headline={page?.Contact?.headline} endPoint={page?.Contact?.endPoint} />

<style lang="scss">
	.mustachio {
		z-index: 6;
		position: absolute;
		height: 1000px;
		width: 100%;
	}
</style>
