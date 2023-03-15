<!-- The page for project[i] -->
<script lang="ts">
	import type { LayoutData } from './$types';
	import Button from '$lib/components/Button.svelte';
	import HalfHeadline from '$lib/components/HalfHeadline.svelte';
	import LargeHeadline from '$lib/components/LargeHeadline.svelte';
	//We set the company to local storage in the layout component, and we use it here to build out links back to that company
	import { company } from '$lib/stores';
	import FeaturedGrid from '$lib/components/FeaturedGrid.svelte';
	export let data: LayoutData;

	let filteredProjects = new Map();
	let i = 0;
	let j = 0;
	//Generate random projects for the 4 slots on the grid (this might not be the best algorythm for this, but it will do for 4 items)
	while (filteredProjects.size < 4 && j < 4) {
		//Generate random numer n > 0 < 10
		let random = Math.random() * 10;
		//If the random number is divisible by 2 and project[i] hasen't been added to filteredProjects yet then add it
		//this literally just simulates a coin flip. It could just as well be not devisible by 2. ie heads or tails
		if (Math.floor(random) % 2 === 0 && filteredProjects.get(data.projects[i].slug) === undefined) {
			filteredProjects.set(data.projects[i].slug, data.projects[i]);
		}
		//Move the index forward
		if (i === data.projects.length - 1) {
			i = 0;
			// We will itterate through the projects to generate random selections for projects.length*4
			// and no more so that we prevent infinit loop if there are errors or we
			// never get an even number until the end of the universe ( although unlikely)
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
			<p class="blurb">{@html data.project.body}</p>
			<div class="links">
				<Button href={data.project.cta.href} target="_blank">{data.project.cta.innerText}</Button>
				{#if data.project.githubHref}
					<a href={data.project.githubHref} target="_blank" rel="noreferrer">
						<img src="/github-logo.svg" alt="Github logo" />
					</a>
				{/if}
			</div>
		</div>
		<div class="mask">
			<img src={data.project.img.src} alt={`Project image for ${data.project.headline.main}`} />
		</div>
	</div>
</section>

<section id="more">
	<LargeHeadline main="MORE PROJECTS" sub="Want to see more?" />
	<FeaturedGrid displayElements={Array.from(filteredProjects.values())} />
</section>

<style lang="scss">
	@import '../../../lib/theme/breakpoints.scss';
	#more {
		padding: 0 var(--s-1) var(--s-13) var(--s-1);
		@include md {
			padding: 0 var(--s-8) var(--s-14) var(--s-8);
		}
	}
	#project {
		max-width: $xl;
		padding: var(--s-9) var(--s-6) var(--s-14) var(--s-6);
		margin: 0 auto;
		@include md {
			flex-direction: row;
			padding: var(--s-11) var(--s-8) var(--s-15) var(--s-8);
		}

		.description {
			display: flex;
			justify-content: center;
			flex-direction: column;
			padding-top: var(--s-10);
			@include md {
				flex-direction: row;
			}
			.text {
				@include md {
					width: 50%;
					padding-right: var(--s-7);
				}
				.blurb {
					padding: var(--s-9) 0 var(--s-10) 0;
				}
				.links {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					flex-wrap: wrap;
					align-items: flex-end;
					padding-bottom: var(--s-10);
					@include md {
						padding-bottom: 0;
					}
					img {
						height: 42px;
						width: 42x;
						padding-right: var(--s-7);
						margin-top: var(--s-7);
						filter: var(--icon-filter);
						@include md {
							margin: 0;
						}
					}
				}
			}
			.mask {
				position: relative;
				width: 100%;
				height: 300px;
				max-width: $xs;
				overflow: hidden;
				margin: 0 auto;
				@include md {
					width: 50%;
					height: auto;
					max-width: none;
					margin-left: var(--s-8);
				}
				img {
					position: absolute;
					object-fit: cover;
					width: 100%;
				}
			}
		}
	}
</style>
