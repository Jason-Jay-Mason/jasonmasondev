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
		border: solid 1px var(--color-rock-700);
		background-image: url("/lines.svg");
		background-size: 120%;
		.title {
			font-size: 2.1rem;
			font-family: var(--font-headline);
			width: 100%;
			text-align: center;
			font-weight: 700;
			letter-spacing: 3.36px;
			color: var(--color-bg-primary);
			text-transform: uppercase;
			background-color: var(--color-rock-100);
			padding: var(--s-3) 0;
		}
		.cards {
			display: flex;
			flex-direction: column;
			height: 100%;
			max-height: 800px;
			overflow: scroll;
			padding: var(--s-6) var(--s-6);
			background-color: var(--color-column);
			@include xl {
				height: 700px;
			}
		}
	}
</style>
