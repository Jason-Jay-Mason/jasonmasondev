<script lang="ts">
	import type { ClickupTask, Headline } from "$lib/types"
	import { LargeHeadline, FilterMenu, KanbanColumns as Columns } from "$lib/components"

	export let tasks: ClickupTask[]
	export let headline: Headline

	let filtered = tasks
</script>

<section id="kanban">
	<LargeHeadline main={headline.main} sub={headline.sub} />
	<FilterMenu data={tasks} bind:filtered />
	<Columns tasks={filtered} statuses={["backlog", "doing", "done"]} />
</section>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	section {
		padding: 0 var(--s-4) var(--s-11) var(--s-4);
		margin: 0 auto;
		max-width: 600px;
		margin: 0 auto;
		@include md {
			max-width: $lg;
			padding: 0 var(--s-7) var(--s-10) var(--s-7);
		}

		@include xl {
			max-width: $xxl;
			padding: 0 var(--s-9) var(--s-14) var(--s-9);
		}
	}
</style>
