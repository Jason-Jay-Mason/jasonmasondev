<script lang="ts">
	import type { Cta } from "$lib/types"
	import { windowScroll } from "../../lib/actions/window-scroll"
	import { Hero } from "$lib/components"
	import Mustachio from "$lib/components/Mustachio.svelte"

	const cta: Cta = {
		hrefOrSrc: "/",
		innerText: "LET'S TALK",
		isVideo: false
	}
	const hook =
		" What’s up! I’m a web developer and marketer building highly customized Martech stacks. Click the button below and let’s talk about how I can knock out your next project. "
	const headline = "JASON MASON"

	let y = 1
	function hanldeParalax() {
		y = 0.2 * window.scrollY
	}
</script>

<svelte:window on:scroll={hanldeParalax} />
<div class="mustachio" style={`transform: translateY(${y}px)`}>
	<Mustachio />
</div>
<Hero {cta} {hook} {headline} />
<div class="test" />

<style lang="scss">
	@import "../../lib/theme/breakpoints.scss";
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
