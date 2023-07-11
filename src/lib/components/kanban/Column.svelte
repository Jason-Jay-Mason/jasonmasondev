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
		background-size: cover;
		border: solid 4px var(--color-rock-100);
		.title {
			width: 100%;
			text-align: center;
			font-family: var(--font-headline);
			font-size: var(--text-md);
			letter-spacing: 3.36px;
			background-color: var(--color-rock-100);
			color: var(--color-bg-primary);
			text-transform: uppercase;
		}
		.cards {
			display: flex;
			flex-direction: column;
			padding: var(--s-5) var(--s-6);
		}
	}
</style>
