<script lang="ts">
	import type { KanbanFilterOptions, KanbanFilter, DateRange } from "$lib/types"
	import { KanbanFilterType } from "$lib/types"

	export let options: KanbanFilterOptions | null
	export let filter: KanbanFilter<any>

	function handlePropChange(e) {
		if (options) {
			const selection = options[e.target.value]
			if (selection.filterType === KanbanFilterType.dateRange) {
				const next: KanbanFilter<DateRange> = {
					id: filter?.id,
					...selection
				}
				filter = next
			} else {
				filter = { id: filter?.id, ...options[e.target.value] }
			}
		}
	}
</script>

{#if filter && filter.filterType === KanbanFilterType.fuzzyFind}
	<input placeholder="Fuzzy Find" bind:value={filter.value} />
{/if}

{#if options}
	<div class="container">
		<select on:change={handlePropChange}>
			<option selected>---</option>
			{#each Object.keys(options) as key}
				<option value={key}>{options[key].label}</option>
			{/each}
		</select>
		{#if filter}
			{#if filter.filterType === KanbanFilterType.contains}
				<p>contains</p>
				<input bind:value={filter.value} />
			{/if}

			{#if filter.filterType === KanbanFilterType.dateRange && typeof filter.value?.start}
				<p>is within</p>
				<input bind:value={filter.value.start} type="date" />
				<p>and</p>
				<input bind:value={filter.value.end} type="date" />
			{/if}

			{#if filter.filterType === KanbanFilterType.picklist && filter.options}
				<p>include</p>
				<select bind:value={filter.value}>
					{#each filter.options as option}
						<option>{option}</option>
					{/each}
				</select>
			{/if}
		{/if}
	</div>
{/if}

<style lang="scss">
	.container {
		display: flex;
		flex-direction: row;
	}
</style>
