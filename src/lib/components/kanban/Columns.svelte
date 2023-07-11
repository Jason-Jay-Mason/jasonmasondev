<script lang="ts">
	import type { ClickupTask } from "$lib/types"
	import { KanbanColumn as Column, KanbanCard as Card } from "$lib/components"

	export let tasks: ClickupTask[]
	export let statuses: string[]
	$: {
		console.log(tasks)
	}
</script>

<div class="columns">
	{#each statuses as status}
		<Column headline={status}>
			{#each tasks as task}
				{#if status === task.status}
					<Card {task} />
				{/if}
			{/each}
		</Column>
	{/each}
</div>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	.columns {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: var(--s-5);

		@include md {
			grid-template-columns: 1fr 1fr 1fr;
		}
		.title {
			width: 100%;
			text-align: center;
			font-family: var(--font-headline);
			font-size: var(--text-md);
			letter-spacing: 3.36px;
			background-color: var(--color-rock-100);
			color: var(--color-bg-primary);
			text-transform: uppercase;
		}
		.column {
			background-image: url("/pencil-bg.svg");
			background-size: cover;
			border: solid 4px var(--color-rock-100);
		}
	}
</style>
