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
			<img src={task.organizationLogoSrc} alt={`${task.organization} logo`} />
		</div>
		<p class="description">{task.description?.slice(0, 90)}...</p>
		<div class="details">
			<div class="tech">
				{#each task.technologies as tech}
					<TechIcon {tech} />
				{/each}
			</div>
			<div class="project-links">
				{#if task.githubHref}
					<a href={task.githubHref} target="_blank" rel="noreferrer">
						<img src="/github-logo.svg" />
					</a>
				{/if}
				{#if task.figmaHref}
					<a href={task.figmaHref} target="_blank" rel="noreferrer">
						<img src="/github-logo.svg" />
					</a>
				{/if}
			</div>
		</div>
	</div>
</a>

<style lang="scss">
	.card {
		position: relative;
		width: 100%;
		background-color: var(--color-bg-primary);
		padding: var(--s-7) var(--s-7);
		.title,
		.details {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
		.title {
			h6 {
				font-family: var(--font-headline);
				font-size: 1.3rem;
				font-weight: 700;
				letter-spacing: 1.25px;
			}
			img {
				max-width: 70px;
			}
		}
		.description {
			font-size: 0.8rem;
		}
		.details {
			.project-links,
			.tech {
				width: 100%;
				display: flex;
				flex-direction: row;
			}
		}
	}
</style>
