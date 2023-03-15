<script lang="ts">
	export let href: string | undefined = undefined;
	export let selected: boolean = false;
	type Width = 'full' | 'fit-content';
	export let width: Width = 'fit-content';
	export let type: string | undefined = undefined;
	export let target: string | undefined = undefined;
</script>

{#if href}
	<a {href} {target}>
		<button class:full={width === 'full'} class:fit-content={width === 'fit-content'}
			><slot /></button
		>
	</a>
{:else}
	<button
		{type}
		class:selected={selected === true}
		class:fullWidth={width === 'full'}
		class:fit-content={width === 'fit-content'}><slot /></button
	>
{/if}

<style lang="scss">
	@import '../theme/breakpoints.scss';
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
		font-size: calc(var(--text-base) + 3px);
		color: var(--color-text-body);
		letter-spacing: 0.11em;
		font-family: var(--font-headline);
		border: 2px solid var(--color-rock-100);
		background-color: var(--color-bg-primary);
		padding: var(--s-4) var(--s-8);
		@include sm {
			font-size: calc(var(--text-base) + 5px);
		}
		&::before {
			content: '';
			position: absolute;
			top: 0px;
			left: 0px;
			right: 0;
			width: 100%;
			height: 120%;
			transform: translateX(-50px) translateY(-60px);
			opacity: 0;
			z-index: -1;
			filter: blur(60px);
			margin: 0 auto;
			border-style: solid;
			border-width: 50px;
			border-radius: 800px;
			border-image-slice: 1;
			border-image-source: var(--color-rainbow);
		}
	}
	.selected {
		border-image-slice: 1;
		border-image-source: var(--color-rainbow);
		pointer-events: none;
		&::before {
			transform: translateX(-10px) translateY(-10px) rotate(2deg);
			border-width: 5px 10px 5px 10px;
			opacity: 1;
			transition: all 0.4s;
			filter: blur(12px);
		}
	}
	button:hover {
		cursor: pointer;
		border-image-slice: 1;
		border-image-source: var(--color-rainbow);
		&::before {
			transform: translateY(-7px) rotate(2deg);
			border-width: 5px 10px 5px 10px;
			opacity: 1;
			transition: all 0.4s;
			filter: blur(12px);
		}
	}
</style>
