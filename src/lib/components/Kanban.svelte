<script lang="ts">
	import type { ClickupTask, Headline } from "$lib/types"
	import LargeHeadline from "./LargeHeadline.svelte"

	export let tasks: ClickupTask[]
	export let headline: Headline

	const filterNames = {
		name: "Name",
		technologyIds: "Technologies",
		company: "Organization",
		dueDate: "Due Date"
	}

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
		const regex = new RegExp(`(${value})`, "gi")
		searchMatches = tasks.filter((task) => task.name.search(regex) > -1)
	}
</script>

<section id="kanban">
	<LargeHeadline main={headline.main} sub={headline.sub} />
	<div class="filterbar">
		<input type="text" placeholder="search" on:keyup={handleSearch} />
		<button>filter</button>
	</div>

	<div class="filter-menu" />
</section>
