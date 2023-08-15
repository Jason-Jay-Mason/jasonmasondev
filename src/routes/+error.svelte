<script lang="ts">
	import { Error, Mustachio } from "$lib/components"
	import { page } from "$app/stores"
	import { homeConfig } from "$lib/config/game-configs"

	let y = 1
	function handleParalax() {
		y = -0.01 * window.scrollY
	}
</script>

<div class="mustachio" style={`transform: translateY(${y}%)`}>
	<Mustachio config={homeConfig} />
</div>
<Error
	main={`${$page.status} ${$page.error?.message}`}
	sub={`👋 This isn't the page your looking for...`}
/>

<style lang="scss">
	@import "../lib/theme/breakpoints.scss";
	.mustachio {
		z-index: 6;
		display: none;
		position: absolute;
		height: 100vh;
		width: 100%;
		@include sm {
			display: inline-block;
		}
	}
</style>
