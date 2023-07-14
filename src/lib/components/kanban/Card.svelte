<script lang="ts">
	import type { ClickupTask } from "$lib/types"
	import { KanbanTechIcon as TechIcon } from "$lib/components"

	export let task: ClickupTask
	const endpoint = `https://sharing.clickup.com/${task.teamId}/v/6-901100158350-1/t/h/${task.id}/b0ef6cf2ff76ff1`
</script>

<a href={endpoint} target="_blank" rel="noreferrer">
	<div class="card">
		<div class="title">
			<h6>{task.name}</h6>
			{#if task.organizationLogoSrc}
				<img class="org-logo" src={task.organizationLogoSrc} alt={`${task.organization} logo`} />
			{/if}
		</div>
		<div>
			<p class="description">{task.description?.slice(0, 109)}...</p>
		</div>
		<div class="details">
			{#if task.technologies}
				<div class="tech">
					{#each task.technologies as tech}
						<TechIcon {tech} />
					{/each}
				</div>
			{/if}
			<div class="project-links">
				{#if task.figmaHref}
					<a href={task.figmaHref} target="_blank" rel="noreferrer">
						<img src="/figma-link-logo.svg" />
					</a>
				{/if}
				{#if task.githubHref}
					<a href={task.githubHref} target="_blank" rel="noreferrer">
						<img src="/github-logo.svg" />
					</a>
				{/if}
			</div>
		</div>
	</div>
</a>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	.card {
		position: relative;
		width: 100%;
		margin-bottom: var(--s-4);
		padding: 15px var(--s-8) 20px var(--s-8);
		background-color: var(--color-bg-primary);
		filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
		.title {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			padding-bottom: var(--s-4);
			h6 {
				font-family: var(--font-headline);
				font-size: 1.4rem;
				font-weight: 700;
				letter-spacing: 1.25px;
				text-transform: uppercase;
				@include md {
					font-size: 1.2rem;
				}
				@include xl {
					font-size: 1.4rem;
				}
			}
			img {
				max-width: 50px;
				filter: var(--icon-filter);
				@include xl {
					max-width: 70px;
					max-height: 30px;
				}
			}
		}
		.description {
			position: relative;
			font-size: 0.8rem;
			overflow: hidden;
		}
		.details {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			margin-top: var(--s-7);
			width: 100%;
			line-height: 0;
			.project-links {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-end;
				width: 100%;
				img {
					width: 25px;
					max-width: 25px;
					max-height: 25px;
					margin-left: var(--s-4);
					filter: var(--icon-filter);
				}
			}
			.tech {
				display: flex;
				flex-direction: row;
				width: 100%;
			}
		}
	}
</style>
