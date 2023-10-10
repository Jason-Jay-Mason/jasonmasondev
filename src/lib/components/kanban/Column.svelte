<script lang="ts">
	export let headline: string
</script>

<div class={headline === "done" ? "column span-2-rows" : "column"}>
	<h5 class="title">{headline}</h5>
	<div class="cards">
		<slot />

		{#if headline === "backlog"}
			<a href="/#contact">
				<button class="add-project">+ Add One</button>
			</a>
		{/if}
	</div>
</div>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	.span-2-rows {
		grid-column: 1;
		grid-row: 3;
		.cards {
			max-height: 400px;
		}
		@include md {
			grid-column: 2;
			grid-row: 1 / span 2;
			.cards {
				max-height: 1020px;
			}
		}
		@include xl {
			grid-column: 3;
			grid-row: 1;
		}
	}
	.column {
		position: relative;
		height: 100%;
		border: solid 1px var(--color-rock-700);
		background-image: url("/lines.svg");
		background-size: 120%;
		overflow: hidden;
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
			overflow: scroll;
			padding: var(--s-6) var(--s-6);
			background-color: var(--color-bg-pencil-overlay);
			@include xl {
				height: 700px;
			}
		}
		.add-project {
			font-size: 1.1rem;
			font-family: var(--font-body);
			font-weight: 700;
			align-self: center;
			color: var(--color-rock-100);
			text-transform: uppercase;
			border: none;
			padding: var(--s-5) var(--s-6);
			margin: var(--s-4);
			background: none;
			transition: all 0.3s ease;
			&:hover {
				color: var(--color-bg-primary);
				background-color: var(--color-rock-100);
				cursor: pointer;
				opacity: 1;
			}
		}
	}
</style>
