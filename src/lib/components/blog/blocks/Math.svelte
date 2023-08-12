<script lang="ts">
	import type { CustomBlockComponentProps } from "@portabletext/svelte"

	export let portableText: CustomBlockComponentProps<{ markup: string }>
</script>

<p>{@html portableText.value.markup}</p>

<style lang="scss">
	p {
		width: fit-content;
		white-space: nowrap;
		color: var(--color-rock-100);
		font-size: 1.5rem;
		padding: var(--s-6) 0;
		margin: var(--s-1) 0;
		svg {
			stroke: var(--color-rock-100);
		}
	}
</style>
