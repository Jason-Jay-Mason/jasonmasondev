<script lang="ts">
	import type { ClickupTask, Headline, FilterableData } from "$lib/types"
	import { debounce } from "$lib/utils"
	import { LargeHeadline, KanbanFilterMenu as FilterMenu } from "$lib/components"

	export let tasks: ClickupTask[]
	export let headline: Headline

	let searchMatches = tasks

	function handleSearch(e: KeyboardEvent): void {
		const { value } = e.target as HTMLInputElement
		if (value === "" || value === " ") {
			searchMatches = tasks
			return
		}
		const removedBackslashes = value.replace(/\\/g, "")
		const regex = new RegExp(`(${removedBackslashes})`, "gi")
		searchMatches = tasks.filter((task) => {
			if (task.name.search(regex) > -1) return true

			for (const technology of task.technologies) {
				if (technology.search(regex) > -1) return true
			}

			if (task.organization && task.organization.search(regex) > -1) return true
		})
	}

	const debouncedHandleSearch = debounce(handleSearch, 300)

	let filteredTasks = searchMatches
	let filterVisible = false
	$: {
		console.log(filteredTasks)
	}
</script>

<section id="kanban">
	<LargeHeadline main={headline.main} sub={headline.sub} />
	<div class="filter-bar">
		<input type="text" placeholder="search" on:keyup={debouncedHandleSearch} />
		<div class="advanced-filter">
			<button on:click={() => (filterVisible = !filterVisible)}>filter</button>
			<div class={filterVisible ? "menu" : "hidden menu"}>
				<FilterMenu bind:data={searchMatches} bind:filteredData={filteredTasks} />
			</div>
		</div>
	</div>
	<div class="columns">
		{#each filteredTasks as task}
			<div>{task.name}</div>
		{/each}
	</div>
</section>

<style lang="scss">
	@import "../theme/breakpoints.scss";
	section {
		background-color: red;
		position: relative;
		margin: 0 auto;
		max-width: $xl;
		.filter-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: start;
			.advanced-filter {
				display: flex;
				flex-direction: column;
			}
			.menu {
				background-color: blue;
			}
			.hidden {
				display: block;
			}
		}
	}
</style>
