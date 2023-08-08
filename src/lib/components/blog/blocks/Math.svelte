<script lang="ts">
	import type { CustomBlockComponentProps } from "@portabletext/svelte"

	export let portableText: CustomBlockComponentProps<{ markup: string }>
</script>

<p>{@html portableText.value.markup}</p>

<style lang="scss">
	p {
		width: 100%;
		text-align: center;
		color: var(--color-rock-100);
		font-size: 1.2rem;
		padding: var(--s-8) 0;
		background: var(--color-rock-invert-800);
		margin: var(--s-5) 0;
		svg {
			stroke: var(--color-rock-100);
		}
	}
</style>
