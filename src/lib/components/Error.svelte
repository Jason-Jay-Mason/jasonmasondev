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
		width: 100%;
		max-width: $lg;
		margin: 0 auto;
		height: 85vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 var(--s-7);
		h1 {
			color: var(--color-rock-100);
			font-family: var(--font-headline);
			font-size: var(--text-xl);
		}
		p {
			color: var(--color-rock-100);
			font-size: var(--text-md);
		}
	}
</style>
