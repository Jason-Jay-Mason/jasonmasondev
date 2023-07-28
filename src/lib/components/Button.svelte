<script lang="ts">
	export let href: string | undefined = undefined
	export let selected: boolean = false
	type Width = "full" | "fit-content"
	export let width: Width = "fit-content"
	export let type: "button" | "submit" | undefined = undefined
	export let target: string | undefined = undefined
</script>

{#if type}
	<button
		{type}
		class:selected={selected === true}
		class:fullWidth={width === "full"}
		class:fit-content={width === "fit-content"}><slot /></button
	>
{:else}
	<a {href} {target}>
		<button
			class:full={width === "full"}
			class="rainbow-hover"
			class:fit-content={width === "fit-content"}
			><slot />
		</button>
	</a>
{/if}

<style lang="scss">
	@import "../theme/breakpoints.scss";
	.full {
		width: 98%;
	}
	.fit-content {
		width: fit-content;
	}
	button {
		position: relative;
		text-transform: capitalize;
		box-shadow: none;
		font-size: 1rem;
		color: var(--color-text-body);
		letter-spacing: 0.11em;
		font-family: var(--font-headline);
		font-weight: 900;
		border: 3px solid var(--color-rock-100);
		background-color: var(--color-bg-field);
		padding: var(--s-4) var(--s-8);
		@include sm {
			font-size: 1.5rem;
		}
	}
	.selected {
		border-image-slice: 1;
		border-image-source: var(--color-rainbow);
		pointer-events: none;
		&::before {
			transform: translate(-5%, -15%) rotate(0deg);
			border-width: 40px;
			opacity: 1;
			transition: all 0.4s;
			filter: blur(20px);
		}
	}
	button:hover {
		cursor: pointer;
		border-image-slice: 1;
	}
</style>
