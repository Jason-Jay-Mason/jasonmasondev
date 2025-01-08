<script lang="ts">
	import type { GridLinkData } from "$lib/types"

	export let link: GridLinkData
	$: ({ href, headline, hook } = link)
</script>

<a {href} class="gridlink">
	<div class="container rainbow-hover">
		<h2>{headline}</h2>
		<p>{hook}</p>
	</div>
</a>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	.gridlink {
		position: relative;
		display: block;
		border: 4px solid var(--color-rock-100);
		width: 100%;
		height: 100%;
		h2 {
			font-size: 2em;
			font-family: var(--font-headline);
			color: var(--color-rock-100);
			line-height: 100%;
			letter-spacing: 0.2rem;
			text-transform: uppercase;
			padding-bottom: var(--s-5);
		}
		.container {
			padding: var(--s-6) var(--s-7);
			background-color: var(--color-bg-card);
			height: 100%;
			@include sm {
				padding: var(--s-7) var(--s-8);
			}
			p {
				font-size: 12px;
				padding-bottom: var(--s-2);
			}
		}
	}
</style>
