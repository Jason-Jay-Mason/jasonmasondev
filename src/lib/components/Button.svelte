<script lang="ts">
	export let href: string | undefined = undefined
	type Width = "full" | "fit-content"
	export let width: Width = "fit-content"
	export let type: "button" | "submit" | undefined = undefined
	export let target: string | undefined = undefined
</script>

{#if type}
	<button
		{type}
		class="rainbow-hover"
		class:fullWidth={width === "full"}
		class:fit-content={width === "fit-content"}><slot /></button
	>
{:else}
	<a {href} {target}>
		<button
			class="rainbow-hover"
			class:full={width === "full"}
			class:fit-content={width === "fit-content"}
			><slot />
		</button>
	</a>
{/if}

<style lang="scss">
	@import "../theme/breakpoints.scss";
	.full {
		width: 100%;
		margin: 0 auto;
	}
	.fit-content {
		width: fit-content;
	}
	button {
		position: relative;
		font-size: 1.2rem;
		letter-spacing: 0.11em;
		font-family: var(--font-headline);
		font-weight: 900;
		color: var(--color-text-body);
		text-transform: capitalize;
		box-shadow: none;
		padding: var(--s-5) var(--s-8);
		border: 3px solid var(--color-rock-100);
		background-color: var(--color-bg-field);
		@include xs {
			padding: var(--s-4) var(--s-8);
			font-size: 1.4rem;
		}
		@include sm {
			font-size: 1.5rem;
		}
		&:hover {
			cursor: pointer;
		}
	}
</style>
