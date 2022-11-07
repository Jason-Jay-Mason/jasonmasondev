<script lang="ts">
	import LargeHeadline from '$lib/components/LargeHeadline.svelte';
	import GridCard from '$lib/components/GridCard.svelte';
	//gatta love svelte, I don't have to make animations from scratch
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import type { Headline, Project, TagButtons, TagSelect } from '$lib/types';
	import Button from './Button.svelte';

	export let headline: Headline;
	export let projects: Project[];

	//we will keep the filter buttons and their stat in this variable
	let tagButtons: TagButtons = {
		all: {
			selected: true,
			title: 'all'
		}
	};
	// this stores the projects that are currently selected this is updated by the updateSelected function
	let selectedProjects: Project[] = projects;
	// we are getting referece to the grids parent div so that we can set a static height so that it doesnt jump around when filtering
	let gridContainer: HTMLElement;
	onMount(() => {
		//double check for the projects
		if (projects) {
			// set the height of the parent of the grid element because we don't want the height to change when there are less projects visible
			gridContainer.style.minHeight = `${gridContainer.clientHeight}px`;

			// add all of the types of tags to the tagButtons object, so that we can have as many as we like in the content without worrying about adding hard coded values to this component
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

	//a update the projects that a qualified under the current tags
	function updateSelected(): void {
		//filter the projects by tag
		selectedProjects = projects.filter((project: Project) => {
			//loop through and look for a tag that is selected and break when one is found
			for (let i = 0; i < project.data.tags.length; i++) {
				if (tagButtons[project.data.tags[i]].selected) {
					return project;
				}
			}
		});
	}

	function selectTag(next: TagSelect): void {
		//if all if false and is click, it should deslect all other filters
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
		//if the button was all but it is alread true do nothing
		if (next.title === 'all' && next.selected === true) {
			return;
		}

		//if the button that was click was not all lets make a map
		let selected = new Map();
		Object.values(tagButtons).forEach((tag) => {
			if (tag.selected === true) {
				selected.set(tag.title, true);
			}
		});

		//if there is only one button selected and it was the one that was click then unselect next and select all
		if (selected.get(next.title) && selected.size === 1) {
			tagButtons[next.title].selected = false;
			tagButtons['all'].selected = true;
			selectedProjects = projects;
			return;
		}

		//if all if the only selected button and it was not clicked
		if (selected.get('all') && next.title !== 'all') {
			tagButtons['all'].selected = false;
			tagButtons[next.title].selected = true;
			updateSelected();
		}

		//if all is false and the button that was clicked was not all and this is not the last button to be made false
		if (!selected.get('all')) {
			tagButtons[next.title].selected = !tagButtons[next.title].selected;
			updateSelected();
			return;
		}
	}
</script>

<section id="#work">
	<LargeHeadline main={headline.main} sub={headline.sub} />
	<div class="filters">
		{#each Object.values(tagButtons) as tag}
			<div on:click={() => selectTag(tag)} class="filter">
				<Button bind:selected={tagButtons[tag.title].selected}>{tag.title}</Button>
			</div>
		{/each}
	</div>

	<div bind:this={gridContainer}>
		<div class="grid">
			{#each selectedProjects as project}
				<div in:fly={{ y: -20 }} out:fly={{ y: -20 }}>
					<GridCard
						headline={project.data.headline}
						description={project.data.body.slice(0, 70)}
						img={project.data.img}
						githubHref={project.data.githubHref}
						href={project.slug}
					/>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	@import '../theme/breakpoints.scss';
	.filters {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		flex-wrap: wrap;
		padding: var(--s-10) 0 0 0;
		margin: 0 auto;
		width: fit-content;
		.filter {
			padding: var(--s-3) var(--s-3);
		}
	}
	.grid {
		display: grid;
		align-items: start;
		row-gap: 10px;
		padding-top: var(--s-10);
		grid-template-columns: 1fr 1fr;
		max-width: $xl;
		margin: 0 auto;
		@include md {
			grid-template-columns: 1fr 1fr 1fr;
		}
		@include lg {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
</style>
