<script lang="ts">
	import type { ClickupTask, Headline } from "$lib/types"
	import { debounce } from "$lib/utils"
	import { LargeHeadline, KanbanFilter as Filter } from "$lib/components"

	export let tasks: ClickupTask[]
	export let headline: Headline

	let searchMatches = tasks

	$: {
		console.log(searchMatches)
	}

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

			if (task.organization.search(regex) > -1) return true
		})
	}

	const debouncedHandleSearch = debounce(handleSearch, 300)
</script>

<section id="kanban">
	<LargeHeadline main={headline.main} sub={headline.sub} />
	<div class="filterbar">
		<input type="text" placeholder="search" on:keyup={debouncedHandleSearch} />
		<button>filter</button>
	</div>
	<div class="filter-menu">
		<Filter />
	</div>
</section>
