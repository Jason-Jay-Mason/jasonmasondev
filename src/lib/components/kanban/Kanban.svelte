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
	<div class="columns">
		{#each filtered as task}
			<div>{task.name}</div>
		{/each}
	</div>
</section>

<style lang="scss">
</style>
