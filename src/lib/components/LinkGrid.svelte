<script lang="ts">
	import type { GridLinkData } from "$lib/types"
	import { GridLink, AnimationComponent } from "$lib/components"

	export let links: GridLinkData[]
</script>

<section>
	<div class="grid column-3">
		<div class="column">
			{#each links as link, i}
				{#if i % 3 == 0}
					{#if link.animationComponent}
						<AnimationComponent {link} />
					{:else}
						<GridLink {link} />
					{/if}
				{/if}
			{/each}
		</div>
		<div class="column">
			{#each links as link, i}
				{#if i % 3 == 1}
					{#if link.animationComponent}
						<AnimationComponent {link} />
					{:else}
						<GridLink {link} />
					{/if}
				{/if}
			{/each}
		</div>
		<div class="column">
			{#each links as link, i}
				{#if i % 3 == 2}
					{#if link.animationComponent}
						<AnimationComponent {link} />
					{:else}
						<GridLink {link} />
					{/if}
				{/if}
			{/each}
		</div>
	</div>

	<div class="grid column-1">
		<div class="column">
			{#each links as link}
				{#if link.animationComponent}
					<AnimationComponent {link} />
				{:else}
					<GridLink {link} />
				{/if}
			{/each}
		</div>
	</div>

	<div class="grid column-2">
		<div class="column">
			{#each links as link, i}
				{#if i % 2 == 0 && link.animationComponent}
					{#if link.animationComponent}
						<AnimationComponent {link} />
					{:else}
						<GridLink {link} />
					{/if}
				{/if}
			{/each}
		</div>
		<div class="column">
			{#each links as link, i}
				{#if i % 2 == 1 || !link.animationComponent}
					{#if link.animationComponent}
						<AnimationComponent {link} />
					{:else}
						<GridLink {link} />
					{/if}
				{/if}
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	@import "../../lib/theme/breakpoints.scss";
	section {
		max-width: 600px;
		padding: 0 var(--s-4) var(--s-11) var(--s-4);
		margin: 0 auto;
		@include md {
			max-width: $lg;
			padding: 0 var(--s-6) var(--s-10) var(--s-6);
		}

		@include xl {
			padding: 0 var(--s-9) var(--s-14) var(--s-9);
			max-width: $xxl;
		}

		.grid {
			gap: var(--s-6);
		}

		.column-1 {
			display: flex;
			@include md {
				display: none;
			}
		}

		.column-2 {
			display: none;
			grid-template-columns: 1fr 1fr;
			@include md {
				display: grid;
			}
			@include xl {
				display: none;
			}
		}

		.column-3 {
			display: none;
			grid-template-columns: 1fr 1fr 1fr;
			@include xl {
				display: grid;
			}
		}
		.column {
			display: flex;
			flex-direction: column;
			gap: var(--s-6);
		}
	}
</style>
