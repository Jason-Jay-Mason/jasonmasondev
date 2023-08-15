<script lang="ts">
	export let main: string = "404 Page Not Found"
	export let sub: string = "Oops, it looks like this page doesn't exist."
</script>

<section>
	<h1>{main}</h1>
	<p>
		{sub}
	</p>
</section>

<style lang="scss">
	@import "../theme/breakpoints.scss";
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: $lg;
		margin: 0 auto;
		height: 85vh;
		padding: 0 var(--s-7);
		text-align: center;
		@include sm {
			text-align: left;
		}
		h1 {
			font-size: var(--text-xl);
			font-family: var(--font-headline);
			color: var(--color-rock-100);
		}
		p {
			font-size: var(--text-md);
			color: var(--color-rock-100);
		}
	}
</style>
