<script lang="ts">
	import type { KanbanFilters, KanbanFilter } from "$lib/types"
	import { KanbanFilterType } from "$lib/types"
	import Input from "./Input.svelte"

	export let dropdownOptions: string[] | null

	const filters: KanbanFilters = {
		name: {
			label: "Name",
			filterType: KanbanFilterType.contains,
			options: dropdownOptions,
			value: ""
		},
		organization: {
			label: "Organization",
			filterType: KanbanFilterType.contains,
			options: dropdownOptions,
			value: ""
		},
		dueDate: {
			label: "Due Date",
			filterType: KanbanFilterType.numberRange,
			options: dropdownOptions,
			value: {
				start: new Date(),
				end: new Date()
			}
		},
		technolgies: {
			label: "Tools",
			filterType: KanbanFilterType.picklist,
			options: ["PHP", "Svelte"],
			value: ""
		}
	}

	let activeFilter: KanbanFilter
	function handlePropChange(e) {
		activeFilter = filters[e.target.value]
		console.log(activeFilter)
	}

	//TODO: build out filter functions based on value
</script>

<div class="container">
	<select on:change={handlePropChange}>
		<option selected>---</option>
		{#each Object.keys(filters) as key}
			<option value={key}>{filters[key].label}</option>
		{/each}
	</select>
	{#if activeFilter}
		{#if activeFilter.filterType === KanbanFilterType.contains}
			<p>contains</p>
			<input bind:value={activeFilter.value} />
		{/if}

		{#if activeFilter.filterType === KanbanFilterType.numberRange && typeof activeFilter.value === "object"}
			<p>is within</p>
			<input bind:value={activeFilter.value.start} type="date" />
			<p>and</p>
			<input bind:value={activeFilter.value.end} type="date" />
		{/if}

		{#if activeFilter.filterType === KanbanFilterType.picklist && activeFilter.options}
			<p>include</p>
			<select>
				{#each activeFilter.options as option}
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
