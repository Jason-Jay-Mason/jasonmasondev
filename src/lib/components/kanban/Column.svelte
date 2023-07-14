<script lang="ts">
	export let headline: string
</script>

<div class="column">
	<h5 class="title">{headline}</h5>
	<div class="cards">
		<slot />
	</div>
</div>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	.column {
		background-image: url("/pencil-bg.svg");
		background-size: 200%;
		border: solid 4px var(--color-rock-100);
		margin-bottom: var(--s-8);
		.title {
			width: 100%;
			text-align: center;
			font-family: var(--font-headline);
			font-size: 2.1rem;
			font-weight: 700;
			letter-spacing: 3.36px;
			background-color: var(--color-rock-100);
			color: var(--color-bg-primary);
			text-transform: uppercase;
			padding: var(--s-3) 0;
		}
		.cards {
			height: 700px;
			overflow: scroll;
			display: flex;
			flex-direction: column;
			padding: var(--s-5) var(--s-6);
		}
	}
</style>
