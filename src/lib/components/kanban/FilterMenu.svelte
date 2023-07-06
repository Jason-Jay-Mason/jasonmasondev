<script lang="ts">
	import type { FilterableData, KanbanFilter, KanbanFilterOptions } from "$lib/types"
	import Filters from "./filters"
	import { debounce } from "$lib/utils"
	import { KanbanFilterType } from "$lib/types"
	import { FilterField } from "$lib/components"

	export let data: FilterableData[]
	export let filtered: FilterableData[]

	let activeFilters: KanbanFilter<any>[] = [
		{
			id: 0,
			key: "fuzzy",
			label: "Fuzzy Find",
			filterType: KanbanFilterType.fuzzyFind,
			value: ""
		}
	]

	$: {
		if (activeFilters.length) {
			handleFiltering()
		}
	}

	const handleFiltering = debounce(() => {
		let copy = [...data]
		for (const filter of activeFilters) {
			switch (filter.filterType) {
				case KanbanFilterType.fuzzyFind:
					copy = Filters.fuzzyFind(filter, copy, ["name"])
					continue
				default:
			}
		}
		filtered = copy
	}, 300)

	const options: KanbanFilterOptions = {
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

	let id = 1
	function addFilter(): void {
		let initFilter: KanbanFilter<any> = {
			id: id,
			key: "",
			label: "",
			filterType: KanbanFilterType.nill,
			options: null,
			value: ""
		}
		activeFilters = [...activeFilters, initFilter]
		id++
	}

	type FilterIndex = number
	function removeFilter(i: FilterIndex): void {
		activeFilters = activeFilters.filter((_, index) => index !== i)
		if (activeFilters.length === 1 && activeFilters[0].value === "") {
			filtered = data
		}
	}
</script>

<div class="filter-menu">
	<FilterField bind:filter={activeFilters[0]} />
	<div class="advanced">
		<button on:click={addFilter}>add one</button>
		{#each activeFilters as filter, i (filter.id)}
			{#if i !== 0}
				<FilterField bind:filter {options} />
				<button on:click={() => removeFilter(i)}>remove filter</button>
			{/if}
		{/each}
	</div>
</div>

<style lang="scss">
</style>
