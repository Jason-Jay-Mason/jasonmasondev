<script lang="ts">
	export let headline: string
</script>

<div class={headline === "done" ? "column span-2-rows" : "column"}>
	<h5 class="title">{headline}</h5>
	<div class="cards">
		<slot />
	</div>
</div>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	.span-2-rows {
		grid-column: 1;
		grid-row: 3;
		@include md {
			grid-column: 2;
			grid-row: 1 / span 2;
		}
		@include xl {
			grid-column: 3;
			grid-row: 1;
		}
	}
	.column {
		border: solid 4px var(--color-rock-200);
		background-image: url("/lines.svg");
		background-size: 120%;
		.title {
			width: 100%;
			text-align: center;
			font-family: var(--font-headline);
			font-size: 2.1rem;
			font-weight: 700;
			letter-spacing: 3.36px;
			background-color: var(--color-rock-200);
			color: var(--color-bg-primary);
			text-transform: uppercase;
			padding: var(--s-3) 0;
		}
		.cards {
			background-color: var(--color-column);
			max-height: 800px;
			height: 100%;
			overflow: scroll;
			display: flex;
			flex-direction: column;
			padding: var(--s-6) var(--s-6);
			@include xl {
				height: 700px;
			}
		}
	}
</style>
