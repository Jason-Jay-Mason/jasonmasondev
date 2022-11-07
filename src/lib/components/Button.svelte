<script lang="ts">
	export let href: string;
</script>

<a {href}>
	<button><slot /></button>
</a>

<style lang="scss">
	button {
		position: relative;
		width: 98%;
		margin: 0 auto;
		box-shadow: none;
		font-size: calc(var(--text-base) + 5px);
		color: var(--color-text-body);
		letter-spacing: 0.11em;
		font-family: var(--font-headline);
		border: 2px solid var(--color-rock-100);
		background-color: var(--color-bg-primary);
		padding: var(--s-4) 0;
		&::before {
			content: '';
			opacity: 0;
			z-index: -1;
			filter: blur(60px);
			position: absolute;
			width: 100%;
			height: 120%;
			margin: 0 auto;
			transform: translateX(-50px) translateY(-60px);
			top: 0px;
			left: 0px;
			right: 0;
			border-style: solid;
			border-width: 50px;
			border-radius: 800px;
			border-image-slice: 1;
			border-image-source: var(--color-rainbow);
		}
		&:hover {
			cursor: pointer;
			border-image-slice: 1;
			border-image-source: var(--color-rainbow);
			&::before {
				opacity: 1;
				transition: transform 0.4s;
				transition: border-width 0.4s;
				transition: filter 0.4s;
				filter: blur(12px);
				transform: translateX(-10px) translateY(-10px) rotate(2deg);
				border-width: 5px 10px 5px 10px;
			}
		}
	}
</style>
