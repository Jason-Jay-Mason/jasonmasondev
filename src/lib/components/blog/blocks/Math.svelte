<script lang="ts">
	import type { CustomBlockComponentProps } from "@portabletext/svelte"

	export let portableText: CustomBlockComponentProps<{ markup: string }>
</script>

<div class="math">
	<div class="m-container">
		{@html portableText.value.markup}
	</div>
</div>

<style lang="scss">
	@import "../../../theme/breakpoints.scss";
	.math {
		width: 100%;
		.m-container {
			color: var(--color-rock-100);
			font-size: 1rem;
			padding: var(--s-7) 0;
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
