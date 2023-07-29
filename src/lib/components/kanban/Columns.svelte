<script lang="ts">
	import type { ClickupTask } from "$lib/types"
	import { KanbanColumn as Column, KanbanCard as Card } from "$lib/components"

	export let tasks: ClickupTask[]
	export let statuses: string[]
</script>

<div class="columns">
	{#each statuses as status}
		<Column headline={status}>
			{#each tasks.filter((task) => task.status === status) as task}
				<Card {task} />
			{/each}
		</Column>
	{/each}
</div>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	.columns {
		display: grid;
		gap: var(--s-5);
		grid-template-columns: 1fr;
		@include md {
			grid-template-columns: 1fr 1fr;
		}
		@include xl {
			grid-template-columns: 1fr 1fr 1fr;
		}
		.title {
			font-size: var(--text-md);
			text-align: center;
			font-family: var(--font-headline);
			letter-spacing: 3.36px;
			color: var(--color-bg-primary);
			text-transform: uppercase;
			width: 100%;
			background-color: var(--color-rock-100);
		}
		.column {
			background-image: url("/pencil-bg.svg");
			background-size: cover;
			border: solid 4px var(--color-rock-100);
		}
	}
</style>
