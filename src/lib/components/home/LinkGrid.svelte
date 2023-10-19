<script lang="ts">
	import type { GridLinkData } from "$lib/types"
	import { GridLink, AnimationComponent } from "$lib/components"

	export let links: GridLinkData[]
</script>

<section>
	{#each links as link, i}
		{#if link.animationComponent}
			<div class="animation-link">
				<AnimationComponent {link} />
			</div>
		{:else}
			<div class={`normal-link-${i - 3}`}>
				<GridLink {link} />
			</div>
		{/if}
	{/each}
</section>

<style lang="scss">
	@import "../../../lib/theme/breakpoints.scss";
	section {
		z-index: 7;
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-7);
		max-width: 600px;
		padding: 0 var(--s-4) var(--s-11) var(--s-4);
		margin: 0 auto;
		@include md {
			max-width: $lg;
			grid-template-columns: 1fr 1fr;
			gap: var(--s-5);
			padding: 0 var(--s-6) var(--s-10) var(--s-6);
		}

		@include xl {
			grid-template-columns: 1fr 1fr 1fr;
			padding: 0 var(--s-9) var(--s-14) var(--s-9);
			max-width: $xxl;
		}
		.blah-0 {
			position: relative;
			background: red;
		}
		.animation-link {
			@include md {
				grid-row: span 3;
			}
			@include xl {
				grid-row: span 1;
			}
		}
		@for $i from 0 to 3 {
			.normal-link-#{$i} {
				@include md {
					grid-column: 2;
					grid-row: span 1;
				}
				@include xl {
					grid-column: span 1;
					grid-row: span 1;
				}
			}
		}
	}
</style>
