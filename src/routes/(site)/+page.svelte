<script lang="ts">
	import type { HomeData } from "$lib/types"
	import { Hero, Mustachio, LinkGrid, Kanban, Contact, Seo } from "$lib/components"
	import { homeConfig } from "$lib/config/game-configs"

	export let data: HomeData
	const { page, tasks } = data

	let y = 1
	function handleParalax() {
		y = -0.01 * window.scrollY
	}
</script>

<Seo data={data.page.seo} />

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
		height: 1000px;
		width: 100%;
	}
</style>
