<script lang="ts">
	import type { KanbanFilters, KanbanFilter, DateRange } from "$lib/types"
	import { KanbanFilterType } from "$lib/types"

	const filterOptions: KanbanFilters = {
		name: {
			key: "name",
			label: "Name",
			filterType: KanbanFilterType.contains,
			options: null,
			value: ""
		},
		organization: {
			key: "organization",
			label: "Organization",
			filterType: KanbanFilterType.contains,
			options: null,
			value: ""
		},
		dueDate: {
			key: "dueDate",
			label: "Due Date",
			filterType: KanbanFilterType.dateRange,
			options: null,
			value: {
				start: "",
				end: ""
			}
		},
		technologies: {
			key: "technologies",
			label: "Tools",
			filterType: KanbanFilterType.picklist,
			options: ["PHP", "Svelte", "Go"],
			value: ""
		}
	}

	export let filter: KanbanFilter<any>

	function handlePropChange(e) {
		const selection = filterOptions[e.target.value]
		if (selection.filterType === KanbanFilterType.dateRange) {
			const next: KanbanFilter<DateRange> = {
				id: filter?.id,
				...selection
			}
			filter = next
		} else {
			filter = { id: filter?.id, ...filterOptions[e.target.value] }
		}
	}
</script>

<div class="container">
	<select on:change={handlePropChange}>
		<option selected>---</option>
		{#each Object.keys(filterOptions) as key}
			<option value={key}>{filterOptions[key].label}</option>
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

<style lang="scss">
	.container {
		display: flex;
		flex-direction: row;
	}
</style>
