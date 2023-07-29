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
			<div class="due-date">
				<img src="/calendar-icon.svg" alt="Calendar icon" />
				<p>
					{date.getMonth()}/{date.getDay()}/{date.getFullYear()}
				</p>
			</div>

			{#if task.technologies}
				<div class="tech">
					{#each task.technologies as tech}
						<TechIcon {tech} />
					{/each}
				</div>
			{/if}
		</div>
	</div>
</a>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	.card {
		position: relative;
		width: 100%;
		margin-bottom: var(--s-6);
		padding: 18px 20px 18px 20px;
		background-color: var(--color-bg-card);
		border: solid 2px var(--color-rock-100);
		@include xs {
			padding: 22px 30px 18px 30px;
		}
		.title {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			padding-bottom: var(--s-4);
			h6 {
				font-size: 1rem;
				font-family: var(--font-headline);
				font-weight: 700;
				line-height: 1.5rem;
				letter-spacing: 1.25px;
				text-transform: uppercase;
				@include xs {
					font-size: 1.2rem;
				}
			}
			img {
				display: none;
				max-height: 25px;
				max-width: 70px;
				filter: var(--icon-filter);
				@include xs {
					display: block;
				}
				@include xl {
					max-height: 25px;
					max-width: 70px;
				}
			}
		}
		.description {
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			font-size: 0.8rem;
			overflow: hidden;
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
				justify-content: flex-start;
				width: 100%;
				font-size: 0.8rem;
				@include xs {
					font-size: 1rem;
				}
				img {
					height: 100%;
					max-height: 15px;
					margin: -1px 8px 0 0;
					filter: var(--icon-filter);
				}
			}
			.tech {
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				width: 100%;
			}
		}
	}
</style>
