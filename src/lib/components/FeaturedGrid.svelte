<script lang="ts">
	import GridCard from './GridCard.svelte';
	import type { GridDisplayElement } from '$lib/types';
	import { fly } from 'svelte/transition';

	export let displayElements: GridDisplayElement[];
</script>

<div class="grid">
	{#each displayElements as project}
		<div in:fly={{ y: -20 }} out:fly={{ y: -20 }}>
			<GridCard
				headline={project.data.headline}
				description={project.data.body.slice(0, 70)}
				img={project.data.img}
				href={`/projects/${project.slug}`}
			/>
		</div>
	{/each}
</div>

<style lang="scss">
	@import '../theme/breakpoints.scss';
	.grid {
		display: grid;
		align-items: stretch;
		row-gap: var(--s-7);
		grid-template-columns: 1fr 1fr;
		max-width: $xl;
		padding-top: var(--s-10);
		margin: 0 auto;
		@include md {
			row-gap: var(--s-8);
			grid-template-columns: 1fr 1fr 1fr;
		}
		@include lg {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
</style>
