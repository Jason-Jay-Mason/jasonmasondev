<script lang="ts">
	import type { ClickupTask } from "$lib/types"
	import { KanbanTechIcon as TechIcon } from "$lib/components"

	export let task: ClickupTask
	const endpoint = `https://sharing.clickup.com/${task.teamId}/v/6-901100158350-1/t/h/${task.id}/b0ef6cf2ff76ff1`
	const date = new Date(parseInt(task.dueDate))
</script>

<a href={endpoint} target="_blank" rel="noreferrer">
	<div class="card">
		<div class="title">
			<h6>{task.name}</h6>
			{#if task.organizationLogoSrc}
				<img src={task.organizationLogoSrc} alt={`${task.organization} logo`} />
			{/if}
		</div>
		<div>
			<p class="description">{task.description}</p>
		</div>
		<div class="details">
			{#if task.technologies}
				<div class="tech">
					{#each task.technologies as tech}
						<TechIcon {tech} />
					{/each}
				</div>
			{/if}
			<div class="due-date">
				<img src="/calendar.svg" />
				<p>
					{date.getMonth()}/{date.getDay()}/{date.getFullYear()}
				</p>
			</div>
		</div>
	</div>
</a>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	.card {
		position: relative;
		width: 100%;
		margin-bottom: var(--s-6);
		padding: 20px 35px 20px 35px;
		background-color: var(--color-card);
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
				max-height: 25px;
				max-width: 70px;
				filter: var(--icon-filter);
				@include xl {
					max-height: 25px;
					max-width: 70px;
				}
			}
		}
		.description {
			position: relative;
			font-size: 0.8rem;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}
		.details {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			margin: var(--s-7) 0 6px 0;
			line-height: 0;
			.due-date {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-end;
				width: 100%;
				img {
					width: 100%;
					height: 100%;
					max-width: 45px;
					max-height: 18px;
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
