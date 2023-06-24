<script lang="ts">
	import type { GridLinkData } from "$lib/types"

	export let link: GridLinkData
	const { href, headline, hook } = link
</script>

<a {href} class="gridlink rainbow-hover">
	<div class="container">
		<h3>{headline}</h3>
		<p>{hook}</p>
	</div>
</a>

<style lang="scss">
	@import "../theme/breakpoints.scss";
	.gridlink {
		z-index: 10;
		position: relative;
		display: inline-block;
		margin: 0 auto;
		background-color: var(--color-bg-primary);
		border: 4px solid var(--color-rock-300);
		width: 100%;
		h3 {
			color: var(--color-rock-200);
			font-family: var(--font-headline);
			font-size: 2em;
			padding-bottom: var(--s-5);
			line-height: 100%;
			letter-spacing: 0.2rem;
			text-transform: uppercase;
		}
		&:hover {
			h3 {
				color: var(--color-rock-100);
			}
			border-color: var(--color-rock-100);
		}
		.container {
			background-color: var(--color-bg-primary);
			padding: var(--s-6) var(--s-7);
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
