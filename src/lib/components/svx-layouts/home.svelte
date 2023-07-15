<script>
	import { Hero, Mustachio, LinkGrid, Kanban } from "$lib/components"

	export let hero
	export let links
	export let kanban
	export let data

	let y = 1
	function handleParalax() {
		y = -0.15 * window.scrollY
	}
</script>

<svelte:window on:scroll={handleParalax} />
<div class="mustachio" style={`transform: translateY(${y}px)`}>
	<Mustachio />
</div>
<Hero cta={hero.cta} hook={hero.hook} headline={hero.headline} />
<LinkGrid {links} />
<Kanban tasks={data.tasks} headline={kanban.headline} />

<style lang="scss">
	.mustachio {
		z-index: 6;
		position: absolute;
		height: 120vh;
		width: 100%;
	}
	.test {
		height: 200vh;
	}
</style>
