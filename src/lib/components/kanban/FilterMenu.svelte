<script lang="ts">
	import type { FilterableData, KanbanFilter, KanbanFilterOptions } from "$lib/types"
	import Filters from "./filters"
	import { debounce } from "$lib/utils"
	import { KanbanFilterType } from "$lib/types"
	import { outclickaction } from "$lib/actions/outclick"
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

	const handleFiltering = debounce(() => {
		let copy = [...data]
		for (const filter of activeFilters) {
			switch (filter.filterType) {
				case KanbanFilterType.fuzzyFind:
					copy = Filters.fuzzyFind(filter, copy, ["name", "description", "organization"])
					continue
				case KanbanFilterType.contains:
					copy = Filters.contains(filter, copy)
					continue
				case KanbanFilterType.picklist:
					copy = Filters.picklist(filter, copy)
					continue
				case KanbanFilterType.dateRange:
					copy = Filters.dateRange(filter, copy)
					continue
			}
		}
		filtered = copy
	}, 300)

	$: {
		if (activeFilters.length) {
			handleFiltering()
		}
	}

	const technologies = new Set(data.flatMap((task) => task.technologies))
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
			options: Array.from(technologies),
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

	function removeFilter(i: number): void {
		activeFilters = activeFilters.filter((_, index) => index !== i)
		if (activeFilters.length === 1 && activeFilters[0].value === "") {
			filtered = data
		}
	}
</script>

<div class="filter-menu">
	<FilterField bind:filter={activeFilters[0]} />
	<div class="advanced">
		<button class="filter-toggle" on:click={() => (advancedVisible = !advancedVisible)}>
			<svg
				width="18"
				id="gear-icon"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M10.4895 0H6.67517V2.18362C6.23116 2.31576 5.80652 2.49285 5.40651 2.70962L3.65063 0.953732L0.953521 3.65084L2.70947 5.40679C2.49283 5.8066 2.31582 6.23103 2.18373 6.6748H0V10.4891H2.18356C2.31228 10.9217 2.48367 11.3358 2.69284 11.7268L0.953646 13.466L3.65075 16.1631L5.37577 14.4381C5.78474 14.6625 6.21977 14.8453 6.67517 14.9808V17.1644H10.4895V14.9808C10.9332 14.8487 11.3576 14.6717 11.7575 14.4551L13.4658 16.1635L16.1629 13.4663L14.4547 11.7581C14.6716 11.358 14.8487 10.9332 14.9809 10.4891H17.1644V6.6748H14.9807C14.8452 6.21954 14.6624 5.78463 14.4381 5.37577L16.1628 3.651L13.4657 0.953891L11.7268 2.69284C11.336 2.48372 10.9219 2.31238 10.4895 2.18367V0ZM8.58235 12.3971C10.6889 12.3971 12.3966 10.6894 12.3966 8.58284C12.3966 6.47627 10.6889 4.76855 8.58235 4.76855C6.47578 4.76855 4.76807 6.47627 4.76807 8.58284C4.76807 10.6894 6.47578 12.3971 8.58235 12.3971Z"
					fill="#423D38"
				/>
			</svg>
			Advanced</button
		>
		{#if advancedVisible}
			<div class="menu" use:outclickaction on:outclick={() => (advancedVisible = false)}>
				<button class="add-filter" on:click={addFilter}>➕ Add Filter</button>
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
		padding: var(--s-9) var(--s-7) var(--s-4) 0;
		justify-content: center;
		align-items: flex-end;
		@include md {
			justify-content: space-between;
		}
		.advanced {
			display: none;
			flex-direction: row;
			justify-content: flex-end;
			position: relative;
			min-width: 480px;
			@include md {
				display: flex;
				width: 60%;
			}
			@include xl {
				width: 40%;
			}
			.filter-toggle,
			.add-filter {
				background: none;
				border: none;
				color: var(--color-rock-100);
				letter-spacing: 1.3px;
				text-transform: uppercase;
				font-family: var(--font-headline);
				font-size: var(--text-base);
				line-height: 0;
				&:hover {
					cursor: pointer;
				}
			}
			.filter-toggle {
				display: flex;
				flex-direction: row;
				align-items: center;
				padding: var(--s-7) 0 0 0;
				margin-bottom: 3px;
				svg {
					width: 15px;
					margin-right: 5px;
					stroke: var(--color-rock-100);
				}
			}
			.add-filter {
				padding: var(--s-7) 0;
			}
			.menu {
				z-index: 10;
				background-color: var(--color-bg-primary);
				position: absolute;
				width: 100%;
				right: 0;
				top: 100%;
				padding: var(--s-4) var(--s-7);
				border: solid 2px var(--color-rock-100);
				.filter-field {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					padding-bottom: var(--s-5);
				}
				.delete-filter {
					background-color: transparent;
					display: flex;
					justify-content: center;
					align-items: center;
					border: none;
					min-width: 18px;
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
