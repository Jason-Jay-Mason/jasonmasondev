<script lang="ts">
	import type { CustomBlockComponentProps } from "@portabletext/svelte"

	export let portableText: CustomBlockComponentProps<{ markup: string }>
</script>

<div class="math">
	<p>
		{@html portableText.value.markup}
	</p>
</div>

<style lang="scss">
	@import "../../../theme/breakpoints.scss";
	.math {
		width: 100%;
		p {
			color: var(--color-rock-100);
			font-size: 1rem;
			padding: var(--s-6) 0;
			margin: var(--s-1) 0;
			@include xs {
				font-size: 1.2rem;
			}
			@include lg {
				font-size: 1.5rem;
			}
			svg {
				stroke: var(--color-rock-100);
			}
		}
	}
</style>
