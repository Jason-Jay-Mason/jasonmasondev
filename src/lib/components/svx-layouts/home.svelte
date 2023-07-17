<script>
	import { Hero, Mustachio, LinkGrid, Kanban, ContactNew } from "$lib/components"

	export let hero
	export let links
	export let kanban
	export let contact
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
<ContactNew headline={contact.headline} />

<style lang="scss">
	.mustachio {
		z-index: 6;
		position: absolute;
		height: 120vh;
		width: 100%;
	}
</style>
