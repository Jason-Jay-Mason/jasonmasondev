<script lang="ts">
	import type { LayoutData } from './$types';
	import type { Project } from '$lib/types';
	import Button from '$lib/components/Button.svelte';
	import HalfHeadline from '$lib/components/HalfHeadline.svelte';
	import LargeHeadline from '$lib/components/LargeHeadline.svelte';
	import GridCard from '$lib/components/GridCard.svelte';
	//we set the company from local storage in the layout component, and we use it here to build out links back
	import { company } from '$lib/stores';
	import FeaturedGrid from '$lib/components/FeaturedGrid.svelte';
	export let data: LayoutData;

	let filteredProjects = new Map();
	let i = 0;
	let j = 0;
	//generate random projects for the 4 slots on the grid (this might not be the best algorythm for this, but it will do for 4 items)
	while (filteredProjects.size < 4 && j < 4) {
		//generate random numer
		let random = Math.random() * 10;
		//if the randome number is divisible by 2 and project[i] hasent been addded yet then add it
		if (Math.floor(random) % 2 === 0 && filteredProjects.get(data.projects[i].slug) === undefined) {
			filteredProjects.set(data.projects[i].slug, data.projects[i]);
		}
		//move the index forward
		if (i === data.projects.length - 1) {
			i = 0;
			//prevent infinit loop if there are errors or we never get an even number until the end of the universe
			j++;
		} else {
			i++;
		}
	}
</script>

<section id="project">
	<Button href={`/${$company}#work`}>See All</Button>

	<div class="description">
		<div class="text">
			<HalfHeadline main={data.project.headline.main} sub={data.project.headline.sub} />
			<p>{@html data.project.body}</p>
			<div class="links">
				<Button>{data.project.cta.innerText}</Button>

				{#if data.project.githubHref}
					<a href={data.project.githubHref}>
						<img src="/github-logo.svg" alt="" />
					</a>
				{/if}
			</div>
		</div>
		<div class="mask">
			<img src={data.project.img.src} />
		</div>
	</div>
</section>

<section>
	<LargeHeadline main="MORE PROJECTS" sub="Want to see more?" />
	<FeaturedGrid displayElements={Array.from(filteredProjects.values())} />
</section>

<style lang="scss">
	@import '../../../lib/theme/breakpoints.scss';
	section {
		padding: var(--s-8) var(--s-6) var(--s-13) var(--s-6);
		max-width: $xl;
		margin: 0 auto;
		@include md {
			flex-direction: row;
			padding: var(--s-9) var(--s-8) var(--s-13) var(--s-8);
		}
		.description {
			padding-top: var(--s-8);
			position: relative;
			display: flex;
			justify-content: center;
			flex-direction: column;

			@include md {
				flex-direction: row;
			}
			.text {
				width: 100%;
				height: fit-content;
				@include md {
					width: 50%;
					padding-right: var(--s-7);
				}
				.links {
					display: flex;
					width: 100%;
					flex-direction: row;
					justify-content: space-between;
					flex-wrap: wrap;
					align-items: end;
					padding-bottom: var(--s-10);
					@include md {
						padding-bottom: 0;
					}
					a {
						line-height: 0;
						&::before {
							display: none;
						}
					}
					img {
						margin-top: var(--s-7);
						padding-right: var(--s-7);
						height: 40px;
						width: 40px;
					}
				}
				p {
					padding: var(--s-8) 0;
				}
			}

			.mask {
				overflow: hidden;
				position: relative;
				width: 100%;
				height: auto;
				height: 300px;
				overflow: hidden;
				max-width: $xs;
				margin: 0 auto;
				@include md {
					width: 50%;
					margin-left: var(--s-8);
					height: auto;
					max-width: none;
				}
				img {
					position: absolute;
					object-fit: cover;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
