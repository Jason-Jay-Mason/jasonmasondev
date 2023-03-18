<script lang="ts">
	import LargeHeadline from '$lib/components/LargeHeadline.svelte';
	import { onMount } from 'svelte';
	import type { Headline, Project, TagButtons, TagSelect } from '$lib/types';
	import Button from './Button.svelte';
	import FeaturedGrid from './FeaturedGrid.svelte';

	export let headline: Headline;
	export let projects: Project[];

	//We will keep the filter buttons and their state in this variable
	let tagButtons: TagButtons = {
		all: {
			selected: true,
			title: 'all'
		}
	};
	// This stores the projects that are currently selected this is updated by the updateSelected function
	let selectedProjects: Project[] = projects;
	// we are getting referece to the grids parent div so that we can set a static height so that it doesnt jump around when filtering
	let gridContainer: HTMLElement;
	onMount(() => {
		//Double check for the projects
		if (projects) {
			// Set the height of the parent of the grid element because we don't want the height to change when there are less projects visible
			gridContainer.style.minHeight = `${gridContainer.clientHeight}px`;

			// Add all of the tags to the tagButtons object, so that we can have as many as we like in the content without worrying about adding hard coded values to this component
			projects.forEach((project: Project) => {
				project.data.tags.forEach((tag: string) => {
					if (tagButtons[tag]) {
						return;
					} else {
						tagButtons[tag] = {
							selected: false,
							title: tag
						};
					}
				});
			});
		}
	});

	//Update the projects that are qualified under the current tags
	function updateSelected() {
		//Filter the projects by tag
		selectedProjects = projects.filter((project: Project) => {
			//Loop through and look for a tag that is selected and break when one is found
			for (let i = 0; i < project.data.tags.length; i++) {
				if (tagButtons[project.data.tags[i]].selected) {
					return project;
				}
			}
		});
	}

	//Handle when a tag is selected or deslected
	function selectTag(next: TagSelect): void {
		//If all was clicked, it should deslect all other filters
		if (next.title === 'all' && next.selected === false) {
			Object.values(tagButtons).forEach((tag) => {
				if (tag.selected === true) {
					tagButtons[tag.title].selected = false;
				}
			});
			tagButtons['all'].selected = true;
			selectedProjects = projects;
			return;
		}
		//If the filter all was clicked but it is already true do nothing
		if (next.title === 'all' && next.selected === true) {
			return;
		}

		//If the button that was click was not all lets make a map
		let selected = new Map();
		//And put the selected tags in there
		Object.values(tagButtons).forEach((tag) => {
			if (tag.selected === true) {
				selected.set(tag.title, true);
			}
		});

		//If there is only one button selected and it was the one that was click then unselect next and select all
		if (selected.get(next.title) && selected.size === 1) {
			tagButtons[next.title].selected = false;
			tagButtons['all'].selected = true;
			selectedProjects = projects;
			return;
		}

		//If all was the only selected button and it was not clicked
		if (selected.get('all')) {
			tagButtons['all'].selected = false;
			tagButtons[next.title].selected = true;
			updateSelected();
		}

		//If all is false and the button that was clicked was not all and this is not the last button to be made false
		if (!selected.get('all')) {
			tagButtons[next.title].selected = !tagButtons[next.title].selected;
			updateSelected();
			return;
		}
	}
</script>

<section id="work">
	<LargeHeadline main={headline.main} sub={headline.sub} />
	<div class="filter-container">
		<p class="filter-label">Filter by tag:</p>
		<div class="filters">
			{#each Object.values(tagButtons) as tag}
				<div on:click={() => selectTag(tag)} class="filter">
					<Button bind:selected={tagButtons[tag.title].selected}>{tag.title}</Button>
				</div>
			{/each}
		</div>
	</div>

	<div bind:this={gridContainer} class="grid-container">
		<FeaturedGrid displayElements={selectedProjects} />
	</div>
</section>

<style lang="scss">
	@import '../theme/breakpoints.scss';
	#work {
		overflow: hidden;
	}

	.filter-container {
		display: flex;
		flex-direction: column;
		width: fit-content;
		margin: 0 auto;
		.filter-label {
			position: relative;
			left: var(--s-4);
			text-align: center;
			color: var(--color-rock-300);
			font-size: 0.8rem;
			padding: var(--s-10) 0 var(--s-4) 0;
			@include md {
				text-align: left;
			}
		}
		.filters {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			margin: 0 auto;
			width: fit-content;
			.filter {
				padding: var(--s-3) var(--s-3);
			}
		}
	}
</style>
