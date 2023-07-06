<script lang="ts">
	import type { FilterableData, KanbanFilter, DateRange } from "$lib/types"
	import { debounce } from "$lib/utils"
	import { KanbanFilterType } from "$lib/types"
	import { KanbanFilter as Filter } from "$lib/components"

	export let data: FilterableData[]
	export let filteredData: FilterableData[]

	let filters: KanbanFilter<any>[] = []
	$: {
		if (filters.length) {
			debouncedFiltering()
		}
	}
	function contains(f: KanbanFilter<string>): void {
		const { value, key } = f
		const removedBackslashes = value.replace(/\\/g, "")
		const regex = new RegExp(`(${removedBackslashes})`, "gi")

		filteredData = filteredData.filter((data) => data[key].search(regex) > -1)
	}

	function picklist(f: KanbanFilter<string>): void {
		const { value, key } = f
		if (value.length) {
			filteredData = filteredData.filter((data) => {
				if (typeof data[key] === "string") {
					if (data[key] === value) return true
				} else {
					for (const option of data[key]) {
						if (option === value) return true
					}
				}
			})
		}
	}

	function numberRange(f: KanbanFilter<DateRange>): void {
		const { key } = f
		const { start, end } = f.value
		if (start.length && end.length) {
			const startD = new Date(start)
			const endD = new Date(end)
			filteredData = filteredData.filter((data) => {
				let dateValue = parseInt(data[key])
				if (dateValue >= startD.getTime() || dateValue <= endD.getTime()) {
					return true
				}
			})
		}
	}

	function handleFiltering() {
		filteredData = data
		for (const filter of filters) {
			switch (filter.filterType) {
				case KanbanFilterType.contains:
					contains(filter)
					break
				case KanbanFilterType.picklist:
					picklist(filter)
					break
				case KanbanFilterType.dateRange:
					numberRange(filter)
				default:
			}
		}
	}
	const debouncedFiltering = debounce(handleFiltering, 300)

	let id = 0
	function addFilter() {
		let initFilter: KanbanFilter<any> = {
			id: id,
			key: "",
			label: "",
			filterType: KanbanFilterType.nill,
			options: null,
			value: ""
		}
		id++
		filters = [...filters, initFilter]
	}

	type FilterIndex = number
	function removeFilter(i: FilterIndex) {
		let head = filters.slice(0, i)
		let tail = filters.slice(i + 1, filters.length)
		filters = [...head, ...tail]
		filters = filters
	}
</script>

<div class="filter-menu">
	<button on:click={addFilter}>add one</button>
	{#each filters as filter, i (filter.id)}
		<Filter bind:filter />
		<button on:click={() => removeFilter(i)}>remove filter</button>
	{/each}
</div>

<style lang="scss">
	.filter-menu {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: start;
		padding: 0 var(--s-5);
	}
</style>
