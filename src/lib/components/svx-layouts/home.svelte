<script>
	import { Hero, Mustachio, LinkGrid } from "$lib/components"

	export let hero
	export let links

	let y = 1
	function handleParalax() {
		y = 0.2 * window.scrollY
	}
</script>

<svelte:window on:scroll={handleParalax} />
<!-- <div class="mustachio" style={`transform: translateY(${y}px)`}> -->
<!-- 	<Mustachio /> -->
<!-- </div> -->
<Hero cta={hero.cta} hook={hero.hook} headline={hero.headline} />
<LinkGrid {links} />

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
