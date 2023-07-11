<script lang="ts">
	import type { ClickupTask, Headline } from "$lib/types"
	import { LargeHeadline, FilterMenu } from "$lib/components"

	export let tasks: ClickupTask[]
	export let headline: Headline

	let filtered = tasks
</script>

<section id="kanban">
	<LargeHeadline main={headline.main} sub={headline.sub} />
	<FilterMenu data={tasks} bind:filtered />
	<!-- <div class="columns"> -->
	<!-- 	{#each filtered as task} -->
	<!-- 		<div>{task.name}</div> -->
	<!-- 	{/each} -->
	<!-- </div> -->
</section>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	section {
		padding: 0 var(--s-4) var(--s-11) var(--s-4);
		margin: 0 auto;
		@include md {
			max-width: $lg;
			padding: 0 var(--s-6) var(--s-10) var(--s-6);
		}

		@include xl {
			padding: 0 var(--s-9) var(--s-13) var(--s-9);
			max-width: $xxl;
		}
	}
</style>
