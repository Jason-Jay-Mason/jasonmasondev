<script lang="ts">
	import type { KanbanFilterOptions, KanbanFilter, DateRange } from "$lib/types"
	import { KanbanFilterType } from "$lib/types"
	import { SearchIcon } from "$lib/components"

	export let options: KanbanFilterOptions | undefined
	export let filter: KanbanFilter<any>

	function handlePropChange(e) {
		if (options) {
			const selection = options[e.target.value]
			if (selection.filterType === KanbanFilterType.dateRange) {
				const next: KanbanFilter<DateRange> = {
					id: filter?.id,
					...selection
				}
				filter = next
			} else {
				filter = { id: filter?.id, ...options[e.target.value] }
			}
		}
	}
</script>

{#if filter && filter.filterType === KanbanFilterType.fuzzyFind}
	<div class="fuzzy">
		<SearchIcon />
		<input placeholder="Fuzzy Find" bind:value={filter.value} />
	</div>
{/if}

{#if options}
	<div class="container">
		<select on:change={handlePropChange} bind:value={filter.key}>
			<option>---</option>
			{#each Object.keys(options) as key}
				<option value={key}>{options[key].label}</option>
			{/each}
		</select>
		{#if filter}
			{#if filter.filterType === KanbanFilterType.contains}
				<p>contains</p>
				<input bind:value={filter.value} />
			{/if}

			{#if filter.filterType === KanbanFilterType.dateRange && typeof filter.value?.start}
				<p>between</p>
				<input bind:value={filter.value.start} type="date" />
				<p>and</p>
				<input bind:value={filter.value.end} type="date" />
			{/if}

			{#if filter.filterType === KanbanFilterType.picklist && filter.options}
				<p>include</p>
				<select bind:value={filter.value}>
					{#each filter.options as option}
						<option>{option}</option>
					{/each}
				</select>
			{/if}
		{/if}
	</div>
{/if}

<style lang="scss">
	.fuzzy {
		position: relative;
		height: fit-content;
		width: fit-content;
		input {
			height: 48px;
		}
	}
	select,
	input {
		color: var(--color-text-body);
		background-color: var(--color-bg-primary);
		border: solid 2px var(--color-rock-200);
		padding: var(--s-4) 20px;
		font-size: 0.9rem;
		text-align: center;
	}
	input::placeholder {
		text-align: center;
		font-size: 0.9rem;
		color: var(--color-rock-100);
		opacity: 1;
		text-transform: uppercase;
		font-family: var(--font-headline);
		letter-spacing: 1.3px;
	}
	input:focus::placeholder {
		opacity: 0;
	}
	.container {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		width: 96%;
		input {
			width: 100%;
		}
		input[type="date"] {
			font-size: 0.8rem;
			width: 100%;
			padding: 5px 0;
		}
		p {
			padding: 0 var(--s-4);
			font-size: 0.8rem;
			white-space: nowrap;
		}
	}
</style>
