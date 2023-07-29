<script lang="ts">
	import type { KanbanFilterOptions, KanbanFilter, DateRange } from "$lib/types"
	import { KanbanFilterType } from "$lib/types"
	import { SearchIcon } from "$lib/components"

	export let options: KanbanFilterOptions | undefined = undefined
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
		font-size: 0.9rem;
		text-align: center;
		color: var(--color-text-body);
		padding: var(--s-4) 20px;
		border: solid 2px var(--color-rock-100);
		background-color: var(--color-bg-field);
	}
	input::placeholder {
		font-size: 0.9rem;
		font-family: var(--font-headline);
		font-weight: 600;
		letter-spacing: 1.3px;
		color: var(--color-rock-100);
		text-transform: uppercase;
		text-align: center;
		opacity: 1;
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
			font-size: 0.8rem;
			padding: 0 var(--s-4);
			white-space: nowrap;
		}
	}
</style>
