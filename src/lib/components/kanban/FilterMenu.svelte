<script lang="ts">
	import type { FilterableData, KanbanFilter, KanbanFilterOptions } from "$lib/types"
	import Filters from "./filters"
	import { debounce } from "$lib/utils"
	import { KanbanFilterType } from "$lib/types"
	import { FilterField, TrashIcon } from "$lib/components"

	export let data: FilterableData[]
	export let filtered: FilterableData[]

	let advancedVisible = false
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
				case KanbanFilterType.contains:
					copy = Filters.contains(filter, copy)
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
		<button class="filter-button" on:click={() => (advancedVisible = !advancedVisible)}
			>Filter</button
		>
		{#if advancedVisible}
			<div class="menu">
				<button class="filter-button" on:click={addFilter}>+Add Filter</button>

				{#each activeFilters as filter, i (filter.id)}
					{#if i !== 0}
						<div class="filter-field">
							<FilterField bind:filter {options} />
							<button class="delete-filter" on:click={() => removeFilter(i)}>
								<TrashIcon />
							</button>
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	.filter-menu {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: var(--s-9) var(--s-7) var(--s-9) 0;
		@include lg {
			justify-content: space-between;
		}
		.advanced {
			position: relative;
			display: none;
			width: 40%;
			flex-direction: row;
			justify-content: flex-end;
			@include xl {
				display: flex;
			}
			.filter-button {
				background: none;
				border: none;
				color: var(--color-text-body);
				text-transform: uppercase;
				font-family: var(--font-headline);
				font-size: var(--text-base);
				line-height: 0;
				padding: var(--s-7) 0;
				&:hover {
					cursor: pointer;
				}
			}
			.menu {
				background-color: var(--color-rock-900);
				position: absolute;
				width: 100%;
				right: 0;
				top: 100%;
				padding: var(--s-4) var(--s-7);
				border: solid 4px var(--color-rock-200);
				.filter-field {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					padding-bottom: var(--s-5);
				}
				.delete-filter {
					background-color: var(--color-bg-primary);
					display: flex;
					justify-content: center;
					align-items: center;
					border: none;
					width: 16px;
					padding: 2px;
					margin-left: 10px;
					&:hover {
						cursor: pointer;
					}
				}
			}
		}
	}
</style>
